package com.dfjjk.controller;

import com.dfjjk.model.User;
import com.dfjjk.model.UserCourse;
import com.dfjjk.repository.UserRepository;
import com.dfjjk.repository.UserCourseRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository userRepository;
    private final UserCourseRepository userCourseRepository;

    public UserController(UserRepository userRepository, UserCourseRepository userCourseRepository) {
        this.userRepository = userRepository;
        this.userCourseRepository = userCourseRepository;
    }

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    @PutMapping("/profile")
    public ResponseEntity<?> updateProfile(@RequestBody Map<String, String> body) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !(auth.getPrincipal() instanceof User currentUser)) {
            return ResponseEntity.status(401).body(Map.of("message", "Not authenticated"));
        }

        Optional<User> userOpt = userRepository.findById(currentUser.getId());
        if (userOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        User user = userOpt.get();
        if (body.containsKey("name") && !body.get("name").isBlank()) user.setName(body.get("name"));
        if (body.containsKey("phone")) user.setPhone(body.get("phone"));
        if (body.containsKey("country")) user.setCountry(body.get("country"));

        userRepository.save(user);

        return ResponseEntity.ok(Map.of(
                "message", "Profile updated successfully",
                "name", user.getName(),
                "phone", user.getPhone() != null ? user.getPhone() : "",
                "country", user.getCountry() != null ? user.getCountry() : ""
        ));
    }

    @GetMapping("/my-courses")
    public ResponseEntity<?> getMyEnrolledCourses() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !(auth.getPrincipal() instanceof User user)) {
            return ResponseEntity.status(401).body(Map.of("message", "Not authenticated"));
        }

        List<UserCourse> enrolled = userCourseRepository.findByUserId(user.getId());
        return ResponseEntity.ok(enrolled);
    }
}
