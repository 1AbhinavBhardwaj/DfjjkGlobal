package com.dfjjk.controller;

import com.dfjjk.dto.OrderRequest;
import com.dfjjk.model.Course;
import com.dfjjk.model.Order;
import com.dfjjk.model.User;
import com.dfjjk.model.UserCourse;
import com.dfjjk.repository.CourseRepository;
import com.dfjjk.repository.OrderRepository;
import com.dfjjk.repository.UserCourseRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderRepository orderRepository;
    private final CourseRepository courseRepository;
    private final UserCourseRepository userCourseRepository;

    public OrderController(OrderRepository orderRepository, CourseRepository courseRepository, UserCourseRepository userCourseRepository) {
        this.orderRepository = orderRepository;
        this.courseRepository = courseRepository;
        this.userCourseRepository = userCourseRepository;
    }

    @PostMapping("/checkout")
    public ResponseEntity<?> checkout(@RequestBody OrderRequest request) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !(auth.getPrincipal() instanceof User user)) {
            return ResponseEntity.status(401).body(Map.of("message", "User authentication required"));
        }

        Optional<Course> courseOpt = courseRepository.findBySku(request.getCourseSku());
        if (courseOpt.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Invalid course SKU"));
        }

        Course course = courseOpt.get();

        Order order = new Order();
        order.setUserId(user.getId());
        order.setUserEmail(user.getEmail());
        order.setUserName(user.getName());
        order.setCourseSku(course.getSku());
        order.setCourseName(course.getName());
        order.setTotalAmount(course.getPrice());
        order.setPaymentMethod(request.getPaymentMethod() != null ? request.getPaymentMethod() : "Card");
        order.setStatus("COMPLETED");
        order.setTransactionId("TXN-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase());

        orderRepository.save(order);

        // Auto enroll user in course
        if (userCourseRepository.findByUserIdAndCourseId(user.getId(), course.getId()).isEmpty()) {
            UserCourse userCourse = new UserCourse(user.getId(), course.getId(), course.getSku(), course.getName());
            userCourseRepository.save(userCourse);
        }

        return ResponseEntity.ok(order);
    }

    @GetMapping("/my-orders")
    public ResponseEntity<?> getMyOrders() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !(auth.getPrincipal() instanceof User user)) {
            return ResponseEntity.status(401).body(Map.of("message", "User authentication required"));
        }

        return ResponseEntity.ok(orderRepository.findByUserId(user.getId()));
    }

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Order>> getAllOrders() {
        return ResponseEntity.ok(orderRepository.findAll());
    }

    @PutMapping("/{id}/status")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> updateOrderStatus(@PathVariable Long id, @RequestBody Map<String, String> statusBody) {
        Optional<Order> orderOpt = orderRepository.findById(id);
        if (orderOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Order order = orderOpt.get();
        order.setStatus(statusBody.getOrDefault("status", "COMPLETED"));
        orderRepository.save(order);

        return ResponseEntity.ok(order);
    }
}
