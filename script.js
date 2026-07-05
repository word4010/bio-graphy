// ===============================
// MODALS
// ===============================

const modals = document.querySelectorAll(".modal");
const buttons = document.querySelectorAll("[data-modal]");
const closes = document.querySelectorAll(".close");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        const id = btn.dataset.modal;

        document
            .getElementById(id)
            .classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

closes.forEach(close => {

    close.addEventListener("click", () => {

        close.closest(".modal")
            .classList.remove("active");

        document.body.style.overflow = "auto";

    });

});

window.addEventListener("click", e => {

    modals.forEach(modal => {

        if (e.target === modal) {

            modal.classList.remove("active");
            document.body.style.overflow = "auto";

        }

    });

});

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        modals.forEach(modal =>
            modal.classList.remove("active")
        );

        document.body.style.overflow = "auto";

    }

});

// ===============================
// HEADER
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background =
            "rgba(15,23,42,.95)";

        header.style.boxShadow =
            "0 10px 35px rgba(0,0,0,.25)";

    } else {

        header.style.background =
            "rgba(255,255,255,.06)";

        header.style.boxShadow = "none";

    }

});

// ===============================
// SMOOTH LINKS
// ===============================

document.querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", e => {

            e.preventDefault();

            const section =
                document.querySelector(
                    link.getAttribute("href")
                );

            if (!section) return;

            section.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

// ===============================
// SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll(

    ".card, .info-box, .gallery-item, .story-content, .story-image, .beads-content, .hero-text, .hero-image"

).forEach(item => {

    item.classList.add("fade-up");

    observer.observe(item);

});

// ===============================
// GALLERY EFFECT
// ===============================

document.querySelectorAll(".gallery-item")
    .forEach((item, index) => {

        item.style.transitionDelay =
            `${index * .08}s`;

    });

// ===============================
// BUTTON RIPPLE
// ===============================

document.querySelectorAll("button")
    .forEach(button => {

        button.addEventListener("click", e => {

            const circle =
                document.createElement("span");

            const size =
                Math.max(
                    button.clientWidth,
                    button.clientHeight
                );

            circle.style.width = size + "px";
            circle.style.height = size + "px";

            circle.style.left =
                e.offsetX - size / 2 + "px";

            circle.style.top =
                e.offsetY - size / 2 + "px";

            circle.classList.add("ripple");

            button.appendChild(circle);

            setTimeout(() => {

                circle.remove();

            }, 600);

        });

    });

// ===============================
// HERO PARALLAX
// ===============================

const heroImage =
    document.querySelector(".hero-image img");

window.addEventListener("mousemove", e => {

    if (!heroImage) return;

    const x =
        (window.innerWidth / 2 - e.clientX) / 40;

    const y =
        (window.innerHeight / 2 - e.clientY) / 40;

    heroImage.style.transform =
        `translate(${x}px,${y}px)`;

});

// ===============================
// LOVE BUTTON
// ===============================

const loveBtn =
    document.querySelector(".love-btn");

if (loveBtn) {

    loveBtn.addEventListener("click", () => {

        alert("❤️ Нехай ваша історія буде щасливою!");

    });

}

// ===============================
// OPENLOVE BUTTON
// ===============================

const openLove =
    document.getElementById("openLove");

if (openLove) {

    openLove.addEventListener("click", () => {

        document
            .getElementById("aboutModal")
            .classList.add("active");

        document.body.style.overflow = "hidden";

    });

}

console.log(
    "%cСайт успішно завантажено ❤️",
    "color:#ff5ba2;font-size:18px;font-weight:bold;"
);