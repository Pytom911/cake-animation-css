const cake = document.querySelector(".birthday-cake");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (cake) {
    let introTimer;

    if (!reduceMotion) {
        cake.classList.add("is-entering");

        introTimer = setTimeout(() => {
            cake.classList.remove("is-entering");
        }, 7500);
    }

    const toggleFlame = () => {
        const blownOut = cake.classList.toggle("is-out");

        cake.setAttribute("aria-pressed", String(blownOut));

        if (!blownOut) {
            return;
        }

        clearTimeout(introTimer);
        cake.classList.remove("is-entering");
    };

    cake.addEventListener("click", toggleFlame);

    cake.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleFlame();
        }
    });
}