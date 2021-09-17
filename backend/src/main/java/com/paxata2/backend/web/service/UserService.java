package com.paxata2.backend.web.service;

import com.paxata2.backend.web.entity.User;
import com.paxata2.backend.web.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User insertUser() {
        final User user = User.builder()
                .id("test_id1")
                .username("test_user")
                .token("test_token")
                .build();
        return userRepository.save(user);
    }
}
