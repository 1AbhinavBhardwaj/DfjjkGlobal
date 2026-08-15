package com.dfjjk.repository;

import com.dfjjk.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface CourseRepository extends JpaRepository<Course, Long> {
    Optional<Course> findBySku(String sku);
    List<Course> findByActive(Boolean active);
    List<Course> findByCategoryContainingIgnoreCase(String category);
}
