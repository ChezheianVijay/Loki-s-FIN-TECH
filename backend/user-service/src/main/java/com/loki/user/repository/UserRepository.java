package com.loki.user.repository;

import com.loki.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByAuthUserId(Long authUserId);

    boolean existsByAuthUserId(Long authUserId);

    boolean existsByEmail(String email);
}
