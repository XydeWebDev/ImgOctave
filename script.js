document.addEventListener("DOMContentLoaded", function() {
    let header = document.querySelector("#header"),
        intro = document.querySelector("#intro"),
        introH = intro.clientHeight,
        scrollOffset = window.pageYOffset || document.documentElement.scrollTop;

    checkScroll(scrollOffset);

    window.addEventListener("scroll", function() {
        scrollOffset = window.pageYOffset || document.documentElement.scrollTop;

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        let windowWidth = window.innerWidth || document.documentElement.clientWidth;

        if (scrollOffset >= introH || windowWidth <= 1050) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    }

    let navToggle = document.querySelector("#nav_toggle");
    navToggle.addEventListener("click", function(event) {
        event.preventDefault();

        navToggle.classList.toggle("active");
        let nav = document.querySelector("#nav");
        nav.classList.toggle("active");
    });
});