const skillBars = document.querySelectorAll(".skill-progress");

function showSkills() {

    skillBars.forEach((bar) => {

        const barPosition = bar.getBoundingClientRect().top;

        const screenPosition = window.innerHeight - 100;

        if (barPosition < screenPosition) {
            bar.classList.add("animate");
        }

    });

}

window.addEventListener("scroll", showSkills);