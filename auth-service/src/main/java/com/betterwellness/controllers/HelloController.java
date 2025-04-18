package com.betterwellness.controllers;

import com.betterwellness.dto.HelloResponseDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/hello")
    public HelloResponseDTO hello(){
        return new HelloResponseDTO("Hello from Authorized API request.");
    }

}
