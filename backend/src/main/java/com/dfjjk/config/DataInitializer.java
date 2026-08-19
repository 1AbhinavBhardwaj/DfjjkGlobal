package com.dfjjk.config;

import com.dfjjk.model.*;
import com.dfjjk.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final CourseRepository courseRepository;
    private final CountryRepository countryRepository;
    private final OrderRepository orderRepository;
    private final PasswordEncoder passwordEncoder;

    public DataInitializer(UserRepository userRepository, CourseRepository courseRepository,
                           CountryRepository countryRepository, OrderRepository orderRepository,
                           PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.courseRepository = courseRepository;
        this.countryRepository = countryRepository;
        this.orderRepository = orderRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        // Seed Countries if empty
        if (countryRepository.count() == 0) {
            countryRepository.saveAll(List.of(
                    new Country("US", "United States", "+1"),
                    new Country("GB", "United Kingdom", "+44"),
                    new Country("IN", "India", "+91"),
                    new Country("CA", "Canada", "+1"),
                    new Country("DE", "Germany", "+49"),
                    new Country("FR", "France", "+33"),
                    new Country("AU", "Australia", "+61"),
                    new Country("AE", "United Arab Emirates", "+971"),
                    new Country("NG", "Nigeria", "+234"),
                    new Country("KE", "Kenya", "+254")
            ));
        }

        // Seed Users if empty
        if (userRepository.count() == 0) {
            User admin = new User("DFJJK Admin", "admin@dfjjk.com", passwordEncoder.encode("admin123"), "ROLE_ADMIN");
            admin.setPhone("+1 (555) 019-2831");
            admin.setCountry("United States");

            User student = new User("Alex Rivera", "user@dfjjk.com", passwordEncoder.encode("user123"), "ROLE_USER");
            student.setPhone("+1 (555) 014-9922");
            student.setCountry("Canada");

            userRepository.saveAll(List.of(admin, student));
        }

        // Seed Courses if empty
        if (courseRepository.count() == 0) {
            Course c1 = new Course(
                    "DFJJK-FULLSTACK-101",
                    "Enterprise Full-Stack Architecture Masterclass",
                    "Master modern Java, Spring Boot, React, and cloud-native deployments for enterprise applications.",
                    "An intensive 12-week comprehensive program designed for developers aiming to master high-scale architecture, microservices, secure authentication, reactive systems, and state-of-the-art frontend frameworks.",
                    new BigDecimal("499.00"),
                    "12 Weeks",
                    "Software Engineering",
                    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
            );
            c1.getFaqs().addAll(List.of(
                    new CourseFaq(c1, "What are the prerequisites?", "Basic understanding of programming concepts and Java or JavaScript syntax."),
                    new CourseFaq(c1, "Will I receive a certificate?", "Yes, a verified DFJJK Global Industry Certificate is awarded upon successful project completion.")
            ));

            Course c2 = new Course(
                    "DFJJK-CLOUD-DEVOP",
                    "Cloud DevOps & Kubernetes Specialization",
                    "Deploy, auto-scale, and secure containerized infrastructure with AWS, Docker, and Kubernetes.",
                    "Learn production-grade CI/CD pipelines, GitOps with ArgoCD, Infrastructure as Code using Terraform, and multi-region Kubernetes clusters monitoring with Prometheus and Grafana.",
                    new BigDecimal("399.00"),
                    "8 Weeks",
                    "Cloud & Infrastructure",
                    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
            );
            c2.getFaqs().addAll(List.of(
                    new CourseFaq(c2, "Are cloud credits provided?", "Yes, students receive $200 in free AWS cloud lab credits during the course."),
                    new CourseFaq(c2, "Is this course live or self-paced?", "It includes live weekly interactive workshops along with on-demand HD video content.")
            ));

            Course c3 = new Course(
                    "DFJJK-AI-DATA-301",
                    "Applied AI & Machine Learning Engineering",
                    "Build intelligent LLM applications, custom neural networks, and scalable data pipelines.",
                    "Dive deep into PyTorch, LangChain, vector databases (Pinecone/Milvus), fine-tuning open-weight LLMs, and deploying AI models into low-latency production APIs.",
                    new BigDecimal("599.00"),
                    "10 Weeks",
                    "Artificial Intelligence",
                    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"
            );
            c3.getFaqs().addAll(List.of(
                    new CourseFaq(c3, "Do I need a GPU machine?", "No, cloud GPU notebooks (Google Colab Pro & Modal) will be provided for training runs.")
            ));

            Course c4 = new Course(
                    "DFJJK-CYBER-SEC-202",
                    "Offensive Security & Ethical Hacking",
                    "Practical penetration testing, zero-trust network defense, and smart contract vulnerability auditing.",
                    "Hands-on labs covering web app vulnerability assessment, privilege escalation, memory exploitation, threat hunting, and modern red team tradecraft.",
                    new BigDecimal("449.00"),
                    "9 Weeks",
                    "Cybersecurity",
                    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
            );

            Course ds1 = new Course(
                    "DFJJK-DS-POWERBI",
                    "Power BI: Data Visualization Excellence",
                    "Master Power BI, Microsoft Fabric, advanced DAX, data modeling, and performance optimization to build executive-ready interactive dashboards.",
                    "An end-to-end professional program transforming raw datasets into high-impact strategic insights. Learn Power Query (M Language), complex DAX calculations, semantic data modeling, Power BI Service administration, and Microsoft Fabric integration while preparing for the Microsoft PL-300 certification.",
                    new BigDecimal("349.00"),
                    "10–12 Live Interactive Sessions",
                    "Data Science",
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
            );
            ds1.getFaqs().addAll(List.of(
                    new CourseFaq(ds1, "Do I need prior coding knowledge for Power BI?", "No prior coding experience is required. We start from foundational data concepts before building up to advanced M code and DAX logic."),
                    new CourseFaq(ds1, "Does this course prepare me for the PL-300 exam?", "Yes! The curriculum aligns directly with Microsoft PL-300 certification objectives.")
            ));

            Course ds2 = new Course(
                    "DFJJK-DS-SQL",
                    "SQL Unlocked: Path to Data Excellence",
                    "Master hands-on SQL query writing, complex joins, CTEs, subqueries, and window functions to solve real-world analytical problems.",
                    "A comprehensive, practice-intensive SQL masterclass designed for aspiring Data Analysts, Data Engineers, and BI Professionals. Go from fundamental data retrieval to advanced analytical queries, window functions, query optimization, and real-world enterprise database case studies.",
                    new BigDecimal("299.00"),
                    "10 Live Interactive Sessions",
                    "Data Science",
                    "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80"
            );
            ds2.getFaqs().addAll(List.of(
                    new CourseFaq(ds2, "Which SQL dialect is used in this course?", "We cover ANSI SQL standards applicable to SQL Server, PostgreSQL, MySQL, Snowflake, and BigQuery."),
                    new CourseFaq(ds2, "Will I get practice datasets?", "Yes! You will receive realistic e-commerce, banking, and SaaS datasets with millions of rows for hands-on practice.")
            ));

            Course ds3 = new Course(
                    "DFJJK-DS-AI",
                    "Python → AI → Machine Learning → Deep Learning → NLP → Generative AI",
                    "A comprehensive end-to-end AI & Data Science program covering Python, Math, ML, Neural Networks, Transformers, LLMs, RAG, and Agentic AI Systems.",
                    "The ultimate zero-to-hero engineering masterclass designed for developers, data scientists, and AI architects. Master Python programming, AI mathematics, Supervised & Unsupervised ML, Deep Learning with PyTorch & TensorFlow, Natural Language Processing with Transformers, and production Generative AI with RAG, Vector DBs, and Agentic Frameworks.",
                    new BigDecimal("699.00"),
                    "16 Weeks",
                    "Data Science",
                    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"
            );
            ds3.getFaqs().addAll(List.of(
                    new CourseFaq(ds3, "Who is this program suitable for?", "This program is tailored for software engineers, data analysts, and IT professionals looking to transition into senior Data Science, Machine Learning, and AI Engineering roles."),
                    new CourseFaq(ds3, "Are cloud GPU resources provided for Deep Learning?", "Yes! All students get cloud GPU notebook environment access for model training and fine-tuning experiments.")
            ));

            courseRepository.saveAll(List.of(c1, c2, c3, c4, ds1, ds2, ds3));
        }

        // Seed Orders if empty
        if (orderRepository.count() == 0) {
            User student = userRepository.findByEmail("user@dfjjk.com").orElse(null);
            if (student != null) {
                Order demoOrder = new Order();
                demoOrder.setUserId(student.getId());
                demoOrder.setUserEmail(student.getEmail());
                demoOrder.setUserName(student.getName());
                demoOrder.setCourseSku("DFJJK-FULLSTACK-101");
                demoOrder.setCourseName("Enterprise Full-Stack Architecture Masterclass");
                demoOrder.setTotalAmount(new BigDecimal("499.00"));
                demoOrder.setPaymentMethod("Credit Card");
                demoOrder.setStatus("COMPLETED");
                demoOrder.setTransactionId("TXN-DFJJK88219");
                orderRepository.save(demoOrder);
            }
        }
    }
}
