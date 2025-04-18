package com.betterwellness.services;

import com.betterwellness.dto.SignupRequestDTO;
import com.betterwellness.entities.Customer;

public interface AuthService {
    Customer createCustomer(SignupRequestDTO signupRequestDTO);
}
