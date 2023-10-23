let signInBtn = document.querySelector(".sign-in-btn");
let signInForm = document.querySelector(".sign-in");
let signInSubmit = document.querySelector(".submit-btn");

signInBtn.addEventListener("click", () => {
    if (signInForm.style.display === "block") {
        signInForm.style.display = "none";
    } else {
        signInForm.style.display = "block"
    }
});

signInSubmit.addEventListener("click", () => signInForm.style.display = "none");

let tel = document.querySelector(".image");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated animate__fadeInRight');
        }
    });
});
observer.observe(tel);