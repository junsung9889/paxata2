package com.paxata2.backend.pxt.controller;

import com.paxata2.backend.pxt.entity.PaxataUser;
import com.paxata2.backend.pxt.repository.LoginRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/back")
public class LoginController {
    private LoginRepository loginRepository;

    @Autowired
    public LoginController(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    @GetMapping("/login")
    public Iterable<PaxataUser> login(){
        return loginRepository.findAll();
    }
}
