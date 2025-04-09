package com.example.api;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @GetMapping("/reports")
    public String reports() {
        return "Some reports";
    }

    @GetMapping("/api")
    public String api() {
        return "Some api";
    }
}
