document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       PROJECT FILTER
    ===================================== */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const projectCards =
        document.querySelectorAll(".project-card");


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            const filter =
                button.getAttribute("data-filter");


            projectCards.forEach(function (card) {

                const category =
                    card.getAttribute("data-category");


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    card.classList.remove("hidden");

                } else {

                    card.classList.add("hidden");

                }

            });

        });

    });


    /* =====================================
       PROJECT DATA
    ===================================== */

    const projectData = {

        resume: {

            category: "AI / Web Development",

            title: "AI Resume Analyzer",

            description:
                "An AI-powered resume analysis system designed to help students improve their resumes through automated scoring, suggestions and analysis.",

            technologies: [
                "Python",
                "Flask",
                "MySQL",
                "AI",
                "PDF Processing"
            ],

            features: [
                "Resume upload",
                "Resume scoring",
                "AI suggestions",
                "Resume preview",
                "User authentication",
                "Resume improvement recommendations"
            ]

        },


        heritage: {

            category: "AR / Interactive Multimedia",

            title: "Heritage Explorer AR",

            description:
                "An augmented reality application that allows users to explore Malaysian heritage objects through interactive 3D models and AR experiences.",

            technologies: [
                "Unity",
                "Vuforia",
                "3D Models",
                "AR",
                "C#"
            ],

            features: [
                "AR object detection",
                "Interactive 3D models",
                "Object rotation",
                "Object scaling",
                "Information panel",
                "Audio narration"
            ]

        },


        navigation: {

            category: "Web Development",

            title: "Indoor Navigation System",

            description:
                "A web-based indoor navigation concept designed to help users navigate connected buildings and locate rooms, facilities and important places.",

            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Interactive Map"
            ],

            features: [
                "Indoor building map",
                "Location selection",
                "Navigation path",
                "Building connections",
                "Room and facility locations"
            ]

        },


        skyscore: {

            category: "UI / UX Design",

            title: "Skyscore",

            description:
                "A basketball management system interface designed with a focus on clean user experience, visual hierarchy and easy navigation.",

            technologies: [
                "Figma",
                "UI/UX",
                "Wireframe",
                "Prototype"
            ],

            features: [
                "Dashboard design",
                "Basketball management interface",
                "User-friendly navigation",
                "Interactive prototype",
                "Consistent visual design"
            ]

        },


        laravel: {

            category: "Web Development",

            title: "Laravel Web System",

            description:
                "A Laravel-based web system developed and configured for deployment on a Windows IIS server environment.",

            technologies: [
                "Laravel",
                "PHP",
                "MySQL",
                "IIS",
                "HTML",
                "CSS"
            ],

            features: [
                "Laravel backend",
                "MySQL database",
                "IIS deployment",
                "Server configuration",
                "PHP environment setup"
            ]

        },


        marketplace: {

            category: "UI / UX Design",

            title: "Student Marketplace",

            description:
                "A student-to-student marketplace concept designed to make buying and selling books, notes and other study materials easier within the student community.",

            technologies: [
                "Figma",
                "UI/UX",
                "Prototype",
                "User Flow"
            ],

            features: [
                "Product listing",
                "Student seller interface",
                "Product search",
                "Category browsing",
                "Simple buying flow"
            ]

        }

    };


    /* =====================================
       MODAL ELEMENTS
    ===================================== */

    const modal =
        document.getElementById("projectModal");

    const modalCategory =
        document.getElementById("modalCategory");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalTech =
        document.getElementById("modalTech");

    const modalFeatures =
        document.getElementById("modalFeatures");

    const modalClose =
        document.querySelector(".modal-close");


    /* =====================================
       OPEN MODAL
    ===================================== */

    window.openModal = function (projectId) {

        const project =
            projectData[projectId];


        if (!project) {
            return;
        }


        modalCategory.textContent =
            project.category;


        modalTitle.textContent =
            project.title;


        modalDescription.textContent =
            project.description;


        /* Technologies */

        modalTech.innerHTML = "";


        project.technologies.forEach(function (technology) {

            const span =
                document.createElement("span");


            span.textContent =
                technology;


            modalTech.appendChild(span);

        });


        /* Features */

        modalFeatures.innerHTML = "";


        project.features.forEach(function (feature) {

            const li =
                document.createElement("li");


            li.textContent =
                feature;


            modalFeatures.appendChild(li);

        });


        modal.classList.add("active");


        document.body.style.overflow = "hidden";

    };


    /* =====================================
       CLOSE MODAL
    ===================================== */

    function closeModal() {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeModal
        );

    }


    /* =====================================
       CLICK OUTSIDE MODAL
    ===================================== */

    modal.addEventListener(
        "click",
        function (event) {

            if (event.target === modal) {

                closeModal();

            }

        }
    );


    /* =====================================
       ESC KEY
    ===================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeModal();

            }

        }
    );


    /* =====================================
       SMOOTH SCROLL
    ===================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        targetId !== "#" &&
                        document.querySelector(targetId)
                    ) {

                        event.preventDefault();


                        document
                            .querySelector(targetId)
                            .scrollIntoView({
                                behavior: "smooth"
                            });

                    }

                }
            );

        });


    /* =====================================
       NAVBAR SHADOW
    ===================================== */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 30) {

                navbar.style.boxShadow =
                    "0 5px 25px rgba(0,0,0,0.06)";

            } else {

                navbar.style.boxShadow =
                    "none";

            }

        }
    );


    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-header, .about-grid, .project-card, .skill-card, .contact"
        );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

    });


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });


});
// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function (element) {
    revealObserver.observe(element);
});
// =========================
// BACK TO TOP
// =========================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});