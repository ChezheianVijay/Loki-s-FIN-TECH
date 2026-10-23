package com.loki.auth.service;

import com.loki.auth.client.UserServiceClient;
import com.loki.auth.dto.*;
import com.loki.auth.entity.User;
import com.loki.auth.exception.EmailAlreadyExistsException;
import com.loki.auth.exception.InvalidCredentialsException;
import com.loki.auth.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final UserServiceClient userServiceClient;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService, UserServiceClient userServiceClient) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.userServiceClient = userServiceClient;
    }

    @Transactional
    public SignupResponse registerUser(UserRegistrationRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new EmailAlreadyExistsException("Email already exists");
        }

        User user = new User();
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole("USER");

        User usrRepo = userRepository.save(user);

        UserServiceRegistrationRequest profileRequest = new UserServiceRegistrationRequest(usrRepo.getId(), usrRepo.getFirstName(), user.getLastName(), usrRepo.getEmail(), usrRepo.getPhone());

        userServiceClient.createuserProfile(profileRequest);

        return new SignupResponse(usrRepo.getId(), usrRepo.getFirstName(), usrRepo.getLastName(), usrRepo.getEmail(), usrRepo.getPhone(), usrRepo.getRole());
    }

    public LoginResponse loginUser(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new InvalidCredentialsException("Invalid email or password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new InvalidCredentialsException("Invalid email or password");
        }

        String token = jwtService.generateToken(user.getId(), user.getEmail(), user.getRole());

        return new LoginResponse(user.getId(), user.getFirstName(), user.getLastName(), user.getEmail(), user.getPhone(), user.getRole(), token);
    }
}
