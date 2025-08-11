document.addEventListener('DOMContentLoaded', () => {
    const certificateCards = document.querySelectorAll('.certificate-card');
    const modal = document.getElementById('certificate-modal');
    const modalImg = document.getElementById('modal-certificate-img');
    const closeModalBtn = document.querySelector('.close-btn');
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    // Open modal on 'View Certificate' button click
    certificateCards.forEach(card => {
        const viewButton = card.querySelector('.view-btn');
        const cardImgSrc = card.querySelector('.certificate-img').src;

        viewButton.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = cardImgSrc;
        });
    });

    // Close modal when the 'x' is clicked
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Scroll-to-top button functionality
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
