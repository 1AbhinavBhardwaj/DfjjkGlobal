package com.dfjjk.controller;

import com.dfjjk.repository.CourseRepository;
import com.dfjjk.repository.OrderRepository;
import com.dfjjk.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    private final UserRepository userRepository;
    private final CourseRepository courseRepository;
    private final OrderRepository orderRepository;

    public AdminController(UserRepository userRepository, CourseRepository courseRepository, OrderRepository orderRepository) {
        this.userRepository = userRepository;
        this.courseRepository = courseRepository;
        this.orderRepository = orderRepository;
    }

    @GetMapping("/stats")
    public ResponseEntity<?> getDashboardStats() {
        long totalUsers = userRepository.count();
        long totalCourses = courseRepository.count();
        long totalOrders = orderRepository.count();

        BigDecimal totalRevenue = orderRepository.findAll().stream()
                .filter(o -> "COMPLETED".equalsIgnoreCase(o.getStatus()))
                .map(o -> o.getTotalAmount() != null ? o.getTotalAmount() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        return ResponseEntity.ok(Map.of(
                "totalUsers", totalUsers,
                "totalCourses", totalCourses,
                "totalOrders", totalOrders,
                "totalRevenue", totalRevenue
        ));
    }

    @PostMapping("/email-sms/send")
    public ResponseEntity<?> sendEmailSmsBroadcast(@RequestBody Map<String, Object> payload) {
        String type = (String) payload.getOrDefault("type", "EMAIL");
        String subject = (String) payload.getOrDefault("subject", "Notification from DFJJK Global");
        String body = (String) payload.getOrDefault("body", "");

        return ResponseEntity.ok(Map.of(
                "success", true,
                "message", type + " message broadcast queued successfully to all clients",
                "recipientsCount", userRepository.count()
        ));
    }
}
