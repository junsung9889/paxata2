package com.paxata2.backend.pxt.service;

import com.paxata2.backend.jwt.JwtFilter;
import com.paxata2.backend.jwt.TokenProvider;
import com.paxata2.backend.pxt.entity.Users;
import com.paxata2.backend.pxt.repository.UsersMongoDBRepository;
import com.paxata2.backend.pxt.util.HashUtil;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CheckLogin {
    private final UsersMongoDBRepository usersMongoDBRepository;
    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    public CheckLogin(UsersMongoDBRepository usersMongoDBRepository,TokenProvider tokenProvider, AuthenticationManagerBuilder authenticationManagerBuilder) {
        this.usersMongoDBRepository = usersMongoDBRepository;
        this.tokenProvider = tokenProvider;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
    }

    public ResponseEntity checkUser(String username, String password){
        Optional<Users> usersList = usersMongoDBRepository.findUsersByUsername(username);
        System.out.println(usersList);
        if(usersList.isEmpty()) {
            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "");
            return new ResponseEntity("ID invalid",httpHeaders ,HttpStatus.BAD_REQUEST);
        }
        else{
            String pw = usersList.map(users -> users.password).stream().findFirst().get();
            String hash =  HashUtil.createHash(password,usersList.map(users -> users.id).stream().findFirst().get());
            System.out.println(pw + "\n" + hash);
            if(pw.equals("$PES$:" + hash)) {
                UsernamePasswordAuthenticationToken authenticationToken =
                        new UsernamePasswordAuthenticationToken(username,"$PES$:" + hash);
                Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
                SecurityContextHolder.getContext().setAuthentication(authentication);
                String jwt = tokenProvider.createToken(authentication);
                HttpHeaders httpHeaders = new HttpHeaders();
                httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);

                return new ResponseEntity<>(jwt, httpHeaders, HttpStatus.OK);
            }
            else {
                HttpHeaders httpHeaders = new HttpHeaders();
                httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "");
                return new ResponseEntity("Password invalid",httpHeaders, HttpStatus.CONFLICT);
            }
        }
    }
}
