package com.dfjjk.controller;

import com.dfjjk.model.Course;
import com.dfjjk.repository.CourseRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private final CourseRepository courseRepository;

    public CourseController(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses(@RequestParam(required = false) String category) {
        if (category != null && !category.isBlank()) {
            return ResponseEntity.ok(courseRepository.findByCategoryContainingIgnoreCase(category));
        }
        return ResponseEntity.ok(courseRepository.findAll());
    }

    @GetMapping("/{sku}")
    public ResponseEntity<?> getCourseBySku(@PathVariable String sku) {
        Optional<Course> course = courseRepository.findBySku(sku);
        if (course.isPresent()) {
            return ResponseEntity.ok(course.get());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Course> createCourse(@RequestBody Course course) {
        if (course.getSku() == null || course.getSku().isBlank()) {
            course.setSku("CRS-" + System.currentTimeMillis());
        }
        Course saved = courseRepository.save(course);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> updateCourse(@PathVariable Long id, @RequestBody Course courseDetails) {
        Optional<Course> courseOpt = courseRepository.findById(id);
        if (courseOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Course course = courseOpt.get();
        course.setName(courseDetails.getName());
        course.setSummary(courseDetails.getSummary());
        course.setDescription(courseDetails.getDescription());
        course.setPrice(courseDetails.getPrice());
        course.setDuration(courseDetails.getDuration());
        course.setCategory(courseDetails.getCategory());
        course.setImageUrl(courseDetails.getImageUrl());
        course.setActive(courseDetails.getActive());

        Course updated = courseRepository.save(course);
        return ResponseEntity.ok(updated);
    }

    @PostMapping("/{sku}/toggle-status")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> toggleCourseStatus(@PathVariable String sku) {
        Optional<Course> courseOpt = courseRepository.findBySku(sku);
        if (courseOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Course course = courseOpt.get();
        course.setActive(!course.getActive());
        courseRepository.save(course);

        return ResponseEntity.ok(Map.of("message", "Course status updated", "active", course.getActive()));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteCourse(@PathVariable Long id) {
        if (!courseRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        courseRepository.deleteById(id);
        return ResponseEntity.ok(Map.of("message", "Course deleted successfully"));
    }
}
