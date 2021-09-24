package com.paxata2.backend.pxt.service;

import com.paxata2.backend.pxt.entity.Users;
import com.paxata2.backend.pxt.repository.UsersMongoDBRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Component("userDetailsService")
public class CustomUserDetailsService implements UserDetailsService {
    private final UsersMongoDBRepository usersMongoDBRepository;

    public CustomUserDetailsService(UsersMongoDBRepository usersMongoDBRepository) {
        this.usersMongoDBRepository = usersMongoDBRepository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(final String username) {
        return usersMongoDBRepository.findUsersByUsername(username)
                .map(user -> createUser(username, user))
                .orElseThrow(() -> new UsernameNotFoundException(username + " -> 데이터베이스에서 찾을 수 없습니다."));
    }

    private org.springframework.security.core.userdetails.User createUser(String username, Users user) {

        return new org.springframework.security.core.userdetails.User(user.getUsername(),
                user.getPassword(), );
    }
}