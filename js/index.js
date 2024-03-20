// Section 2
let activeBtn = null;

document.addEventListener("DOMContentLoaded", function () {
    setActiveBtn(1);
});

function showResult(count) {

    if (activeBtn) {
        activeBtn.classList.remove("active");
    }

    const result = '<img src="./images/img_section02_01.png" alt="img_section02_01">'.repeat(count);
    document.getElementById("result").innerHTML = result;

    setActiveBtn(count);

    if (count === 1) {
        document.getElementById("content-section").innerHTML = `
            <div style="width: 9rem;">
                <p>
                    Our team of experts specializes in creating unique and effective designs.
                </p>
            </div>
            <div style="width: 19rem;">
                <p>
                    We created marketing materials that were consistent with the new brand identity, such as business cards, brochures, and social media graphics.
                </p>
            </div>
        `;
    } else if (count === 2) {
        document.getElementById("content-section").innerHTML = `
            <div style="width: 9rem;">
                <p>
                    Innovative and effective design solutions for business of our clients
                </p>
            </div>
            <div style="width: 19rem;">
                <p>
                    We partnered with a technology startup to create a new website that would showcase their innovative product and attract investors.
                </p>
            </div>
        `;
    } else if (count === 3) {
        document.getElementById("content-section").innerHTML = `
            <div style="width: 10.5rem;">
                <p>
                    Our team of experienced designers and marketing professionals work closely 
                </p>
            </div>
            <div style="width: 19rem;">
                <p>
                    We provided the brand with a detailed social media strategy that outlined how they could continue to grow their following and engage with their audience in the future.
                </p>
            </div>
        `;
    }
}

function setActiveBtn(count) {
    activeBtn = document.getElementById("button" + count);
    activeBtn.classList.add("active");
}

// Slide
let currentSlideIndex = 0;
showSlide(currentSlideIndex);

function changeSlide(n) {
    showSlide((currentSlideIndex += n));
}

function setCurrentSlide(n) {
    showSlide((currentSlideIndex = n));
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const circles = document.getElementsByClassName("circle");
    currentSlideIndex = (n + slides.length) % slides.length;
    Array.from(slides).forEach(slide => slide.style.display = "none");
    Array.from(circles).forEach(circle => circle.classList.remove("active"));
    slides[currentSlideIndex].style.display = "block";
    circles[currentSlideIndex].classList.add("active");
}