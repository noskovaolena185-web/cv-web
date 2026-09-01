const projects = document.querySelectorAll(".project");


projects.forEach((project) => {

    const button = project.querySelector(".project__header");

    button.addEventListener("click", () => {

        const isOpen = project.classList.contains("is-open");


        projects.forEach((item) => {

            item.classList.remove("is-open");

            const itemButton = item.querySelector(".project__header");

            itemButton.setAttribute("aria-expanded", "false");

        });


        if (!isOpen) {

            project.classList.add("is-open");

            button.setAttribute("aria-expanded", "true");

        }

    });

});


const revealElements = document.querySelectorAll(
    ".section-heading, .project, .about__heading, .about-item, .contact"
);


revealElements.forEach((element) => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }


            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});