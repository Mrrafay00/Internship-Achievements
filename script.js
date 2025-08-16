document.addEventListener('DOMContentLoaded', () => {
    const certificateCards = document.querySelectorAll('.certificate-card');
    const modal = document.getElementById('certificate-modal');
    const modalImg = document.getElementById('modal-certificate-img');
    const closeModalBtn = document.querySelector('.close-btn');
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    // Open modal with correct image URL
    certificateCards.forEach(card => {
        const btn = card.querySelector('.view-btn');
        btn.addEventListener('click', () => {
            const imgUrl = card.querySelector('img').getAttribute('data-url');
            modal.style.display = 'block';
            modalImg.src = imgUrl;
        });
    });

    // Close modal
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Scroll-to-top
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
