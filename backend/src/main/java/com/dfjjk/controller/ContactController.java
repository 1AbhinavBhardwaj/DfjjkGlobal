package com.dfjjk.controller;

import com.dfjjk.dto.ContactRequest;
import com.dfjjk.model.ContactMessage;
import com.dfjjk.repository.ContactMessageRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactMessageRepository contactMessageRepository;

    public ContactController(ContactMessageRepository contactMessageRepository) {
        this.contactMessageRepository = contactMessageRepository;
    }

    @PostMapping
    public ResponseEntity<?> submitContactForm(@RequestBody ContactRequest request) {
        if (request.getEmail() == null || request.getMessage() == null) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email and message are required"));
        }

        ContactMessage msg = new ContactMessage(
                request.getName(),
                request.getEmail(),
                request.getPhone(),
                request.getSubject(),
                request.getMessage()
        );

        contactMessageRepository.save(msg);

        return ResponseEntity.ok(Map.of("message", "Thank you for contacting DFJJK Global! We will get back to you shortly."));
    }
}
