package com.paxata2.backend.pxt.controller;

import com.paxata2.backend.pxt.entity.PaxataUser;
import com.paxata2.backend.pxt.repository.LoginRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class LoginController {
    private final LoginRepository loginRepository;

    public LoginController(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    @GetMapping("/back/login")
    public List<PaxataUser> login(){
        return loginRepository.findAll();
    }
}
