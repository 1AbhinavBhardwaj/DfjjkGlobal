package com.dfjjk.controller;

import com.dfjjk.dto.AuthRequest;
import com.dfjjk.dto.AuthResponse;
import com.dfjjk.dto.RegisterRequest;
import com.dfjjk.model.User;
import com.dfjjk.repository.UserRepository;
import com.dfjjk.security.JwtTokenProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider tokenProvider;

    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtTokenProvider tokenProvider) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenProvider = tokenProvider;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        Optional<User> userOptional = userRepository.findByEmail(request.getEmail());
        if (userOptional.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Invalid email or password"));
        }

        User user = userOptional.get();
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            return ResponseEntity.badRequest().body(Map.of("message", "Invalid email or password"));
        }

        String token = tokenProvider.generateToken(user.getEmail(), user.getRole(), user.getId());
        return ResponseEntity.ok(new AuthResponse(token, user.getEmail(), user.getName(), user.getRole(), user.getId()));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email is already registered"));
        }

        User user = new User(
                request.getName(),
                request.getEmail(),
                passwordEncoder.encode(request.getPassword()),
                "ROLE_USER"
        );
        user.setPhone(request.getPhone());
        user.setCountry(request.getCountry());

        userRepository.save(user);

        String token = tokenProvider.generateToken(user.getEmail(), user.getRole(), user.getId());
        return ResponseEntity.ok(new AuthResponse(token, user.getEmail(), user.getName(), user.getRole(), user.getId()));
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.getPrincipal() instanceof User) {
            User user = (User) auth.getPrincipal();
            return ResponseEntity.ok(Map.of(
                    "id", user.getId(),
                    "name", user.getName(),
                    "email", user.getEmail(),
                    "role", user.getRole(),
                    "phone", user.getPhone() != null ? user.getPhone() : "",
                    "country", user.getCountry() != null ? user.getCountry() : ""
            ));
        }
        return ResponseEntity.status(401).body(Map.of("message", "Not authenticated"));
    }
}
