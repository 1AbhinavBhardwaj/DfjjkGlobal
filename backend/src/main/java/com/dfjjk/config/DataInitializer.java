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

        // Seed/Update Courses if not all present
        if (courseRepository.count() < 15) {
            Course f1 = new Course(
                    "DFJJK-FLAGSHIP-DS-AI",
                    "Data Science and AI",
                    "Comprehensive flagship program combining Data Science fundamentals, Artificial Intelligence, Machine Learning, Generative AI, and Prompt Engineering.",
                    "Our premier flagship masterclass designed for future AI leaders. Learn end-to-end Data Science, machine learning algorithms, deep learning neural networks, Generative AI models, and real-world Prompt Engineering for enterprise scale.",
                    new BigDecimal("1499.00"),
                    "16–20 Weeks Live Interactive Masterclass",
                    "AI & Machine Learning",
                    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80"
            );

            Course f2 = new Course(
                    "DFJJK-FLAGSHIP-DATA-ANALYTICS",
                    "Data Analytics",
                    "Flagship analytics program combining Power BI visualization, SQL analytical queries, data modeling, business intelligence, and executive dashboard storytelling.",
                    "An all-in-one flagship masterclass empowering learners to transform raw corporate datasets into strategic business decisions. Master SQL query optimization, Power Query, advanced DAX, semantic data modeling, and interactive Power BI report publishing.",
                    new BigDecimal("1499.00"),
                    "14–16 Weeks Live Interactive Masterclass",
                    "Data Science & Analytics",
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
            );

            Course f3 = new Course(
                    "DFJJK-FLAGSHIP-AGENTIC-AI",
                    "Agentic AI",
                    "Master Agentic AI, Autonomous AI Agents, Retrieval-Augmented Generation (RAG), Vector Databases, and LLM application development.",
                    "A cutting-edge flagship masterclass dedicated to the next frontier of AI: Agentic Systems. Learn to build autonomous agents, implement Retrieval-Augmented Generation (RAG) architectures, integrate vector databases, and orchestrate LLM workflows with LangChain, AutoGen, and CrewAI.",
                    new BigDecimal("899.00"),
                    "8–10 Weeks Hands-on Masterclass",
                    "AI & Machine Learning",
                    "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80"
            );

            Course cComp = new Course(
                    "DFJJK-COMP-TRAIN-101",
                    "Computer Training",
                    "Our comprehensive Computer Training Program is exclusively designed to help learners up-skill or gain the basic knowledge to work with computers.",
                    "Our comprehensive Computer Training Program is exclusively designed to help learners up-skill or gain the basic knowledge to work with computers. Master PC hardware, Windows OS navigating, Microsoft Office (Word, Excel, PowerPoint, Access), Office 365, Internet productivity, AI Copilot, and cloud basics.",
                    new BigDecimal("499.00"),
                    "6–8 Weeks Hands-on Training",
                    "Computer Skills",
                    "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=80"
            );

            Course c1 = new Course(
                    "DFJJK-FULLSTACK-101",
                    "Enterprise Full-Stack Architecture Masterclass",
                    "Master modern Java 21, Spring Boot 3, React 18, and cloud-native deployments for enterprise applications.",
                    "An intensive comprehensive program designed for developers aiming to master high-scale architecture, microservices, secure JWT authentication, reactive systems, and state-of-the-art React frontend frameworks.",
                    new BigDecimal("899.00"),
                    "14–16 Weeks",
                    "Software Development",
                    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
            );

            Course c2 = new Course(
                    "DFJJK-CLOUD-DEVOP",
                    "Cloud Computing and DevOps Specialisation",
                    "Deploy, auto-scale, and secure containerized infrastructure with AWS, Docker, Terraform, and Kubernetes.",
                    "Learn production-grade CI/CD pipelines, GitOps with ArgoCD, Infrastructure as Code using Terraform, and multi-region Kubernetes cluster monitoring with Prometheus and Grafana.",
                    new BigDecimal("899.00"),
                    "12–14 Weeks",
                    "Cloud & DevOps",
                    "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=80"
            );

            Course c3 = new Course(
                    "DFJJK-AI-DATA-301",
                    "Applied AI & Machine Learning Engineering",
                    "Build intelligent LLM applications, custom neural networks, vector search, and scalable data pipelines.",
                    "Dive deep into PyTorch, LangChain, vector databases (Pinecone/Chroma), fine-tuning open-weight LLMs, and deploying AI models into low-latency production APIs.",
                    new BigDecimal("899.00"),
                    "12 Weeks",
                    "AI & Machine Learning",
                    "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80"
            );

            Course c4 = new Course(
                    "DFJJK-CYBER-SEC-202",
                    "Offensive Security & Ethical Hacking",
                    "Practical penetration testing, OWASP web security, network scanning, Wireshark, and Metasploit.",
                    "Hands-on labs covering web app vulnerability assessment, privilege escalation, memory exploitation, threat hunting, and modern red team tradecraft.",
                    new BigDecimal("649.00"),
                    "10–12 Weeks",
                    "Cybersecurity",
                    "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
            );

            Course ds1 = new Course(
                    "DFJJK-DS-POWERBI",
                    "Power BI: Data Visualization Excellence",
                    "Master Power BI, Microsoft Fabric, advanced DAX, data modeling, and performance optimization to build executive-ready interactive dashboards.",
                    "An end-to-end professional program transforming raw datasets into high-impact strategic insights. Learn Power Query (M Language), complex DAX calculations, semantic data modeling, Power BI Service administration, and Microsoft Fabric integration while preparing for the Microsoft PL-300 certification.",
                    new BigDecimal("449.00"),
                    "10–12 Live Interactive Sessions",
                    "Data Science & Analytics",
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
            );

            Course ds2 = new Course(
                    "DFJJK-DS-SQL",
                    "SQL Unlocked: Path to Data Excellence",
                    "Master hands-on SQL query writing, complex joins, CTEs, subqueries, and window functions to solve real-world analytical problems.",
                    "A comprehensive, practice-intensive SQL masterclass designed for aspiring Data Analysts, Data Engineers, and BI Professionals. Go from fundamental data retrieval to advanced analytical queries, window functions, query optimization, and real-world enterprise database case studies.",
                    new BigDecimal("449.00"),
                    "10 Live Interactive Sessions",
                    "Data Science & Analytics",
                    "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80"
            );

            Course ds3 = new Course(
                    "DFJJK-DS-AI",
                    "Python → AI → Machine Learning → Deep Learning → NLP → Generative AI",
                    "A comprehensive end-to-end AI & Data Science program covering Python, Math, ML, Neural Networks, Transformers, LLMs, RAG, and Agentic AI Systems.",
                    "The ultimate zero-to-hero engineering masterclass designed for developers, data scientists, and AI architects. Master Python programming, AI mathematics, Supervised & Unsupervised ML, Deep Learning with PyTorch, NLP with Transformers, and production Generative AI with RAG, Vector DBs, and Agentic Frameworks.",
                    new BigDecimal("899.00"),
                    "16–20 Weeks",
                    "AI & Machine Learning",
                    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80"
            );

            Course c5 = new Course(
                    "DFJJK-AGILE-SM-101",
                    "Scrum Master Certification & Ceremonies Masterclass",
                    "Master Agile Scrum ceremonies, Daily Standups, Jira & Confluence workflows, and complete PSM / CSM exam preparation.",
                    "A practical, industry-focused course designed for current and aspiring Scrum Masters. Master the Agile Manifesto, facilitate high-impact Scrum ceremonies (Daily Standups, Sprint Planning, Reviews, Retrospectives), manage team workflows in Jira & Confluence, and prepare thoroughly for PSM I / CSM certification.",
                    new BigDecimal("549.00"),
                    "6–8 Weeks",
                    "Management & Agile",
                    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80"
            );

            Course c6 = new Course(
                    "DFJJK-AGILE-PO-201",
                    "Agile Product Owner Masterclass",
                    "Master product vision, customer discovery, backlog management, user stories, acceptance criteria, and product roadmapping.",
                    "An intensive masterclass for Product Owners, Product Managers, and Business Analysts. Learn to define compelling product visions, identify stakeholders, construct prioritized product backlogs based on value and risk, write clear user stories with acceptance criteria, and collaborate effectively with Scrum Developers and Scrum Masters.",
                    new BigDecimal("499.00"),
                    "6–8 Weeks",
                    "Management & Agile",
                    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
            );

            Course c7 = new Course(
                    "DFJJK-PM-PROFESSIONAL",
                    "Comprehensive Project Management Professional (PMP, Agile & Hybrid)",
                    "Master PM Fundamentals, Methodologies (Waterfall, Agile, Kanban, Hybrid), Initiation, Stakeholder RACI, Scope & WBS, and Scheduling.",
                    "An intensive 8-module enterprise project management program. Go from project initiation to full project lifecycle execution covering the Triple Constraint, project charters, power/interest grids, scope baselines, requirements traceability matrices (RTM), Work Breakdown Structure (WBS) decomposition, and activity dependency scheduling.",
                    new BigDecimal("899.00"),
                    "12–14 Weeks",
                    "Management & Agile",
                    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
            );

            Course c8 = new Course(
                    "DFJJK-CYBER-FULL-28",
                    "Cybersecurity Professional Training Program (28 Modules & Capstone)",
                    "Master end-to-end Cybersecurity: Fundamentals, Threat Landscape, Networking, OS Security, IAM, Cryptography, SOC, Forensics, Cloud, Zero Trust, GRC & Capstone.",
                    "A comprehensive, zero-to-hero 28-module cybersecurity professional program taking students from foundational security principles to practical SOC operations, threat hunting, digital forensics, cloud security, zero trust architecture, GRC compliance frameworks (NIST, ISO 27001, CIS), ethical hacking, leadership, and certification pathways (Security+, CySA+, CISSP). Includes a full 4-phase capstone project.",
                    new BigDecimal("899.00"),
                    "24–28 Weeks",
                    "Cybersecurity",
                    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
            );

            List<Course> allCourses = List.of(f1, f2, f3, cComp, c1, c2, c3, c4, ds1, ds2, ds3, c5, c6, c7, c8);
            for (Course c : allCourses) {
                if (courseRepository.findBySku(c.getSku()).isEmpty()) {
                    courseRepository.save(c);
                } else {
                    // Update existing course values if present
                    courseRepository.findBySku(c.getSku()).ifPresent(existing -> {
                        existing.setName(c.getName());
                        existing.setPrice(c.getPrice());
                        existing.setCategory(c.getCategory());
                        existing.setSummary(c.getSummary());
                        existing.setDescription(c.getDescription());
                        courseRepository.save(existing);
                    });
                }
            }
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
                demoOrder.setTotalAmount(new BigDecimal("899.00"));
                demoOrder.setPaymentMethod("Credit Card");
                demoOrder.setStatus("COMPLETED");
                demoOrder.setTransactionId("TXN-DFJJK88219");
                orderRepository.save(demoOrder);
            }
        }
    }
}
