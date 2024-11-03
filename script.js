document.addEventListener("DOMContentLoaded", function () {
    // Certificate Slider
    const certificates = document.querySelectorAll(".certificate-item");
    let certIndex = 0;

    function showCertificate(index) {
        certificates.forEach((certificate, i) => {
            certificate.classList.remove("active");
            if (i === index) certificate.classList.add("active");
        });
    }

    function nextCertificate() {
        certIndex = (certIndex + 1) % certificates.length;
        showCertificate(certIndex);
    }

    function prevCertificate() {
        certIndex = (certIndex - 1 + certificates.length) % certificates.length;
        showCertificate(certIndex);
    }

    function initializeCertificateSlider() {
        document.getElementById("nextBtn").addEventListener("click", nextCertificate);
        document.getElementById("prevBtn").addEventListener("click", prevCertificate);
        showCertificate(certIndex);
        setInterval(nextCertificate, 5000); // Automatically cycle certificates every 5 seconds
    }

    initializeCertificateSlider();

    // Project Cards Scroll Animation
    const projectCards = document.querySelectorAll(".project-card");
    
    function handleScrollAnimation() {
        projectCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (cardTop < screenPosition) {
                card.classList.add("visible");
            } else {
                card.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScrollAnimation);

    // Initial trigger for scroll animation
    handleScrollAnimation();
});
