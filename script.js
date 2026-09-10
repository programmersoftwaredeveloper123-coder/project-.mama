/* ==========================================================================
   MUST AI STUDY PLANNER - COMPLETE APPLICATION LOGIC
   Mbeya University of Science and Technology (MUST)
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. CONSTANTS & DEFAULT DATA
// --------------------------------------------------------------------------

// 20 Sample MUST Colleges/Faculties
const MUST_COLLEGES = [
    "College of Information and Communication Technology (CoICT)",
    "College of Engineering and Technology (CoET)",
    "College of Science and Technical Education (CoSTE)",
    "College of Humanities and Business Studies (CoHBS)",
    "College of Health Sciences and Technology (CoHST)",
    "College of Agricultural Sciences and Technology (CAST)",
    "Institute of Architecture and Building Technology (IABT)",
    "Institute of Mining and Mineral Processing (IMMP)",
    "School of Virtual and Distance Learning (SVDL)",
    "Directorate of Postgraduate Studies",
    "Department of Civil Engineering",
    "Department of Electrical Engineering",
    "Department of Mechanical Engineering",
    "Department of Computer Science",
    "Department of Applied Sciences",
    "Department of Business Management",
    "Department of Geoscience and Mining",
    "Department of Food Science and Technology",
    "Department of Health and Allied Sciences",
    "Other / My College is not listed"
];

// 10 Sample Programmes per College Category
const DEFAULT_COURSES = [
    "BSc in Computer Science",
    "BSc in Information Technology",
    "BSc in Software Engineering",
    "BSc in Cyber Security & Digital Forensics",
    "BSc in Computer Engineering",
    "BSc in Civil Engineering",
    "BSc in Electrical & Electronics Engineering",
    "BSc in Mechanical Engineering",
    "BSc in Mechatronics Engineering",
    "BSc in Mining Engineering",
    "Other / My Programme is not listed"
];

// 50 Seed Modules for Initial Load
const SEED_MODULES = [
    { id: "mod_1", code: "IT 8201", name: "Data Structures & Algorithms", difficulty: "Difficult", priority: "Critical", hours: 6, semester: "Semester 1", description: "Advanced trees, graphs, sorting algorithms, and complexity analysis." },
    { id: "mod_2", code: "IT 8202", name: "Database Management Systems", difficulty: "Medium", priority: "High", hours: 5, semester: "Semester 1", description: "Relational algebra, SQL, normalization, and transaction handling." },
    { id: "mod_3", code: "CS 8203", name: "Object-Oriented Programming with Java", difficulty: "Medium", priority: "High", hours: 5, semester: "Semester 1", description: "Inheritance, polymorphism, multi-threading, and GUI design." },
    { id: "mod_4", code: "CE 8204", name: "Computer Networks & Architecture", difficulty: "Difficult", priority: "High", hours: 6, semester: "Semester 1", description: "OSI model, TCP/IP, subnetting, routing protocols, and socket programming." },
    { id: "mod_5", code: "GS 8101", name: "Communication Skills for Engineers", difficulty: "Easy", priority: "Low", hours: 2, semester: "Semester 1", description: "Technical report writing, academic presentations, and professional etiquette." },
    { id: "mod_6", code: "MT 8101", name: "Engineering Mathematics I", difficulty: "Difficult", priority: "Critical", hours: 6, semester: "Semester 1", description: "Differential calculus, linear algebra, vector analysis, and matrices." },
    { id: "mod_7", code: "IT 8205", name: "Web Application Development", difficulty: "Medium", priority: "Medium", hours: 4, semester: "Semester 1", description: "HTML5, CSS3, Vanilla JS, responsiveness, and frontend architecture." },
    { id: "mod_8", code: "CS 8206", name: "Operating Systems Principles", difficulty: "Difficult", priority: "High", hours: 5, semester: "Semester 1", description: "Process synchronization, memory management, file systems, and deadlocks." },
    { id: "mod_9", code: "IT 8207", name: "Software Engineering & Architecture", difficulty: "Medium", priority: "Medium", hours: 4, semester: "Semester 1", description: "SDLC, UML modeling, agile methodology, and design patterns." },
    { id: "mod_10", code: "GS 8102", name: "Development Perspectives & Ethics", difficulty: "Easy", priority: "Low", hours: 2, semester: "Semester 1", description: "Socio-economic development concepts and professional ethics." },
    { id: "mod_11", code: "MT 8102", name: "Engineering Mathematics II", difficulty: "Difficult", priority: "Critical", hours: 6, semester: "Semester 2", description: "Integral calculus, ordinary differential equations, Fourier series." },
    { id: "mod_12", code: "IT 8208", name: "Information Systems Security", difficulty: "Difficult", priority: "High", hours: 5, semester: "Semester 2", description: "Cryptography, network defense, threat analysis, and risk management." },
    { id: "mod_13", code: "CS 8209", name: "Artificial Intelligence Principles", difficulty: "Difficult", priority: "Critical", hours: 6, semester: "Semester 2", description: "Search algorithms, machine learning basics, knowledge representation." },
    { id: "mod_14", code: "IT 8210", name: "Cloud Computing Technologies", difficulty: "Medium", priority: "Medium", hours: 4, semester: "Semester 2", description: "IaaS, PaaS, SaaS, virtualization, AWS/Azure fundamentals." },
    { id: "mod_15", code: "CE 8211", name: "Embedded Systems & Microcontrollers", difficulty: "Difficult", priority: "High", hours: 5, semester: "Semester 2", description: "C programming, ARM architecture, sensors, and IoT interfaces." },
    { id: "mod_16", code: "IT 8212", name: "Mobile Application Engineering", difficulty: "Medium", priority: "Medium", hours: 4, semester: "Semester 2", description: "Native and cross-platform mobile frontend app construction." },
    { id: "mod_17", code: "CS 8213", name: "Formal Languages & Automata", difficulty: "Difficult", priority: "Medium", hours: 4, semester: "Semester 2", description: "Finite state machines, context-free grammars, Turing machines." },
    { id: "mod_18", code: "GS 8103", name: "Entrepreneurship & Innovation", difficulty: "Easy", priority: "Low", hours: 2, semester: "Semester 2", description: "Business model canvas, pitching, feasibility analysis, start-ups." },
    { id: "mod_19", code: "IT 8214", name: "Human-Computer Interaction (HCI)", difficulty: "Easy", priority: "Medium", hours: 3, semester: "Semester 2", description: "Usability testing, wireframing, UX heuristics, accessibility." },
    { id: "mod_20", code: "CS 8215", name: "Compiler Design Concepts", difficulty: "Difficult", priority: "High", hours: 5, semester: "Semester 2", description: "Lexical analysis, parsing, intermediate code generation." },
    { id: "mod_21", code: "EE 8101", name: "Basic Electrical Circuit Theory", difficulty: "Medium", priority: "Medium", hours: 4, semester: "Semester 1", description: "Ohm's law, Kirchhoff's laws, AC/DC analysis, nodal equations." },
    { id: "mod_22", code: "EE 8102", name: "Digital Electronics & Logic Design", difficulty: "Medium", priority: "High", hours: 5, semester: "Semester 1", description: "Logic gates, Boolean algebra, Karnaugh maps, sequential circuits." },
    { id: "mod_23", code: "ME 8101", name: "Engineering Drawing & CAD", difficulty: "Medium", priority: "Medium", hours: 4, semester: "Semester 1", description: "Projection methods, AutoCAD design, 3D parametric modeling." },
    { id: "mod_24", code: "ME 8102", name: "Applied Thermodynamics", difficulty: "Difficult", priority: "High", hours: 5, semester: "Semester 1", description: "Laws of thermodynamics, heat engines, Rankine and Otto cycles." },
    { id: "mod_25", code: "CV 8101", name: "Engineering Mechanics & Statics", difficulty: "Difficult", priority: "High", hours: 5, semester: "Semester 1", description: "Force vectors, equilibrium of rigid bodies, centroids, moment of inertia." },
    { id: "mod_26", code: "CV 8102", name: "Fluid Mechanics Principles", difficulty: "Difficult", priority: "Medium", hours: 4, semester: "Semester 2", description: "Hydrostatics, Bernoulli's equation, pipe flows, fluid dynamics." },
    { id: "mod_27", code: "MN 8101", name: "Introduction to Mining Geology", difficulty: "Medium", priority: "Low", hours: 3, semester: "Semester 1", description: "Mineral identification, rock types, geological mapping." },
    { id: "mod_28", code: "MN 8102", name: "Rock Mechanics & Drilling", difficulty: "Difficult", priority: "High", hours: 5, semester: "Semester 2", description: "Stress-strain in rocks, slope stability, blasting techniques." },
    { id: "mod_29", code: "BS 8101", name: "Principles of Accounting", difficulty: "Easy", priority: "Low", hours: 2, semester: "Semester 1", description: "Double-entry bookkeeping, financial statements, ledger entries." },
    { id: "mod_30", code: "BS 8102", name: "Principles of Marketing", difficulty: "Easy", priority: "Low", hours: 2, semester: "Semester 2", description: "4 Ps of marketing, consumer behavior, market segmentation." },
    { id: "mod_31", code: "IT 8301", name: "Distributed Systems & Middleware", difficulty: "Difficult", priority: "High", hours: 5, semester: "Semester 1", description: "RPC, RMI, consensus algorithms, distributed databases." },
    { id: "mod_32", code: "CS 8302", name: "Machine Learning Foundations", difficulty: "Difficult", priority: "Critical", hours: 6, semester: "Semester 1", description: "Regression, classification, neural networks, SVMs, clustering." },
    { id: "mod_33", code: "IT 8303", name: "Big Data Analytics", difficulty: "Medium", priority: "High", hours: 4, semester: "Semester 1", description: "Hadoop, Spark ecosystem, MapReduce, data pipelines." },
    { id: "mod_34", code: "CE 8304", name: "Network Security & Cryptography", difficulty: "Difficult", priority: "Critical", hours: 6, semester: "Semester 1", description: "RSA, AES, digital signatures, PKI, firewall configurations." },
    { id: "mod_35", code: "IT 8305", name: "UI/UX Architecture & Prototyping", difficulty: "Easy", priority: "Medium", hours: 3, semester: "Semester 1", description: "Figma design system, interaction design, frontend scaffolding." },
    { id: "mod_36", code: "CS 8306", name: "Computer Graphics & Visualization", difficulty: "Medium", priority: "Medium", hours: 4, semester: "Semester 2", description: "OpenGL pipeline, 3D transformation matrices, ray tracing." },
    { id: "mod_37", code: "IT 8307", name: "DevOps & Continuous Integration", difficulty: "Medium", priority: "High", hours: 4, semester: "Semester 2", description: "Docker, Kubernetes, Jenkins pipelines, automated testing." },
    { id: "mod_38", code: "CE 8308", name: "Real-Time Operating Systems", difficulty: "Difficult", priority: "High", hours: 5, semester: "Semester 2", description: "FreeRTOS, priority inversion, task scheduling algorithms." },
    { id: "mod_39", code: "GS 8201", name: "Research Methodology", difficulty: "Medium", priority: "High", hours: 4, semester: "Semester 1", description: "Literature review, hypothesis formulation, quantitative analysis." },
    { id: "mod_40", code: "IT 8400", name: "Final Year Capstone Project I", difficulty: "Difficult", priority: "Critical", hours: 8, semester: "Semester 1", description: "System specification, feasibility study, software prototyping." },
    { id: "mod_41", code: "IT 8401", name: "Final Year Capstone Project II", difficulty: "Difficult", priority: "Critical", hours: 10, semester: "Semester 2", description: "System implementation, testing, defense, and deployment." },
    { id: "mod_42", code: "CS 8309", name: "Natural Language Processing", difficulty: "Difficult", priority: "High", hours: 5, semester: "Semester 2", description: "Tokenization, sentiment analysis, transformers, LLM prompt engineering." },
    { id: "mod_43", code: "IT 8310", name: "IT Service & Governance", difficulty: "Easy", priority: "Low", hours: 2, semester: "Semester 2", description: "ITIL framework, service delivery, compliance, IT auditing." },
    { id: "mod_44", code: "EE 8203", name: "Power Electronics & Drives", difficulty: "Difficult", priority: "High", hours: 5, semester: "Semester 2", description: "Thyristors, inverters, DC-DC converters, motor control." },
    { id: "mod_45", code: "ME 8204", name: "Mechanics of Materials", difficulty: "Difficult", priority: "High", hours: 5, semester: "Semester 1", description: "Torsion, bending stress, Mohr's circle, deflection of beams." },
    { id: "mod_46", code: "CV 8205", name: "Structural Analysis", difficulty: "Difficult", priority: "Critical", hours: 6, semester: "Semester 2", description: "Trusses, indeterminate structures, moment distribution method." },
    { id: "mod_47", code: "MN 8206", name: "Mine Ventilation Systems", difficulty: "Medium", priority: "Medium", hours: 4, semester: "Semester 1", description: "Airflow dynamics, gas hazards, fan selection in underground mines." },
    { id: "mod_48", code: "BS 8203", name: "Operations Research", difficulty: "Medium", priority: "High", hours: 4, semester: "Semester 2", description: "Linear programming, simplex method, queuing theory, PERT/CPM." },
    { id: "mod_49", code: "GS 8104", name: "Environmental Impact Assessment", difficulty: "Easy", priority: "Low", hours: 2, semester: "Semester 2", description: "EIA frameworks, environmental policy, sustainability metrics." },
    { id: "mod_50", code: "IT 8311", name: "Wireless & Sensor Networks", difficulty: "Medium", priority: "Medium", hours: 4, semester: "Semester 2", description: "Zigbee, LoRaWAN, ad-hoc networks, energy efficiency protocols." }
];

// Seed Guidance Notes / Recommendations
const SEED_RECOMMENDATIONS = [
    { id: "rec_1", title: "Data Structures Study Strategy", course: "IT 8201", author: "Dr. A. Mvungi", role: "Lecturer / Instructor", content: "Allocate at least 2 hours daily for continuous practical coding of linked lists and binary trees before mid-semester tests." },
    { id: "rec_2", title: "Mathematics II Revision Plan", course: "MT 8102", author: "Eng. J. Kazi", role: "Peer Tutor / Mentor", content: "Solve at least 5 past paper differential equations weekly. Group study sessions are held every Thursday 4-6 PM." },
    { id: "rec_3", title: "Academic Balance & Workload", course: "All Programmes", author: "Prof. E. Malisa", role: "Academic Advisor", content: "Ensure difficult modules are placed in morning slots in your AI planner to leverage peak cognitive clarity." }
];

// Role Permissions System Matrix
const ROLE_PERMISSIONS = {
    student: {
        canManageOwnProfile: true,
        canManageOwnModules: true,
        canGenerateTimetable: true,
        canDeleteTimetableSessions: true,
        canUseAI: true,
        canViewRecommendations: true,
        canCreateRecommendations: false,
        canManageGlobalCourseware: false
    },
    classRepresentative: {
        canManageOwnProfile: true,
        canManageOwnModules: true,
        canGenerateTimetable: true,
        canDeleteTimetableSessions: true,
        canUseAI: true,
        canViewRecommendations: true,
        canCreateRecommendations: true,
        canManageGlobalCourseware: true
    },
    peerTutor: {
        canManageOwnProfile: true,
        canManageOwnModules: true,
        canGenerateTimetable: true,
        canDeleteTimetableSessions: true,
        canUseAI: true,
        canViewRecommendations: true,
        canCreateRecommendations: true,
        canManageGlobalCourseware: true
    },
    academicAdvisor: {
        canManageOwnProfile: true,
        canManageOwnModules: true,
        canGenerateTimetable: true,
        canDeleteTimetableSessions: true,
        canUseAI: true,
        canViewRecommendations: true,
        canCreateRecommendations: true,
        canManageGlobalCourseware: true
    },
    lecturer: {
        canManageOwnProfile: true,
        canManageOwnModules: true,
        canGenerateTimetable: true,
        canDeleteTimetableSessions: true,
        canUseAI: true,
        canViewRecommendations: true,
        canCreateRecommendations: true,
        canManageGlobalCourseware: true
    }
};

// --------------------------------------------------------------------------
// 2. STATE MANAGEMENT & STORAGE SYSTEM
// --------------------------------------------------------------------------

class AppState {
    constructor() {
        this.currentUser = null;
        this.users = JSON.parse(localStorage.getItem('must_ai_users')) || [];
        this.modules = [];
        this.timetable = [];
        this.recommendations = [];
        this.notifications = [];
        this.settings = {
            theme: 'light',
            font: 'inter',
            accent: 'navy'
        };
        this.mediaStream = null;
    }

    saveUsers() {
        localStorage.setItem('must_ai_users', JSON.stringify(this.users));
    }

    loadUserData() {
        if (!this.currentUser) return;
        const uid = this.currentUser.id;

        // Isolated Storage Keys by User ID
        this.modules = JSON.parse(localStorage.getItem(`must_ai_modules_${uid}`)) || SEED_MODULES;
        this.timetable = JSON.parse(localStorage.getItem(`must_ai_timetable_${uid}`)) || [];
        this.recommendations = JSON.parse(localStorage.getItem(`must_ai_recs_${uid}`)) || SEED_RECOMMENDATIONS;
        this.notifications = JSON.parse(localStorage.getItem(`must_ai_notifs_${uid}`)) || [];
        this.settings = JSON.parse(localStorage.getItem(`must_ai_settings_${uid}`)) || { theme: 'light', font: 'inter', accent: 'navy' };

        // Save defaults if first time
        this.saveUserData();
    }

    saveUserData() {
        if (!this.currentUser) return;
        const uid = this.currentUser.id;

        localStorage.setItem(`must_ai_modules_${uid}`, JSON.stringify(this.modules));
        localStorage.setItem(`must_ai_timetable_${uid}`, JSON.stringify(this.timetable));
        localStorage.setItem(`must_ai_recs_${uid}`, JSON.stringify(this.recommendations));
        localStorage.setItem(`must_ai_notifs_${uid}`, JSON.stringify(this.notifications));
        localStorage.setItem(`must_ai_settings_${uid}`, JSON.stringify(this.settings));
    }

    addNotification(text, type = "info") {
        const newNotif = {
            id: 'notif_' + Date.now(),
            text,
            type,
            date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            read: false
        };
        this.notifications.unshift(newNotif);
        this.saveUserData();
        renderNotifications();
    }
}

const state = new AppState();

// --------------------------------------------------------------------------
// 3. INITIALIZATION & APPLICATION LIFECYCLE
// --------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    populateCollegeDropdowns();
    populateCourseDropdowns();
    setupEventListeners();
    checkSession();
});

function populateCollegeDropdowns() {
    const regCollege = document.getElementById('regCollege');
    if (!regCollege) return;
    regCollege.innerHTML = '';
    MUST_COLLEGES.forEach(col => {
        const opt = document.createElement('option');
        opt.value = col;
        opt.textContent = col;
        regCollege.appendChild(opt);
    });
}

function populateCourseDropdowns() {
    const regCourse = document.getElementById('regCourse');
    if (!regCourse) return;
    regCourse.innerHTML = '';
    DEFAULT_COURSES.forEach(crs => {
        const opt = document.createElement('option');
        opt.value = crs;
        opt.textContent = crs;
        regCourse.appendChild(opt);
    });
}

function checkSession() {
    const savedSession = localStorage.getItem('must_ai_session');
    if (savedSession) {
        const user = JSON.parse(savedSession);
        state.currentUser = user;
        state.loadUserData();
        showAppLayout();
    } else {
        showAuthLayout();
    }
}

function showAuthLayout() {
    document.getElementById('authContainer').classList.remove('hidden');
    document.getElementById('appContainer').classList.add('hidden');
}

function showAppLayout() {
    document.getElementById('authContainer').classList.add('hidden');
    document.getElementById('appContainer').classList.remove('hidden');

    applySystemSettings();
    applyRolePermissions();
    updateProfileUI();
    renderDashboard();
    renderModulesTable();
    renderTimetable();
    renderRecommendations();
    renderNotifications();
    populateMetaModuleSelect();
}

// --------------------------------------------------------------------------
// 4. AUTHENTICATION & SECURITY SYSTEM
// --------------------------------------------------------------------------

function setupEventListeners() {
    // Auth Form Navigation
    document.getElementById('showRegisterLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('loginForm').classList.remove('active');
        document.getElementById('registerForm').classList.add('active');
    });

    document.getElementById('showLoginLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('registerForm').classList.remove('active');
        document.getElementById('loginForm').classList.add('active');
    });

    document.getElementById('forgotPasswordLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('loginForm').classList.remove('active');
        document.getElementById('forgotForm').classList.add('active');
    });

    document.getElementById('backToLoginLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('forgotForm').classList.remove('active');
        document.getElementById('loginForm').classList.add('active');
    });

    // Password Toggle Listeners
    document.querySelectorAll('.toggle-password').forEach(icon => {
        icon.addEventListener('click', () => {
            const targetId = icon.getAttribute('data-target');
            const input = document.getElementById(targetId);
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.replace('fa-eye', 'fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.replace('fa-slash', 'fa-eye');
                icon.classList.replace('fa-eye-slash', 'fa-eye');
            }
        });
    });

    // Password Strength Meter Listener
    document.getElementById('regPassword')?.addEventListener('input', (e) => {
        const pass = e.target.value;
        const meter = document.getElementById('passMeter');
        const label = document.getElementById('passLabel');
        let score = 0;

        if (pass.length > 5) score += 25;
        if (pass.match(/[A-Z]/)) score += 25;
        if (pass.match(/[0-9]/)) score += 25;
        if (pass.match(/[^A-Za-z0-9]/)) score += 25;

        meter.style.width = score + '%';
        if (score <= 25) {
            meter.style.backgroundColor = 'var(--danger)';
            label.textContent = 'Weak';
        } else if (score <= 75) {
            meter.style.backgroundColor = 'var(--warning)';
            label.textContent = 'Medium';
        } else {
            meter.style.backgroundColor = 'var(--success)';
            label.textContent = 'Strong';
        }
    });

    // Dynamic College / Course Input Toggles
    document.getElementById('regCollege')?.addEventListener('change', (e) => {
        const group = document.getElementById('customCollegeGroup');
        if (e.target.value.includes('Other')) group.classList.remove('hidden');
        else group.classList.add('hidden');
    });

    document.getElementById('regCourse')?.addEventListener('change', (e) => {
        const group = document.getElementById('customCourseGroup');
        if (e.target.value.includes('Other')) group.classList.remove('hidden');
        else group.classList.add('hidden');
    });

    // Registration Submit
    document.getElementById('registerForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullName = document.getElementById('regFullName').value.trim();
        const regNo = document.getElementById('regRegNo').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const role = document.getElementById('regRole').value;
        let college = document.getElementById('regCollege').value;
        let course = document.getElementById('regCourse').value;
        const semester = document.getElementById('regSemester').value;
        const password = document.getElementById('regPassword').value;
        const confirmPass = document.getElementById('regConfirmPassword').value;

        if (password !== confirmPass) {
            alert('Passwords do not match!');
            return;
        }

        if (college.includes('Other')) {
            college = document.getElementById('regCustomCollege').value.trim() || "Custom College";
        }
        if (course.includes('Other')) {
            course = document.getElementById('regCustomCourse').value.trim() || "Custom Course";
        }

        const newUser = {
            id: 'usr_' + Date.now(),
            fullName,
            regNo,
            email,
            role,
            college,
            course,
            semester,
            password,
            avatar: 'https://via.placeholder.com/150'
        };

        state.users.push(newUser);
        state.saveUsers();

        state.currentUser = newUser;
        localStorage.setItem('must_ai_session', JSON.stringify(newUser));
        state.loadUserData();
        state.addNotification("Welcome to MUST AI Study Planner! Account registered successfully.", "success");
        showAppLayout();
    });

    // Login Submit
    document.getElementById('loginForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const pass = document.getElementById('loginPassword').value;

        const foundUser = state.users.find(u => u.email === email && u.password === pass);

        if (foundUser) {
            state.currentUser = foundUser;
            localStorage.setItem('must_ai_session', JSON.stringify(foundUser));
            state.loadUserData();
            state.addNotification("Signed in successfully.", "info");
            showAppLayout();
        } else {
            // Default Fallback Demo User Creation if empty
            const demoUser = {
                id: 'usr_demo',
                fullName: 'Academic User',
                regNo: '21100533210001',
                email: email,
                role: 'student',
                college: 'College of Information and Communication Technology (CoICT)',
                course: 'BSc in Computer Science',
                semester: 'Semester 1',
                password: pass,
                avatar: 'https://via.placeholder.com/150'
            };
            state.users.push(demoUser);
            state.saveUsers();
            state.currentUser = demoUser;
            localStorage.setItem('must_ai_session', JSON.stringify(demoUser));
            state.loadUserData();
            showAppLayout();
        }
    });

    // Forgot Password Simulation Submit
    document.getElementById('forgotForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Simulated password reset email sent! Check your inbox for reset instructions.');
        document.getElementById('forgotForm').classList.remove('active');
        document.getElementById('loginForm').classList.add('active');
    });

    // Logout
    document.getElementById('logoutBtn')?.addEventListener('click', () => {
        localStorage.removeItem('must_ai_session');
        state.currentUser = null;
        showAuthLayout();
    });

    // Sidebar View Navigation
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = item.getAttribute('data-target');
            
            document.querySelectorAll('.sidebar-nav .nav-item').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));

            item.classList.add('active');
            document.getElementById(target)?.classList.add('active');

            // Close Mobile Sidebar if Open
            document.getElementById('appSidebar')?.classList.remove('active');
        });
    });

    // Mobile Sidebar Toggles
    document.getElementById('toggleSidebarMobile')?.addEventListener('click', () => {
        document.getElementById('appSidebar')?.classList.add('active');
    });

    document.getElementById('closeSidebarMobile')?.addEventListener('click', () => {
        document.getElementById('appSidebar')?.classList.remove('active');
    });

    // Modal Close Triggering
    document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-close');
            document.getElementById(modalId)?.classList.add('hidden');
        });
    });

    // Setup CRUD, Timetable, Profile, AI & Settings Handlers
    setupModuleHandlers();
    setupTimetableHandlers();
    setupProfileAndCameraHandlers();
    setupAIHubHandlers();
    setupSettingsAndExports();
    setupNotificationsAndSearch();
}

// --------------------------------------------------------------------------
// 5. ROLE-BASED ACCESS CONTROL (RBAC) & PERMISSIONS
// --------------------------------------------------------------------------

function applyRolePermissions() {
    if (!state.currentUser) return;
    const role = state.currentUser.role;
    const perms = ROLE_PERMISSIONS[role] || ROLE_PERMISSIONS.student;

    const addRecBtn = document.getElementById('openAddRecModal');
    if (addRecBtn) {
        if (perms.canCreateRecommendations) addRecBtn.classList.remove('hidden');
        else addRecBtn.classList.add('hidden');
    }
}

// --------------------------------------------------------------------------
// 6. PROFILE & CAMERA IMAGE CAPTURE SYSTEM
// --------------------------------------------------------------------------

function updateProfileUI() {
    if (!state.currentUser) return;
    const u = state.currentUser;

    // Update Sidebar
    document.getElementById('sidebarUserName').textContent = u.fullName;
    document.getElementById('sidebarUserRole').textContent = capitalize(u.role);
    document.getElementById('sidebarRegNo').textContent = u.regNo;
    document.getElementById('sidebarAvatar').src = u.avatar;

    // Update Topbar
    document.getElementById('topUserName').textContent = u.fullName.split(' ')[0];
    document.getElementById('topAvatar').src = u.avatar;

    // Update Dashboard Welcome Banner
    document.getElementById('dashWelcomeName').textContent = u.fullName;
    document.getElementById('dashSubBanner').textContent = `Course: ${u.course} | ${u.semester} | Role: ${capitalize(u.role)}`;

    // Update Profile View Form & Info
    document.getElementById('profileDisplayAvatar').src = u.avatar;
    document.getElementById('profileDisplayName').textContent = u.fullName;
    document.getElementById('profileDisplayRole').textContent = capitalize(u.role);
    document.getElementById('profileDisplayRegNo').textContent = u.regNo;

    document.getElementById('profFullName').value = u.fullName;
    document.getElementById('profRegNo').value = u.regNo;
    document.getElementById('profEmail').value = u.email;
    document.getElementById('profRole').value = capitalize(u.role);
    document.getElementById('profCollege').value = u.college;
    document.getElementById('profCourse').value = u.course;
    document.getElementById('profSemester').value = u.semester;
}

function setupProfileAndCameraHandlers() {
    // Profile Update Submit
    document.getElementById('profileUpdateForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        state.currentUser.fullName = document.getElementById('profFullName').value.trim();
        state.currentUser.regNo = document.getElementById('profRegNo').value.trim();
        state.currentUser.college = document.getElementById('profCollege').value.trim();
        state.currentUser.course = document.getElementById('profCourse').value.trim();
        state.currentUser.semester = document.getElementById('profSemester').value;

        // Update in Users collection & session
        const idx = state.users.findIndex(u => u.id === state.currentUser.id);
        if (idx !== -1) state.users[idx] = state.currentUser;
        state.saveUsers();
        localStorage.setItem('must_ai_session', JSON.stringify(state.currentUser));

        updateProfileUI();
        state.addNotification("Profile information updated successfully.", "success");
        alert('Profile saved!');
    });

    // Profile Photo File Upload
    document.getElementById('avatarFileInput')?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(evt) {
                state.currentUser.avatar = evt.target.result;
                updateProfileUI();
                state.saveUsers();
                localStorage.setItem('must_ai_session', JSON.stringify(state.currentUser));
                state.addNotification("Profile image uploaded successfully.", "info");
            };
            reader.readAsDataURL(file);
        }
    });

    // WebCam Stream Modal Handlers
    const cameraModal = document.getElementById('cameraModal');
    const video = document.getElementById('cameraVideo');
    const canvas = document.getElementById('cameraCanvas');

    document.getElementById('openCameraModalBtn')?.addEventListener('click', async () => {
        cameraModal.classList.remove('hidden');
        try {
            state.mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            video.srcObject = state.mediaStream;
        } catch (err) {
            alert('Unable to access camera: ' + err.message);
            cameraModal.classList.add('hidden');
        }
    });

    document.getElementById('closeCameraModalBtn')?.addEventListener('click', () => {
        if (state.mediaStream) {
            state.mediaStream.getTracks().forEach(track => track.stop());
        }
        cameraModal.classList.add('hidden');
    });

    document.getElementById('takeSnapshotBtn')?.addEventListener('click', () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0);
        
        video.classList.add('hidden');
        canvas.classList.remove('hidden');

        document.getElementById('takeSnapshotBtn').classList.add('hidden');
        document.getElementById('retakeSnapshotBtn').classList.remove('hidden');
        document.getElementById('saveSnapshotBtn').classList.remove('hidden');
    });

    document.getElementById('retakeSnapshotBtn')?.addEventListener('click', () => {
        canvas.classList.add('hidden');
        video.classList.remove('hidden');

        document.getElementById('takeSnapshotBtn').classList.remove('hidden');
        document.getElementById('retakeSnapshotBtn').classList.add('hidden');
        document.getElementById('saveSnapshotBtn').classList.add('hidden');
    });

    document.getElementById('saveSnapshotBtn')?.addEventListener('click', () => {
        const dataUrl = canvas.toDataURL('image/png');
        state.currentUser.avatar = dataUrl;
        updateProfileUI();
        state.saveUsers();
        localStorage.setItem('must_ai_session', JSON.stringify(state.currentUser));

        if (state.mediaStream) {
            state.mediaStream.getTracks().forEach(track => track.stop());
        }
        cameraModal.classList.add('hidden');
        state.addNotification("Camera photo saved as profile picture.", "success");
    });
}

// --------------------------------------------------------------------------
// 7. DASHBOARD & STATS ENGINE
// --------------------------------------------------------------------------

function renderDashboard() {
    const modules = state.modules;
    const total = modules.length;
    const diff = modules.filter(m => m.difficulty === 'Difficult').length;
    const med = modules.filter(m => m.difficulty === 'Medium').length;
    const easy = modules.filter(m => m.difficulty === 'Easy').length;

    const totalHours = modules.reduce((sum, m) => sum + parseInt(m.hours || 0), 0);
    const totalSessions = state.timetable.length;

    document.getElementById('statTotalModules').textContent = total;
    document.getElementById('statDifficultModules').textContent = diff;
    document.getElementById('statMediumModules').textContent = med;
    document.getElementById('statEasyModules').textContent = easy;
    document.getElementById('statStudyHours').textContent = totalHours + ' hrs';
    document.getElementById('statSessionsCount').textContent = totalSessions;

    // Render Progress Bars
    const container = document.getElementById('moduleDifficultyOverview');
    container.innerHTML = `
        <div class="diff-bar-item">
            <div class="diff-bar-info"><span>Difficult Modules (${diff})</span><span>${total ? Math.round((diff/total)*100) : 0}%</span></div>
            <div class="progress-track"><div class="progress-fill bg-danger" style="width: ${total ? (diff/total)*100 : 0}%"></div></div>
        </div>
        <div class="diff-bar-item">
            <div class="diff-bar-info"><span>Medium Modules (${med})</span><span>${total ? Math.round((med/total)*100) : 0}%</span></div>
            <div class="progress-track"><div class="progress-fill bg-warning" style="width: ${total ? (med/total)*100 : 0}%"></div></div>
        </div>
        <div class="diff-bar-item">
            <div class="diff-bar-info"><span>Easy Modules (${easy})</span><span>${total ? Math.round((easy/total)*100) : 0}%</span></div>
            <div class="progress-track"><div class="progress-fill bg-success" style="width: ${total ? (easy/total)*100 : 0}%"></div></div>
        </div>
    `;

    // Render Today's Sessions List
    const todayContainer = document.getElementById('dashTodaySessions');
    if (state.timetable.length === 0) {
        todayContainer.innerHTML = '<p class="text-muted">No timetable generated yet. Click "Create Timetable" to generate.</p>';
    } else {
        const todaySessions = state.timetable.slice(0, 5); // Pick top 5 active
        todayContainer.innerHTML = todaySessions.map(s => `
            <div class="session-block margin-bottom">
                <span class="time">${s.day} (${s.startTime} - ${s.endTime})</span>
                <span class="mod-code">${s.moduleCode} - ${s.moduleName}</span>
                <span class="type">${s.type}</span>
            </div>
        `).join('');
    }
}

// --------------------------------------------------------------------------
// 8. MODULE MANAGEMENT & CRUD ENGINE
// --------------------------------------------------------------------------

function renderModulesTable() {
    const tbody = document.getElementById('modulesTableBody');
    if (!tbody) return;

    const searchTerm = document.getElementById('moduleSearchInput')?.value.toLowerCase() || '';
    const diffFilter = document.getElementById('moduleDifficultyFilter')?.value || 'ALL';
    const prioFilter = document.getElementById('modulePriorityFilter')?.value || 'ALL';

    let filtered = state.modules.filter(m => {
        const matchesSearch = m.code.toLowerCase().includes(searchTerm) || m.name.toLowerCase().includes(searchTerm);
        const matchesDiff = diffFilter === 'ALL' || m.difficulty === diffFilter;
        const matchesPrio = prioFilter === 'ALL' || m.priority === prioFilter;
        return matchesSearch && matchesDiff && matchesPrio;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted">No modules found matching search criteria.</td></tr>`;
        return;
    }

    tbody.innerHTML = filtered.map(m => `
        <tr>
            <td><strong>${m.code}</strong></td>
            <td>${m.name}</td>
            <td><span class="badge badge-${m.difficulty.toLowerCase()}">${m.difficulty}</span></td>
            <td><span class="badge badge-${m.priority.toLowerCase()}">${m.priority}</span></td>
            <td>${m.hours} hrs/wk</td>
            <td>${m.semester}</td>
            <td>
                <button class="btn btn-xs btn-outline" onclick="editModule('${m.id}')"><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-xs btn-danger" onclick="deleteModule('${m.id}')"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join('');

    renderGenModuleSelectionGrid();
}

function renderGenModuleSelectionGrid() {
    const grid = document.getElementById('genModuleSelectionList');
    if (!grid) return;
    grid.innerHTML = state.modules.map(m => `
        <label>
            <input type="checkbox" name="genModules" value="${m.id}" checked>
            <strong>${m.code}</strong> (${m.difficulty})
        </label>
    `).join('');
}

function setupModuleHandlers() {
    document.getElementById('openAddModuleModal')?.addEventListener('click', () => {
        document.getElementById('modId').value = '';
        document.getElementById('moduleForm').reset();
        document.getElementById('moduleModalTitle').textContent = 'Add Course Module';
        document.getElementById('moduleModal').classList.remove('hidden');
    });

    document.getElementById('moduleForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = document.getElementById('modId').value;
        const code = document.getElementById('modCode').value.trim();
        const name = document.getElementById('modName').value.trim();
        const difficulty = document.getElementById('modDifficulty').value;
        const priority = document.getElementById('modPriority').value;
        const hours = parseInt(document.getElementById('modHours').value);
        const semester = document.getElementById('modSemester').value;
        const description = document.getElementById('modDescription').value.trim();

        if (id) {
            // Update
            const idx = state.modules.findIndex(m => m.id === id);
            if (idx !== -1) {
                state.modules[idx] = { id, code, name, difficulty, priority, hours, semester, description };
                state.addNotification(`Module ${code} updated.`, "info");
            }
        } else {
            // Create
            const newMod = { id: 'mod_' + Date.now(), code, name, difficulty, priority, hours, semester, description };
            state.modules.push(newMod);
            state.addNotification(`Module ${code} created.`, "success");
        }

        state.saveUserData();
        renderModulesTable();
        renderDashboard();
        populateMetaModuleSelect();
        document.getElementById('moduleModal').classList.add('hidden');
    });

    document.getElementById('moduleSearchInput')?.addEventListener('input', renderModulesTable);
    document.getElementById('moduleDifficultyFilter')?.addEventListener('change', renderModulesTable);
    document.getElementById('modulePriorityFilter')?.addEventListener('change', renderModulesTable);
}

window.editModule = function(id) {
    const m = state.modules.find(item => item.id === id);
    if (!m) return;

    document.getElementById('modId').value = m.id;
    document.getElementById('modCode').value = m.code;
    document.getElementById('modName').value = m.name;
    document.getElementById('modDifficulty').value = m.difficulty;
    document.getElementById('modPriority').value = m.priority;
    document.getElementById('modHours').value = m.hours;
    document.getElementById('modSemester').value = m.semester;
    document.getElementById('modDescription').value = m.description || '';

    document.getElementById('moduleModalTitle').textContent = 'Edit Course Module';
    document.getElementById('moduleModal').classList.remove('hidden');
};

window.deleteModule = function(id) {
    if (confirm('Are you sure you want to delete this module?')) {
        state.modules = state.modules.filter(m => m.id !== id);
        state.saveUserData();
        renderModulesTable();
        renderDashboard();
        populateMetaModuleSelect();
        state.addNotification("Module removed.", "danger");
    }
};

// --------------------------------------------------------------------------
// 9. TIMETABLE SCHEDULING ALGORITHM & CRUD
// --------------------------------------------------------------------------

function setupTimetableHandlers() {
    document.getElementById('dashQuickGenBtn')?.addEventListener('click', () => {
        document.querySelector('.nav-item[data-target="timetableGenView"]')?.click();
    });

    document.getElementById('timetableConfigForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        generateTimetableAlgorithm();
    });

    document.getElementById('addManualSessionBtn')?.addEventListener('click', () => {
        populateSessionModuleSelect();
        document.getElementById('sessionModal').classList.remove('hidden');
    });

    document.getElementById('sessionForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const modCode = document.getElementById('sessModuleCode').value;
        const mod = state.modules.find(m => m.code === modCode);
        const day = document.getElementById('sessDay').value;
        const type = document.getElementById('sessType').value;
        const startTime = document.getElementById('sessStartTime').value;
        const endTime = document.getElementById('sessEndTime').value;

        const newSession = {
            id: 'sess_' + Date.now(),
            day,
            startTime,
            endTime,
            moduleCode: modCode,
            moduleName: mod ? mod.name : modCode,
            difficulty: mod ? mod.difficulty : 'Medium',
            priority: mod ? mod.priority : 'Medium',
            type
        };

        state.timetable.push(newSession);
        state.saveUserData();
        renderTimetable();
        renderDashboard();
        document.getElementById('sessionModal').classList.add('hidden');
        state.addNotification(`Manual session added for ${modCode}.`, "success");
    });

    // View Switching Logic
    document.querySelectorAll('.view-switch-bar .btn-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.view-switch-bar .btn-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const viewMode = tab.getAttribute('data-view');
            const weekly = document.getElementById('timetableWeeklyContainer');
            const daily = document.getElementById('timetableDailyContainer');
            const calendar = document.getElementById('timetableCalendarContainer');
            const dailySelector = document.getElementById('dailyViewSelector');

            weekly.classList.add('hidden');
            daily.classList.add('hidden');
            calendar.classList.add('hidden');
            dailySelector.classList.add('hidden');

            if (viewMode === 'weekly') {
                weekly.classList.remove('hidden');
            } else if (viewMode === 'daily') {
                daily.classList.remove('hidden');
                dailySelector.classList.remove('hidden');
            } else if (viewMode === 'calendar') {
                calendar.classList.remove('hidden');
            }
        });
    });

    document.getElementById('ttDaySelect')?.addEventListener('change', renderTimetable);
}

function generateTimetableAlgorithm() {
    const selectedDays = Array.from(document.querySelectorAll('input[name="studyDays"]:checked')).map(cb => cb.value);
    const startTimeStr = document.getElementById('ttStartTime').value;
    const endTimeStr = document.getElementById('ttEndTime').value;
    const sessionDuration = parseInt(document.getElementById('ttSessionDuration').value);
    const breakDuration = parseInt(document.getElementById('ttBreakDuration').value);

    const checkedModIds = Array.from(document.querySelectorAll('input[name="genModules"]:checked')).map(cb => cb.value);
    const selectedModules = state.modules.filter(m => checkedModIds.includes(m.id));

    if (selectedDays.length === 0 || selectedModules.length === 0) {
        alert('Please select at least one day and one module.');
        return;
    }

    // Weight and Sort Modules by Difficulty and Priority
    const weightedModules = [...selectedModules].sort((a, b) => {
        const weightMap = { 'Critical': 4, 'High': 3, 'Medium': 2, 'Low': 1 };
        const diffMap = { 'Difficult': 3, 'Medium': 2, 'Easy': 1 };
        const scoreA = weightMap[a.priority] * 2 + diffMap[a.difficulty];
        const scoreB = weightMap[b.priority] * 2 + diffMap[b.difficulty];
        return scoreB - scoreA;
    });

    const newTimetable = [];
    let modIndex = 0;

    selectedDays.forEach(day => {
        let currentMinutes = timeToMinutes(startTimeStr);
        const endMinutes = timeToMinutes(endTimeStr);

        while (currentMinutes + sessionDuration <= endMinutes) {
            const module = weightedModules[modIndex % weightedModules.length];
            const startT = minutesToTime(currentMinutes);
            const endT = minutesToTime(currentMinutes + sessionDuration);

            newTimetable.push({
                id: 'sess_' + Math.random().toString(36).substr(2, 9),
                day,
                startTime: startT,
                endTime: endT,
                moduleCode: module.code,
                moduleName: module.name,
                difficulty: module.difficulty,
                priority: module.priority,
                type: module.difficulty === 'Difficult' ? 'Lecture Revision' : 'Self Study'
            });

            currentMinutes += sessionDuration + breakDuration;
            modIndex++;
        }
    });

    state.timetable = newTimetable;
    state.saveUserData();
    renderTimetable();
    renderDashboard();
    state.addNotification("Automated timetable successfully generated!", "success");

    // Navigate to Timetable View
    document.querySelector('.nav-item[data-target="timetableView"]')?.click();
}

function renderTimetable() {
    renderWeeklyMatrix();
    renderDailyList();
    renderCalendarGrid();
}

function renderWeeklyMatrix() {
    const container = document.getElementById('timetableWeeklyContainer');
    if (!container) return;

    if (!state.timetable || state.timetable.length === 0) {
        container.innerHTML = '<p class="text-center text-muted padding">No timetable sessions generated. Use the Generator tab.</p>';
        return;
    }

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let html = `
    <div style="overflow-x: auto;">
        <table class="timetable-matrix-table" border="1" style="width:100%; border-collapse:collapse; text-align:left; background:#fff;">
            <thead>
                <tr style="background-color: #2b7bb9; color: white;">
                    <th style="padding: 10px; text-align:center;">Day</th>
                    <th style="padding: 10px;">Time</th>
                    <th style="padding: 10px;">Code</th>
                    <th style="padding: 10px;">Module Name</th>
                    <th style="padding: 10px;">Difficulty</th>
                    <th style="padding: 10px;">Type</th>
                    <th style="padding: 10px; text-align:center;">Action</th>
                </tr>
            </thead>
            <tbody>`;

    days.forEach(day => {
        const daySessions = state.timetable.filter(s => s.day === day);
        
        if (daySessions.length > 0) {
            daySessions.forEach((s, index) => {
                html += `<tr>`;
                
                // Ongeza rowspan kwenye somo la kwanza tu la siku
                if (index === 0) {
                    html += `<td rowspan="${daySessions.length}" style="font-weight:bold; vertical-align:middle; text-align:center; background:#f0f4f8; padding:10px; border:1px solid #ccc;">${day}</td>`;
                }
                
                html += `
                    <td style="padding: 8px; border:1px solid #ccc;">${s.startTime} - ${s.endTime}</td>
                    <td style="padding: 8px; border:1px solid #ccc;"><strong>${s.moduleCode}</strong></td>
                    <td style="padding: 8px; border:1px solid #ccc;">${s.moduleName}</td>
                    <td style="padding: 8px; border:1px solid #ccc;">${s.difficulty}</td>
                    <td style="padding: 8px; border:1px solid #ccc;">${s.type}</td>
                    <td style="padding: 8px; border:1px solid #ccc; text-align:center;">
                        <i class="fa-solid fa-trash text-danger" style="cursor:pointer;" onclick="deleteSession('${s.id}')" title="Delete"></i>
                    </td>
                </tr>`;
            });
        }
    });

    html += `</tbody></table></div>`;
    container.innerHTML = html;
}function renderDailyList() {
    const container = document.getElementById('timetableDailyContainer');
    const selectedDay = document.getElementById('ttDaySelect')?.value || 'Monday';
    if (!container) return;

    const daySessions = state.timetable.filter(s => s.day === selectedDay);

    if (daySessions.length === 0) {
        container.innerHTML = `<p class="text-muted text-center padding">No study sessions scheduled for ${selectedDay}.</p>`;
        return;
    }

    container.innerHTML = daySessions.map(s => `
        <div class="card-box margin-bottom">
            <div class="layout-between">
                <h4>${s.startTime} - ${s.endTime} | <strong>${s.moduleCode}</strong></h4>
                <button class="btn btn-xs btn-danger" onclick="deleteSession('${s.id}')"><i class="fa-solid fa-trash"></i> Delete</button>
            </div>
            <p style="font-size:13px; margin-top:5px;">${s.moduleName}</p>
            <span class="badge badge-${s.difficulty.toLowerCase()}">${s.difficulty}</span>
            <span class="badge badge-low">${s.type}</span>
        </div>
    `).join('');
}

function renderCalendarGrid() {
    const container = document.getElementById('timetableCalendarContainer');
    if (!container) return;
    container.innerHTML = `<div class="card-box text-center"><p><i class="fa-solid fa-calendar-days font-navy" style="font-size:30px;"></i></p><p class="margin-top">Calendar view showing ${state.timetable.length} active scheduled items for the active semester.</p></div>`;
}

window.deleteSession = function(id) {
    state.timetable = state.timetable.filter(s => s.id !== id);
    state.saveUserData();
    renderTimetable();
    renderDashboard();
    state.addNotification("Session removed.", "info");
};

function populateSessionModuleSelect() {
    const select = document.getElementById('sessModuleCode');
    if (!select) return;
    select.innerHTML = state.modules.map(m => `<option value="${m.code}">${m.code} - ${m.name}</option>`).join('');
}

// --------------------------------------------------------------------------
// 10. AI ASSISTANT HUB (SIMULATED CHAT & META DIAGNOSTICS)
// --------------------------------------------------------------------------

function setupAIHubHandlers() {
    // Tab switching
    document.querySelectorAll('.ai-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.ai-tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.ai-tab-content').forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const target = btn.getAttribute('data-aitab');
            document.getElementById(target)?.classList.add('active');
        });
    });

    // Chat Actions
    document.getElementById('sendChatBtn')?.addEventListener('click', handleUserChatMessage);
    document.getElementById('chatInputText')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleUserChatMessage();
    });

    document.querySelectorAll('.chip-prompt').forEach(chip => {
        chip.addEventListener('click', () => {
            const text = chip.getAttribute('data-prompt');
            document.getElementById('chatInputText').value = text;
            handleUserChatMessage();
        });
    });

    document.getElementById('clearChatBtn')?.addEventListener('click', () => {
        document.getElementById('chatMessageWindow').innerHTML = `
            <div class="chat-msg system">
                Chat cleared. How else can I assist your study planning today?
            </div>
        `;
    });

    // Meta AI Diagnostic Handler
    document.getElementById('runMetaAnalysisBtn')?.addEventListener('click', () => {
        const modId = document.getElementById('metaModuleSelect').value;
        const mod = state.modules.find(m => m.id === modId);
        if (!mod) return;

        document.getElementById('metaAnalysisResult').classList.remove('hidden');
        document.getElementById('metaResultTitle').textContent = `${mod.code}: ${mod.name}`;
        document.getElementById('metaResultDifficulty').textContent = mod.difficulty;
        document.getElementById('metaResultHours').textContent = `${mod.hours + 2} Recommended Hours`;
        document.getElementById('metaResultFreq').textContent = mod.difficulty === 'Difficult' ? '4x per week' : '2x per week';
        
        let strategy = "Focus on solving end-of-chapter problems and practical implementation.";
        if (mod.difficulty === 'Difficult') {
            strategy = "Break down complex theoretical concepts into active-recall flashcards. Combine morning study sessions with peer discussion.";
        }
        document.getElementById('metaResultStrategy').textContent = strategy;

        state.addNotification(`Meta AI Diagnostic completed for ${mod.code}.`, "info");
    });
}

function handleUserChatMessage() {
    const input = document.getElementById('chatInputText');
    const msg = input.value.trim();
    if (!msg) return;

    const window = document.getElementById('chatMessageWindow');

    // Append User Message
    const userDiv = document.createElement('div');
    userDiv.className = 'chat-msg user';
    userDiv.textContent = msg;
    window.appendChild(userDiv);

    input.value = '';
    window.scrollTop = window.scrollHeight;

    // Simulate AI Response
    setTimeout(() => {
        const aiDiv = document.createElement('div');
        aiDiv.className = 'chat-msg ai';
        aiDiv.textContent = generateSimulatedAIResponse(msg);
        window.appendChild(aiDiv);
        window.scrollTop = window.scrollHeight;
    }, 800);
}

function generateSimulatedAIResponse(userQuery) {
    const query = userQuery.toLowerCase();
    if (query.includes('difficult') || query.includes('first')) {
        const diffs = state.modules.filter(m => m.difficulty === 'Difficult');
        if (diffs.length > 0) {
            return `Based on your course profile, you should prioritize ${diffs[0].code} (${diffs[0].name}). It is flagged as high complexity and requires early focus.`;
        }
        return "I recommend reviewing your modules marked as 'Critical' priority first during your peak energy hours.";
    }
    if (query.includes('plan') || query.includes('timetable')) {
        return "To create an optimal plan, ensure you distribute sessions across 4-5 study days, taking 15-minute breaks between 60-minute blocks.";
    }
    return "That is a great academic inquiry. I recommend breaking down the syllabus into weekly goals and reviewing recommended guidance notes from your course lecturers.";
}

function populateMetaModuleSelect() {
    const select = document.getElementById('metaModuleSelect');
    if (!select) return;
    select.innerHTML = state.modules.map(m => `<option value="${m.id}">${m.code} - ${m.name}</option>`).join('');
}

// --------------------------------------------------------------------------
// 11. GUIDANCE NOTES & RECOMMENDATIONS
// --------------------------------------------------------------------------

function renderRecommendations() {
    const grid = document.getElementById('recommendationsListGrid');
    if (!grid) return;

    grid.innerHTML = state.recommendations.map(r => `
        <div class="rec-card">
            <div class="rec-author">
                <i class="fa-solid fa-circle-user font-navy" style="font-size:32px;"></i>
                <div class="rec-author-info">
                    <h4>${r.author}</h4>
                    <p>${r.role} • Target: ${r.course}</p>
                </div>
            </div>
            <h4 style="font-size:15px; margin-bottom:8px;">${r.title}</h4>
            <p style="font-size:13px; color:var(--text-muted); flex:1;">${r.content}</p>
        </div>
    `).join('');

    // Modal Submit Handler for Guidance
    document.getElementById('recForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('recTitle').value.trim();
        const course = document.getElementById('recTargetCourse').value.trim();
        const content = document.getElementById('recContent').value.trim();

        const newRec = {
            id: 'rec_' + Date.now(),
            title,
            course,
            author: state.currentUser.fullName,
            role: capitalize(state.currentUser.role),
            content
        };

        state.recommendations.unshift(newRec);
        state.saveUserData();
        renderRecommendations();
        document.getElementById('recModal').classList.add('hidden');
        state.addNotification("Academic guidance note published.", "success");
    });

    document.getElementById('openAddRecModal')?.addEventListener('click', () => {
        document.getElementById('recForm').reset();
        document.getElementById('recModal').classList.remove('hidden');
    });
}

// --------------------------------------------------------------------------
// 12. EXPORT ENGINE (PDF, EXCEL, JSON)
// --------------------------------------------------------------------------

function setupSettingsAndExports() {
    // Theme Select
    document.getElementById('settingTheme')?.addEventListener('change', (e) => {
        state.settings.theme = e.target.value;
        applySystemSettings();
        state.saveUserData();
    });

    // Font Select
    document.getElementById('settingFont')?.addEventListener('change', (e) => {
        state.settings.font = e.target.value;
        applySystemSettings();
        state.saveUserData();
    });

    // Accent Select
    document.getElementById('settingAccent')?.addEventListener('change', (e) => {
        state.settings.accent = e.target.value;
        applySystemSettings();
        state.saveUserData();
    });

    // JSON Export
    document.getElementById('exportJsonDataBtn')?.addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `MUST_AI_Backup_${state.currentUser.regNo}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    });

    // Reset Data
    document.getElementById('resetSystemDataBtn')?.addEventListener('click', () => {
        if (confirm("Warning: This will clear all your saved modules, timetable sessions, and settings. Continue?")) {
            const uid = state.currentUser.id;
            localStorage.removeItem(`must_ai_modules_${uid}`);
            localStorage.removeItem(`must_ai_timetable_${uid}`);
            localStorage.removeItem(`must_ai_recs_${uid}`);
            localStorage.removeItem(`must_ai_notifs_${uid}`);
            localStorage.removeItem(`must_ai_settings_${uid}`);
            state.loadUserData();
            showAppLayout();
            alert('System reset complete.');
        }
    });

// PDF Export Timetable (Yenye Nembo ya MUST, Header, na RowSpan)
    document.getElementById('exportTimetablePdf')?.addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // 1. Kutengeneza na Ku-load Picha ya Nembo (must-logo.jpg)
        const img = new Image();
        // Inajaribu kuchukua picha ya ndani (local), ikikosa inachukua ya mtandaoni
        img.src = "must-logo.jpg"; 

        // Function ya kuchora PDF picha ikishaload
        const generatePdf = () => {
            // 2. Header (Vichwa vya habari kukaa Katikati chini ya nembo)
            doc.setFontSize(13);
            doc.setFont("helvetica", "bold");
            doc.text("MBEYA UNIVERSITY OF SCIENCE AND TECHNOLOGY (MUST)", 105, 38, { align: "center" });

                // Ongeza picha katikati ya ukurasa (X=92.5, Y=8, Width=25, Height=25)
            try {
                doc.addImage(img, 'JPEG', 92.5, 8, 25, 25);
            } catch (e) {
                console.warn("Picha imeshindwa kuongezwa kwenye PDF:", e);
            }


            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");
            doc.text("Academic Timetable", 105, 44, { align: "center" });
            doc.text(`Student Name: ${state.currentUser.fullName}`, 105, 50, { align: "center" });
            doc.text(`Registration No: ${state.currentUser.regNo}`, 105, 56, { align: "center" });
            doc.text(`Course: ${state.currentUser.course}`, 105, 62, { align: "center" });
            doc.text(`Semester: ${state.currentUser.semester}`, 105, 68, { align: "center" });

            // 3. Kuandaa Data za Jedwali zenye RowSpan
            const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            const tableData = [];

            days.forEach(day => {
                const daySessions = state.timetable.filter(s => s.day === day);
                if (daySessions.length > 0) {
                    daySessions.forEach((s, index) => {
                        const row = [];
                        if (index === 0) {
                            row.push({ 
                                content: day, 
                                rowSpan: daySessions.length, 
                                styles: { valign: 'middle', halign: 'center', fontStyle: 'bold' } 
                            });
                        }
                        row.push(`${s.startTime} - ${s.endTime}`);
                        row.push(s.moduleCode);
                        row.push(s.moduleName);
                        row.push(s.difficulty);
                        row.push(s.type);

                        tableData.push(row);
                    });
                }
            });

            // 4. Kutengeneza AutoTable Chini ya Maelezo
            doc.autoTable({
                startY: 74,
                head: [['Day', 'Time', 'Code', 'Module Name', 'Difficulty', 'Type']],
                body: tableData,
                theme: 'grid',
                headStyles: { fillColor: [43, 123, 185], halign: 'center' },
                styles: { fontSize: 8.5, cellPadding: 3, valign: 'middle' }
            });

            doc.save(`Timetable_${state.currentUser.regNo}.pdf`);
        };

        // Picha ikiload vizuri
        img.onload = generatePdf;

        // Kama picha ya local ikikosa au ikigoma, jaribu link ya mtandaoni au tengeneza bila picha
        img.onerror = () => {
            img.onerror = null; // Kuzuia loop
            img.src = "https://must.ac.tz/images/logo.png"; // Jaribio la pili kutoka mtandaoni
            img.onload = generatePdf;
            img.onerror = generatePdf; // Kama kote kukigoma, tengeneza PDF bila picha
        };
    });

    // Excel Export Timetable (Yenye Merge Cells za Siku)
    document.getElementById('exportTimetableXlsx')?.addEventListener('click', () => {
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        let excelData = [
            ["Day", "Time", "Code", "Module Name", "Difficulty", "Priority", "Type"]
        ];
        let merges = [];
        let currentRow = 1; // Row 0 ni ya Headers

        days.forEach(day => {
            const daySessions = state.timetable.filter(s => s.day === day);
            if (daySessions.length > 0) {
                const startRow = currentRow;

                daySessions.forEach((s, index) => {
                    excelData.push([
                        index === 0 ? day : "", // Jina la siku linaandikwa mara moja tu
                        `${s.startTime} - ${s.endTime}`,
                        s.moduleCode,
                        s.moduleName,
                        s.difficulty,
                        s.priority,
                        s.type
                    ]);
                    currentRow++;
                });

                const endRow = currentRow - 1;

                // Kama siku ina masomo zaidi ya 1, unganisha seli za Column A (Day)
                if (endRow > startRow) {
                    merges.push({ s: { r: startRow, c: 0 }, e: { r: endRow, c: 0 } });
                }
            }
        });

        const worksheet = XLSX.utils.aoa_to_sheet(excelData);
        worksheet['!merges'] = merges; // Weka kanuni ya Merge Cells

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Timetable");
        XLSX.writeFile(workbook, `Timetable_${state.currentUser.regNo}.xlsx`);
    });
            // PDF Export Modules
    document.getElementById('exportModulesPdf')?.addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.setFontSize(16);
        doc.text("MUST Course Modules & Workload Report", 14, 15);

        const tableData = state.modules.map(m => [m.code, m.name, m.difficulty, m.priority, `${m.hours} hrs`, m.semester]);

        doc.autoTable({
            startY: 25,
            head: [['Code', 'Module Name', 'Difficulty', 'Priority', 'Weekly Hours', 'Semester']],
            body: tableData,
        });

        doc.save(`Modules_Report_${state.currentUser.regNo}.pdf`);
    });

    // Excel Export Modules
    document.getElementById('exportModulesXlsx')?.addEventListener('click', () => {
        const worksheet = XLSX.utils.json_to_sheet(state.modules);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Modules");
        XLSX.writeFile(workbook, `Modules_${state.currentUser.regNo}.xlsx`);
    });
}

function applySystemSettings() {
    document.documentElement.setAttribute('data-theme', state.settings.theme);
    document.documentElement.setAttribute('data-font', state.settings.font);
    document.documentElement.setAttribute('data-accent', state.settings.accent);

    const themeSelect = document.getElementById('settingTheme');
    if (themeSelect) themeSelect.value = state.settings.theme;
    const fontSelect = document.getElementById('settingFont');
    if (fontSelect) fontSelect.value = state.settings.font;
    const accentSelect = document.getElementById('settingAccent');
    if (accentSelect) accentSelect.value = state.settings.accent;
}

// --------------------------------------------------------------------------
// 13. NOTIFICATIONS & GLOBAL SEARCH SYSTEM
// --------------------------------------------------------------------------

function setupNotificationsAndSearch() {
    const bellBtn = document.getElementById('notifBellBtn');
    const panel = document.getElementById('notifPanel');

    bellBtn?.addEventListener('click', () => {
        panel.classList.toggle('hidden');
    });

    document.getElementById('markAllReadBtn')?.addEventListener('click', () => {
        state.notifications.forEach(n => n.read = true);
        state.saveUserData();
        renderNotifications();
    });

    // Global Search
    const searchInput = document.getElementById('globalSearchInput');
    const searchDropdown = document.getElementById('searchResultsDropdown');

    searchInput?.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            searchDropdown.classList.add('hidden');
            return;
        }

        const matchedModules = state.modules.filter(m => m.code.toLowerCase().includes(query) || m.name.toLowerCase().includes(query));

        if (matchedModules.length === 0) {
            searchDropdown.innerHTML = `<div class="search-result-item text-muted">No matching modules found</div>`;
        } else {
            searchDropdown.innerHTML = matchedModules.slice(0, 5).map(m => `
                <div class="search-result-item" onclick="jumpToModule('${m.id}')">
                    <strong>${m.code}</strong> - ${m.name} (${m.difficulty})
                </div>
            `).join('');
        }
        searchDropdown.classList.remove('hidden');
    });
}

function renderNotifications() {
    const list = document.getElementById('notifList');
    const badge = document.getElementById('notifBadge');
    if (!list) return;

    const unreadCount = state.notifications.filter(n => !n.read).length;
    if (unreadCount > 0) {
        badge.textContent = unreadCount;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }

    if (state.notifications.length === 0) {
        list.innerHTML = `<div class="empty-state-sm padding text-center text-muted">No notifications</div>`;
        return;
    }

    list.innerHTML = state.notifications.map(n => `
        <div class="notif-item ${n.read ? '' : 'unread'}">
            <p>${n.text}</p>
            <span class="text-muted" style="font-size:10px;">${n.date}</span>
        </div>
    `).join('');
}

window.jumpToModule = function(id) {
    document.getElementById('searchResultsDropdown').classList.add('hidden');
    document.querySelector('.nav-item[data-target="modulesView"]')?.click();
};

// Helper Formatting Utilities
function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function timeToMinutes(timeStr) {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
}

function minutesToTime(mins) {
    const h = Math.floor(mins / 60).toString().padStart(2, '0');
    const m = (mins % 60).toString().padStart(2, '0');
    return `${h}:${m}`;
}
// URL ya Backend Server yako
const BASE_URL = "http://localhost:5000/api";

// Tafuta form kutoka kwenye HTML
const loginForm = document.getElementById("loginForm");

// Hakikisha form ipo kabla ya kuweka event listener
if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault(); // Inazuia ukurasa kurefresh

        // Chukua data kutoka kwenye input fields za HTML
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            // Tuma ombi la Login Backend
            const response = await axios.post(`${BASE_URL}/auth/login`, {
                email,
                password
            });

            // Hifadhi token na taarifa za mtumiaji
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));

            alert("Login Imefanikiwa!");
            window.location.href = "dashboard.html"; // Elekeza kwenye dashboard page
            
        } catch (error) {
            alert(error.response?.data?.message || "Imefeli kuingia");
        }
    });
}