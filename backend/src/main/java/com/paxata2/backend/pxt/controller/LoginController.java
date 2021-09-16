package com.paxata2.backend.pxt.controller;

import com.paxata2.backend.pxt.entity.Users;
import com.paxata2.backend.pxt.service.LoginService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/back")
public class LoginController {
    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @GetMapping("/login")
    public List<Users> fetchAllUsers(){
        return loginService.getAllUsers();
    }
}
