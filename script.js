"use strict";

/* =========================================
   PROJECT DATA
========================================= */

const projects = {
    entrep: {
        title: "Entrepreneurship",
        items: [
            {
                title: "Entrepreneurship Logo",
                type: "image",
                src: "loglog.jpeg",
                alt: "Entrepreneurship project logo"
            },
            {
                title: "Video Pitch",
                type: "video",
                src: "bulb.mp4",
                description:
                    "Video presentation for the entrepreneurship project."
            },
            {
                title: "Lean Canvas",
                type: "image",
                src: "Lc.jpeg",
                alt:
                    "Lean Canvas for the entrepreneurship project"
            },
            {
                title: "Empathy Map Canvas",
                type: "image",
                src: "EMC.jpeg",
                alt:
                    "Empathy Map Canvas for the entrepreneurship project"
            },
            {
                title: "Business Model Canvas",
                type: "image",
                src: "bmc.png",
                alt:
                    "Business Model Canvas for the entrepreneurship project"
            }
        ]
    },

    embedded: {
        title: "Embedded Systems",
        items: [
            {
                title: "LAFVIN 2WD Robot",
                type: "image",
                src: "robot.png",
                alt:
                    "LAFVIN 2WD robot used in the embedded systems project"
            },
            {
                title: "Robot Montage",
                type: "video",
                src: "car.mp4",
                description:
                    "Video showing the robot and its embedded systems activities."
            },
            {
                title: "Obstacle Avoidance",
                type: "video",
                src: "1st.mp4",
                description:
                    "Video demonstration of the robot's obstacle avoidance activity."
            },
            {
                title: "Line Following",
                type: "video",
                src: "line.mp4",
                description:
                    "Video demonstration of the robot's line-following activity."
            }
        ]
    },

    art: {
        title: "Art App",
        items: [
            {
                title: "Reimagine Portrait",
                type: "image",
                src: "art.png",
                alt:
                    "Digital portrait created for the Art App project"
            }
        ]
    },

    contem: {
        title: "Contemporary",
        items: [
            {
                title: "Diorama",
                type: "image",
                src: "dio.jpg",
                alt:
                    "Contemporary subject diorama project"
            },
            {
                title: "Diorama Documentation",
                type: "image",
                src: "dio2.jpg",
                alt:
                    "Documentation photo of the contemporary diorama"
            },
            {
                title: "TSS Featured",
                type: "image",
                src: "dio3.jpg",
                alt:
                    "Featured contemporary project presentation"
            },
            {
                title: "Award",
                type: "image",
                src: "award.jpg",
                alt:
                    "Award received for the contemporary project"
            }
        ]
    },

    other: {
        title: "Other Subjects",
        items: [
            {
                title: "Java Project",
                type: "image",
                src: "java.png",
                alt:
                    "Java programming project"
            },
            {
                title: "XAMPP Project",
                type: "image",
                src: "xampp.png",
                alt:
                    "XAMPP database development project"
            }
        ]
    }
};


/* =========================================
   PROJECT VIEWER
========================================= */

const modal =
    document.getElementById("projectModal");

const closeModalButton =
    document.getElementById("closeModal");

const projectTitle =
    document.getElementById("projectTitle");

const projectMenu =
    document.getElementById("projectMenu");

const projectDisplay =
    document.getElementById("projectDisplay");

let lastFocusedElement = null;


/* =========================================
   CHECK PROJECT VIEWER
========================================= */

console.log("Portfolio JavaScript loaded.");

console.log(
    "Project buttons:",
    document.querySelectorAll(".project-button").length
);

console.log(
    "Project modal:",
    modal
);


/* =========================================
   CREATE PROJECT MENU
========================================= */

function createProjectMenu(project) {

    if (!projectMenu) {
        console.error("projectMenu not found.");
        return;
    }

    projectMenu.innerHTML = "";

    project.items.forEach((item, index) => {

        const li =
            document.createElement("li");

        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "project-menu-button";

        button.textContent =
            item.title;

        button.addEventListener(
            "click",
            function () {

                showProjectItem(
                    project,
                    index
                );
            }
        );

        li.appendChild(button);

        projectMenu.appendChild(li);
    });
}


/* =========================================
   SHOW PROJECT ITEM
========================================= */

function showProjectItem(
    project,
    index
) {

    if (!projectDisplay) {
        console.error("projectDisplay not found.");
        return;
    }

    const item =
        project.items[index];

    if (!item) {
        return;
    }

    projectDisplay.innerHTML = "";


    /* -------------------------
       HEADING
    ------------------------- */

    const heading =
        document.createElement("h3");

    heading.textContent =
        item.title;

    projectDisplay.appendChild(
        heading
    );


    /* -------------------------
       IMAGE
    ------------------------- */

    if (item.type === "image") {

        const image =
            document.createElement("img");

        image.src =
            item.src;

        image.alt =
            item.alt || item.title;

        image.loading =
            "lazy";

        image.addEventListener(
            "error",
            function () {

                image.remove();

                const error =
                    document.createElement("p");

                error.className =
                    "media-error";

                error.textContent =
                    "This image could not be loaded: " +
                    item.src;

                projectDisplay.appendChild(
                    error
                );
            }
        );

        projectDisplay.appendChild(
            image
        );
    }


    /* -------------------------
       VIDEO
    ------------------------- */

    else if (item.type === "video") {

        const video =
            document.createElement("video");

        video.controls = true;

        video.preload =
            "metadata";

        video.setAttribute(
            "aria-label",
            item.title
        );

        const source =
            document.createElement("source");

        source.src =
            item.src;

        source.type =
            "video/mp4";

        video.appendChild(
            source
        );

        video.addEventListener(
            "error",
            function () {

                video.remove();

                const error =
                    document.createElement("p");

                error.className =
                    "media-error";

                error.textContent =
                    "This video could not be loaded: " +
                    item.src;

                projectDisplay.appendChild(
                    error
                );
            }
        );

        projectDisplay.appendChild(
            video
        );


        if (item.description) {

            const description =
                document.createElement("p");

            description.className =
                "media-description";

            description.textContent =
                item.description;

            projectDisplay.appendChild(
                description
            );
        }
    }


    /* -------------------------
       SELECTED MENU BUTTON
    ------------------------- */

    if (projectMenu) {

        const buttons =
            projectMenu.querySelectorAll(
                ".project-menu-button"
            );

        buttons.forEach(
            (button, buttonIndex) => {

                if (buttonIndex === index) {

                    button.classList.add(
                        "selected"
                    );

                    button.setAttribute(
                        "aria-current",
                        "true"
                    );

                } else {

                    button.classList.remove(
                        "selected"
                    );

                    button.removeAttribute(
                        "aria-current"
                    );
                }
            }
        );
    }
}


/* =========================================
   OPEN PROJECT
========================================= */

function openProject(projectKey) {

    console.log(
        "Opening project:",
        projectKey
    );

    const project =
        projects[projectKey];

    if (!project) {

        console.error(
            "Project does not exist:",
            projectKey
        );

        return;
    }

    if (!modal) {

        console.error(
            "Project modal does not exist."
        );

        return;
    }

    if (!projectTitle) {

        console.error(
            "Project title element does not exist."
        );

        return;
    }

    lastFocusedElement =
        document.activeElement;

    projectTitle.textContent =
        project.title;

    createProjectMenu(
        project
    );

    showProjectItem(
        project,
        0
    );


    /* =================================
       OPEN DIALOG
    ================================= */

    try {

        if (
            typeof modal.showModal ===
            "function"
        ) {

            modal.showModal();

        } else {

            modal.setAttribute(
                "open",
                ""
            );
        }

    } catch (error) {

        console.error(
            "Could not open project modal:",
            error
        );

        modal.setAttribute(
            "open",
            ""
        );
    }


    /* =================================
       FOCUS FIRST MENU BUTTON
    ================================= */

    setTimeout(
        function () {

            if (!projectMenu) {
                return;
            }

            const firstButton =
                projectMenu.querySelector(
                    ".project-menu-button"
                );

            if (firstButton) {
                firstButton.focus();
            }

        },
        50
    );
}


/* =========================================
   PROJECT BUTTONS
========================================= */

const projectButtons =
    document.querySelectorAll(
        ".project-button"
    );

projectButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                console.log(
                    "Project button clicked:",
                    button.dataset.project
                );

                openProject(
                    button.dataset.project
                );
            }
        );
    }
);


/* =========================================
   CLOSE PROJECT
========================================= */

function closeProjectModal() {

    if (!modal) {
        return;
    }

    try {

        if (
            typeof modal.close ===
            "function"
        ) {

            modal.close();

        } else {

            modal.removeAttribute(
                "open"
            );
        }

    } catch (error) {

        console.error(
            "Error closing modal:",
            error
        );

        modal.removeAttribute(
            "open"
        );
    }


    if (
        lastFocusedElement &&
        typeof lastFocusedElement.focus ===
        "function"
    ) {

        lastFocusedElement.focus();
    }

    lastFocusedElement =
        null;
}


/* =========================================
   CLOSE BUTTON
========================================= */

if (closeModalButton) {

    closeModalButton.addEventListener(
        "click",
        closeProjectModal
    );
}


/* =========================================
   ESCAPE KEY
========================================= */

if (modal) {

    modal.addEventListener(
        "cancel",
        function (event) {

            event.preventDefault();

            closeProjectModal();
        }
    );


    /* =================================
       CLICK BACKDROP
    ================================= */

    modal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                modal
            ) {

                closeProjectModal();
            }
        }
    );
}


/* =========================================
   SCROLL PROGRESS
========================================= */

const scrollProgress =
    document.getElementById(
        "scrollProgress"
    );


function updateScrollProgress() {

    if (!scrollProgress) {
        return;
    }

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement
            .scrollHeight -
        window.innerHeight;

    if (documentHeight <= 0) {

        scrollProgress.style.width =
            "0%";

        return;
    }

    const percentage =
        (
            scrollTop /
            documentHeight
        ) * 100;

    scrollProgress.style.width =
        `${Math.min(percentage, 100)}%`;
}


window.addEventListener(
    "scroll",
    updateScrollProgress,
    {
        passive: true
    }
);

updateScrollProgress();


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );

const sections =
    document.querySelectorAll(
        "main section"
    );


if (
    "IntersectionObserver" in window
) {

    const sectionObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }

                        const currentId =
                            entry.target.id;

                        navLinks.forEach(
                            function (link) {

                                const isCurrent =
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    `#${currentId}`;

                                link.classList.toggle(
                                    "active",
                                    isCurrent
                                );

                                if (isCurrent) {

                                    link.setAttribute(
                                        "aria-current",
                                        "page"
                                    );

                                } else {

                                    link.removeAttribute(
                                        "aria-current"
                                    );
                                }
                            }
                        );
                    }
                );
            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );


    sections.forEach(
        function (section) {

            sectionObserver.observe(
                section
            );
        }
    );
}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.querySelector(
        ".contact-form"
    );

const formStatus =
    document.getElementById(
        "formStatus"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function () {

            if (formStatus) {

                formStatus.textContent =
                    "Your message is being submitted.";
            }
        }
    );


    const fields =
        contactForm.querySelectorAll(
            "input, textarea"
        );


    fields.forEach(
        function (field) {

            field.addEventListener(
                "invalid",
                function () {

                    field.classList.add(
                        "invalid"
                    );
                }
            );


            field.addEventListener(
                "input",
                function () {

                    if (
                        field.validity.valid
                    ) {

                        field.classList.remove(
                            "invalid"
                        );
                    }
                }
            );
        }
    );
}


/* =========================================
   REDUCED MOTION
========================================= */

if (
    typeof window.matchMedia ===
    "function"
) {

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    function updateMotion() {

        document.documentElement.classList.toggle(
            "reduce-motion",
            reducedMotion.matches
        );
    }


    updateMotion();


    if (
        typeof reducedMotion.addEventListener ===
        "function"
    ) {

        reducedMotion.addEventListener(
            "change",
            updateMotion
        );

    } else if (
        typeof reducedMotion.addListener ===
        "function"
    ) {

        reducedMotion.addListener(
            updateMotion
        );
    }
}