package com.paxata2.backend.pxt.service;

import com.paxata2.backend.pxt.entity.Users;
import com.paxata2.backend.pxt.repository.UsersRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginService {

    private final UsersRepository  usersRepository;


    public LoginService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public List<Users> getAllUsers(){
        return usersRepository.findAll();
    }
}
