# DFJJK Global Platform

DFJJK Global enterprise e-learning and technology platform.

## Technology Stack

- **Frontend**: React 18, HTML5, CSS3, JS/JSX, Vite, Lucide Icons, Glassmorphism Design System.
- **Backend**: Java 21, Spring Boot 3.2.3, Spring Security, JWT Token Authentication, Spring Data JPA, PostgreSQL Database.

## Project Structure

```
dfjjkglobal.com/
├── frontend/             # React SPA (Vite + React 18)
│   ├── src/
│   │   ├── api/          # Axios API Interceptor
│   │   ├── components/   # Navbar, Footer
│   │   ├── context/      # AuthContext
│   │   ├── pages/        # Home, Courses, CourseDetail, Services, About, Contact, Login, Register, UserDashboard, AdminDashboard
│   │   ├── index.css     # Glassmorphism Design System
│   │   └── App.jsx
│   └── package.json
│
└── backend/              # Spring Boot REST API
    ├── src/main/java/com/dfjjk/
    │   ├── config/       # DataInitializer Seeder
    │   ├── controller/   # REST Controllers
    │   ├── dto/          # Data Transfer Objects
    │   ├── model/        # JPA Entities
    │   ├── repository/   # Spring Data Repositories
    │   └── security/     # Spring Security & JWT Filters
    ├── pom.xml           # Maven Dependencies
    └── mvnw              # Maven Wrapper
```

## How to Run

### Frontend
```bash
cd frontend
npm run dev
```

### Backend
```bash
cd backend
./mvnw spring-boot:run
```
