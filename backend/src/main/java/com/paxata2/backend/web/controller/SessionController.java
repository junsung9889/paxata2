package com.paxata2.backend.web.controller;

import com.paxata2.backend.web.entity.User;
import com.paxata2.backend.web.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/session")
@AllArgsConstructor
public class SessionController {
    private final UserService userService;

    @GetMapping("/insert")
    public User userInsert(){
        return userService.insertUser();
    }
}
