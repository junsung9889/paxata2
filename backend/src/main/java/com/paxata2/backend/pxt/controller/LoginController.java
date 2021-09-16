package com.paxata2.backend.pxt.controller;

import com.paxata2.backend.pxt.entity.Users;
import com.paxata2.backend.pxt.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/back")
public class LoginController {
    private final UsersRepository usersRepository;

    @Autowired
    public LoginController(UsersRepository loginRepository) {
        this.usersRepository = loginRepository;
    }

    @RequestMapping("/login")
    public List<Users> login(){
        return usersRepository.findAll();
    }
}
