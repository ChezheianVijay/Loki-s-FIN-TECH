package com.loki.user.service;

import com.loki.user.dto.UserRegistrationRequest;
import com.loki.user.dto.UserResponse;
import com.loki.user.dto.UserUpdateRequest;
import com.loki.user.entity.User;
import com.loki.user.exception.DuplicateUserException;
import com.loki.user.exception.UserNotFoundException;
import com.loki.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserResponse createUser(UserRegistrationRequest request) {

        if (userRepository.existsByAuthUserId(request.getAuthUserId())) {
            throw new DuplicateUserException("User profile already exists");
        }

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new DuplicateUserException("Email already registered");
        }

        User user = new User();
        user.setAuthUserId(request.getAuthUserId());
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());

        User savedUsr = userRepository.save(user);
        return mapUserResponse(savedUsr);
    }

    public List<UserResponse> getAllUsers() {
        return userRepository.findAll().stream().map(this::mapUserResponse).toList();
    }

    public UserResponse updateUser(Long id, UserUpdateRequest request) {
        User user = userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User with id : " + id + " not found"));

        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());

        User updatedUser = userRepository.save(user);

        return mapUserResponse(updatedUser);
    }

    public UserResponse getUserById(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User with id : " + id + " not found"));
        return mapUserResponse(user);
    }

    public void deleteUser(Long id){
        User user = userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User with id : " + id + " not found"));

        userRepository.delete(user);
    }

    private UserResponse mapUserResponse(User user) {
        return new UserResponse(
                user.getId(),
                user.getAuthUserId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getPhone());
    }
}
