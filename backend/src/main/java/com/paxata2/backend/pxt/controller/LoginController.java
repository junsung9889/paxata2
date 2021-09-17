package com.paxata2.backend.pxt.controller;

import com.paxata2.backend.pxt.entity.Users;
import com.paxata2.backend.pxt.repository.UsersMongoDBRepository;
import com.paxata2.backend.pxt.service.CheckLogin;
import lombok.AllArgsConstructor;
import org.json.simple.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/back")
@AllArgsConstructor
public class LoginController {
    private CheckLogin checkLogin;

    @PostMapping("/login")
    public ResponseEntity loginUser(@RequestParam("userName") String username, @RequestParam("password") String password){
        System.out.println(username + password);
        return checkLogin.checkUser(username, password);
    }
}
