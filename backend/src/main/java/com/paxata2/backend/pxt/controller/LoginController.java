package com.paxata2.backend.pxt.controller;

import com.paxata2.backend.pxt.service.CheckLogin;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/back")
@AllArgsConstructor
public class LoginController {
    private CheckLogin checkLogin;

    @PostMapping("/login")
    public ResponseEntity loginUser(@RequestParam("userName") String username, @RequestParam("password") String password){
        return checkLogin.checkUser(username, password);
    }
}
