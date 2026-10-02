const cake = document.querySelector(".birthday-cake");

if (cake) {
    const toggleFlame = () => {
        const blownOut = cake.classList.toggle("is-out");

        cake.setAttribute("aria-pressed", String(blownOut));
    };

    cake.addEventListener("click", toggleFlame);

    cake.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleFlame();
        }
    });
}
