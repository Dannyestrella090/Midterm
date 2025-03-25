// QUOTE BUTTON
document.addEventListener("DOMContentLoaded", function () {
    const quoteBtn = document.querySelector("#quoteBtn");
    const quoteOutput = document.querySelector("#quote");

    if (quoteBtn && quoteOutput) {
        quoteBtn.addEventListener("click", function () {
            quoteOutput.textContent = "“You have to be able to accept failure to get better.” – LeBron James";
        });
    }

    // IMAGE SLIDER (basic example)
    const images = [
        "img/lebron_cavs.jpg",
        "img/lebron_heat.jpg",
        "img/lebron_lakers.jpg"
    ];
    let current = 0;

    const sliderImg = document.querySelector("#slider-img");
    const prevBtn = document.querySelector("#prev");
    const nextBtn = document.querySelector("#next");

    function updateImage() {
        sliderImg.src = images[current];
    }

    if (prevBtn && nextBtn && sliderImg) {
        prevBtn.addEventListener("click", function () {
            current = (current - 1 + images.length) % images.length;
            updateImage();
        });

        nextBtn.addEventListener("click", function () {
            current = (current + 1) % images.length;
            updateImage();
        });

        updateImage(); // Set initial image
    }
});
