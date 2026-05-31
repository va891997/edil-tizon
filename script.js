document.addEventListener("DOMContentLoaded", function () {
    
    // Systems Interface Synchronized Preloader Controller Node
    const loaderNode = document.getElementById("loader");
    if (loaderNode) {
        const structuralBar = loaderNode.querySelector(".loader-bar span");
        gsap.to(structuralBar, {
            width: "100%",
            duration: 1.0,
            ease: "power2.out",
            onComplete: () => {
                gsap.to(loaderNode, {
                    opacity: 0,
                    duration: 0.4,
                    onComplete: () => {
                        loaderNode.style.display = "none";
                        triggerRevealSequence();
                    }
                });
            }
        });
    }

    // Dynamic Element Reveal Pipeline Entrance
    function triggerRevealSequence() {
        gsap.from(".reveal-element", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
        });
        
        // Trigger programmatic structural skill animations instantly on presentation layout
        gsap.utils.toArray(".skill-fill-line").forEach(line => {
            const widthTarget = line.style.width;
            line.style.width = "0px";
            gsap.to(line, {
                width: widthTarget,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: line,
                    start: "top 95%"
                }
            });
        });
    }

    // Header Navbar Location Processing Logic Tracker
    const navBarNode = document.querySelector(".navigation-bar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 40) {
            navBarNode.classList.add("scrolled-state");
        } else {
            navBarNode.classList.remove("scrolled-state");
        }
    });

    // Close Mobile Navbar Dropdown Seamlessly On Anchor Click Call Link Targets
    const navbarLinks = document.querySelectorAll(".primary-menu .nav-link, .navigation-bar .prime-action-btn");
    const navbarCollapseNode = document.getElementById("mainNavbar");
    if (navbarCollapseNode) {
        const bsCollapseInstance = new bootstrap.Collapse(navbarCollapseNode, { toggle: false });
        navbarLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (navbarCollapseNode.classList.contains("show")) {
                    bsCollapseInstance.hide();
                }
            });
        });
    }

    // Interactive Core Desktop Mouse Motion Vector Tracking Grid
    const cursor = document.querySelector(".custom-cursor");
    const cursorDot = document.querySelector(".custom-cursor-dot");
    
    if (cursor && cursorDot && window.innerWidth > 1024) {
        document.addEventListener("mousemove", function (e) {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.2, ease: "power2.out" });
            gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.05, ease: "power2.out" });
        });

        document.querySelectorAll("a, button, .filter-tab-btn").forEach(target => {
            target.addEventListener("mouseenter", () => {
                cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
                cursor.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
            });
            target.addEventListener("mouseleave", () => {
                cursor.style.transform = "translate(-50%, -50%) scale(1)";
                cursor.style.backgroundColor = "transparent";
            });
        });
    }

    // Hero Core Programmatic Typeface Automation Component Engine
    if (document.getElementById("typed-text")) {
        new Typed("#typed-text", {
            strings: ["Technical Support.", "High-Level Virtual Assistance.", "Workflow Systems Engineering."],
            typeSpeed: 40,
            backSpeed: 25,
            backDelay: 1800,
            loop: true
        });
    }

    // Desktop Core Card Tilt Matrix Control Interface
    const trackingHeroCard = document.getElementById("magnetic-hero-card");
    if (trackingHeroCard && window.innerWidth > 1024) {
        trackingHeroCard.addEventListener("mousemove", function (e) {
            const boundaries = trackingHeroCard.getBoundingClientRect();
            const axisX = e.clientX - boundaries.left - boundaries.width / 2;
            const axisY = e.clientY - boundaries.top - boundaries.height / 2;
            
            gsap.to(trackingHeroCard, {
                rotateY: axisX * 0.04,
                rotateX: -axisY * 0.04,
                transformPerspective: 800,
                duration: 0.3,
                ease: "power1.out"
            });
        });

        trackingHeroCard.addEventListener("mouseleave", function () {
            gsap.to(trackingHeroCard, {
                rotateY: 0,
                rotateX: 0,
                duration: 0.5,
                ease: "power1.out"
            });
        });
    }

    // High-Fidelity Statistical Metric Verification Element Processor Loops
    const statisticsParent = document.querySelector(".performance-metrics-panel");
    let numericalCountersTracked = false;

    if (statisticsParent) {
        const fireCountersSequence = () => {
            document.querySelectorAll(".counter-element").forEach(counterElement => {
                const limitTarget = parseInt(counterElement.getAttribute("data-target"), 10);
                const containerTracker = { value: 0 };
                gsap.to(containerTracker, {
                    value: limitTarget,
                    duration: 1.8,
                    ease: "power2.out",
                    onUpdate: () => {
                        counterElement.textContent = Math.floor(containerTracker.value);
                    }
                });
            });
        };

        window.addEventListener("scroll", function() {
            if (!numericalCountersTracked) {
                const structuralBounds = statisticsParent.getBoundingClientRect();
                if (structuralBounds.top < window.innerHeight && structuralBounds.bottom >= 0) {
                    fireCountersSequence();
                    numericalCountersTracked = true;
                }
            }
        });
    }

    // Modular Showroom Item Layout Filtering Controls 
    const criteriaButtons = document.querySelectorAll(".filter-tab-btn");
    const structuralProjectNodes = document.querySelectorAll(".project-item-node");

    criteriaButtons.forEach(button => {
        button.addEventListener("click", function () {
            criteriaButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            const filterTarget = this.getAttribute("data-filter");

            structuralProjectNodes.forEach(node => {
                const categoryNode = node.getAttribute("data-category");
                if (filterTarget === "all" || categoryNode === filterTarget) {
                    node.style.display = "block";
                    gsap.to(node, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
                } else {
                    gsap.to(node, { scale: 0.9, opacity: 0, duration: 0.2, ease: "power2.out", onComplete: () => {
                        node.style.display = "none";
                    }});
                }
            });
        });
    });

    // Content Structural Repository Mapping Layer Array Matrix
    const caseDataRepository = {
        "freelancer-portal": {
            title: "Certified Freelancer Portal Ecosystem Architecture",
            html: `<h4>Architecture Landscape Overview</h4>
                   <p>Engineered via a high-performance decoupled pattern utilizing a Laravel core application layer framed over customized transactional interfaces.</p>
                   <h4 class="mt-3">Core Operational Integrations</h4>
                   <ul class="ps-3">
                       <li>Scalable state machine engines validating credential assertions asynchronously.</li>
                       <li>Dynamic relational schema layouts with advanced database performance metrics indexing.</li>
                       <li>Integrated token security authorizations isolating dashboard metric visibility states.</li>
                   </ul>`
        },
        "yacht-rental": {
            title: "Luxury Yacht Rental Digital Infrastructure",
            html: `<h4>Architecture Landscape Overview</h4>
                   <p>A multi-regional WordPress digital framework serving premier charter destinations including Cannes, Monaco, and Saint Tropez.</p>
                   <h4 class="mt-3">Core Operational Integrations</h4>
                   <ul class="ps-3">
                       <li>Custom booking state handling logic calculating seasonal latency changes.</li>
                       <li>Advanced microdata validation architecture ensuring search crawl precision.</li>
                       <li>Tailored administration interface panels tracking incoming charter leads.</li>
                   </ul>`
        },
        "shopify-ecommerce": {
            title: "Storefront Checkout Conversion Architecture Optimization",
            html: `<h4>Architecture Landscape Overview</h4>
                   <p>Structural refactoring of high-volume merchant platforms focused on asset footprint reductions and streamlined checkouts.</p>
                   <h4 class="mt-3">Core Operational Integrations</h4>
                   <ul>
                       <li>Liquid theme optimization loop targeting performance bottlenecks.</li>
                       <li>Configured local session state monitors reducing network request loops.</li>
                       <li>Automated event validation layers logging funnel metrics directly to analytical platforms.</li>
                   </ul>`
        },
        "recruitment-portal": {
            title: "Automated Corporate Recruitment & Staffing Middleware",
            html: `<h4>Architecture Landscape Overview</h4>
                   <p>An event-driven background environment processing applicant tracking mechanics seamlessly.</p>
                   <h4 class="mt-3">Core Operational Integrations</h4>
                   <ul class="ps-3">
                       <li>Parses unstructured documentation directly into normalized database layers.</li>
                       <li>Webhook routing workflows driving multi-channel automated calendar scheduling notifications.</li>
                       <li>Secure storage bucket architecture managing sensitive credential payload elements.</li>
                   </ul>`
        },
        "time-tracking": {
            title: "Enterprise Logging Analytics Dashboard Configuration",
            html: `<h4>Architecture Landscape Overview</h4>
                   <p>High-concurrency time auditing portal running scheduled calculations over transaction logs.</p>
                   <h4 class="mt-3">Core Operational Integrations</h4>
                   <ul class="ps-3">
                       <li>Optimized query logic verifying work logging patterns across global shifts.</li>
                       <li>Automated export modules formatting financial telemetry records.</li>
                       <li>Custom security protocols tracking access control points.</li>
                   </ul>`
        },
        "data-orchestration": {
            title: "Cross-Platform API Pipeline Operations Hub",
            html: `<h4>Architecture Landscape Overview</h4>
                   <p>Autonomous middleware running continuous cron routines syncing enterprise business entities.</p>
                   <h4 class="mt-3">Core Operational Integrations</h4>
                   <ul class="ps-3">
                       <li>Fault-tolerant webhook handling with programmatic retry logic.</li>
                       <li>Data transformation schemas parsing legacy structures into modern database rows.</li>
                       <li>Real-time exception notification loops alerting administrative engineers.</li>
                   </ul>`
        }
    };

    // System Modal Targeted Application Layout Binder Node
    const functionalContextModal = document.getElementById("caseStudyModal");
    if (functionalContextModal) {
        functionalContextModal.addEventListener("show.bs.modal", function (event) {
            const activatorTarget = event.relatedTarget;
            const contextDataKey = activatorTarget.getAttribute("data-project");
            const mappedContentNode = caseDataRepository[contextDataKey];
            
            if (mappedContentNode) {
                document.getElementById("modalProjectTitle").textContent = mappedContentNode.title;
                document.getElementById("modalProjectContent").innerHTML = mappedContentNode.html;
            }
        });
    }

    // Swiper Multi-Device Initialization Controller Parameters
    if (document.querySelector(".testimonial-carousel-slider")) {
        new Swiper(".testimonial-carousel-slider", {
            slidesPerView: 1,
            spaceBetween: 24,
            autoHeight: false,
            pagination: {
                el: ".testimonial-carousel-pagination",
                clickable: true
            },
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 24 },
                1200: { slidesPerView: 3, spaceBetween: 32 }
            }
        });
    }

    // Intercept Secure Communication Submissions Locally
    const contactFormNode = document.getElementById("contactSecureForm");
    if (contactFormNode) {
        contactFormNode.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Security Handshake Completed. Project pipeline metrics routed successfully.");
            contactFormNode.reset();
        });
    }

    // Injected Background Particles Infrastructure Execution Plan
    if (document.getElementById("particles-js")) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 40, "density": { "enable": true, "value_area": 900 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.06, "random": true },
                "size": { "value": 1.5, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.02, "width": 1 },
                "move": { "enable": true, "speed": 0.6, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
            },
            "interactivity": {
                "detect_on": "window",
                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": false } },
                "modes": { "grab": { "distance": 130, "line_linked": { "opacity": 0.12 } } }
            },
            "retina_detect": true
        });
    }

    // Core Vendor Scroll Reveal Init Call
    AOS.init({
        duration: 750,
        easing: "ease-out",
        once: true,
        disable: 'mobile' /* Disables resource heavy transformation sets on low capacity hand terminals */
    });
});