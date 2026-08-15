package com.dfjjk.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_courses")
public class UserCourse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false)
    private Long courseId;

    private String courseSku;

    private String courseName;

    private String status = "ACTIVE";

    private LocalDateTime registeredAt = LocalDateTime.now();

    public UserCourse() {}

    public UserCourse(Long userId, Long courseId, String courseSku, String courseName) {
        this.userId = userId;
        this.courseId = courseId;
        this.courseSku = courseSku;
        this.courseName = courseName;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public Long getCourseId() { return courseId; }
    public void setCourseId(Long courseId) { this.courseId = courseId; }

    public String getCourseSku() { return courseSku; }
    public void setCourseSku(String courseSku) { this.courseSku = courseSku; }

    public String getCourseName() { return courseName; }
    public void setCourseName(String courseName) { this.courseName = courseName; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDateTime getRegisteredAt() { return registeredAt; }
    public void setRegisteredAt(LocalDateTime registeredAt) { this.registeredAt = registeredAt; }
}
