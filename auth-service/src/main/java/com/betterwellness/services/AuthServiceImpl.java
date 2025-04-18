package com.betterwellness.services;

import com.betterwellness.dto.SignupRequestDTO;
import com.betterwellness.entities.Customer;
import com.betterwellness.repository.CustomerDao;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    private final CustomerDao customerDao;

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AuthServiceImpl(CustomerDao customerDao, PasswordEncoder passwordEncoder) {
        this.customerDao = customerDao;
        this.passwordEncoder = passwordEncoder;
    }


    @Override
    public Customer createCustomer(SignupRequestDTO signupRequest) {
        //Check if customer already exist
        if (customerDao.existsByEmail(signupRequest.getEmail())) {
            return null;
        }

        Customer customer = new Customer();
        BeanUtils.copyProperties(signupRequest, customer);

        //Hash the password before saving
        String hashPassword = passwordEncoder.encode(signupRequest.getPassword());
        customer.setPassword(hashPassword);
        Customer createdCustomer = customerDao.save(customer);
        customer.setId(createdCustomer.getId());
        return customer;
    }
}
