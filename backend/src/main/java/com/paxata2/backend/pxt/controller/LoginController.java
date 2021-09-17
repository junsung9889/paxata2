package com.paxata2.backend.pxt.controller;

import com.paxata2.backend.pxt.entity.Users;
import com.paxata2.backend.pxt.repository.UsersMongoDBRepository;
import com.paxata2.backend.pxt.service.CheckLogin;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/back")
@AllArgsConstructor
public class LoginController {
    private CheckLogin checkLogin;

    @GetMapping("/login")
    public String loginUser(){
        return checkLogin.checkUser("superuser", "superuser");
    }
}
