package com.paxata2.backend.pxt.service;

import org.springframework.security.crypto.password.PasswordEncoder;

public class CustomPwEncoder implements PasswordEncoder {
    @Override
    public String encode(CharSequence pw){
        return pw.toString();
    }

    @Override
    public boolean matches(CharSequence rawPw, String encodedPw){
        return encodedPw.equals(encode(rawPw));
    }
}
