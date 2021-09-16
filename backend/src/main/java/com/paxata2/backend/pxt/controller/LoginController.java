package com.paxata2.backend.pxt.controller;

import com.paxata2.backend.pxt.entity.Users;
import com.paxata2.backend.pxt.repository.UsersMongoDBRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/back")
@AllArgsConstructor
public class LoginController {
    private final UsersMongoDBRepository usersMongoDBRepository;

    @GetMapping("/login")
    public List<Users> login(){
        return usersMongoDBRepository.findAll();
    }
}
