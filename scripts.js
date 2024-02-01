function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

gsap.registerPlugin(ScrollTrigger);


gsap.from(".logo", {
    duration: 1,
    opacity: 0,
    scale: 0.5,
    ease: "power2.out",
    delay: 0.5 
});


gsap.from(".nav-links li", { 
    duration: 0.5, 
    opacity: 0, 
    y: -20, 
    stagger: 0.1, 
    delay: 1 
});

function revealSections(sectionSelector) {
    gsap.utils.toArray(sectionSelector).forEach(section => {
        gsap.from(section, {
            duration: 1,
            opacity: 0,
            y: 50,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none"
            },
            immediateRender: false
        });
    });
}


revealSections(".section__pic-container");
revealSections(".section__text");
revealSections("#about");
revealSections("#experience");
revealSections("#projects");
revealSections("#contact");