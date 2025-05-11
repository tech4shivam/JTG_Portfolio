// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get current year for footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Modal functionality
    const modal = document.getElementById('skill-modal');
    const addSkillBtn = document.getElementById('add-skill-btn');
    const closeBtn = document.querySelector('.close');
    const cancelBtn = document.getElementById('cancel-btn');
    const overlay = document.getElementById('overlay');
    const skillForm = document.getElementById('add-skill-form');
    const proficiencySlider = document.getElementById('proficiency');
    const proficiencyValue = document.getElementById('proficiency-value');

    // Function to open modal
    function openModal() {
        modal.style.display = 'block';
        overlay.style.display = 'block';
        document.body.classList.add('no-scroll'); // Prevent body scroll
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.body.classList.remove('no-scroll'); // Allow body scroll
    }

    // Open modal when Add Skill button is clicked
    addSkillBtn.addEventListener('click', openModal);

    // Close modal when close button or cancel button is clicked
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside (on overlay)
    overlay.addEventListener('click', closeModal);

    // Update proficiency value as slider moves
    proficiencySlider.addEventListener('input', function () {
        proficiencyValue.textContent = this.value;
    });

    // Form submission (just closes the modal, doesn't save data as per requirements)
    skillForm.addEventListener('submit', function (e) {
        e.preventDefault();
        closeModal();
    });

    const container = document.querySelector('.testimonial-container');
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let interval;

    // Show testimonial by scrolling the container
    function showTestimonial(index) {
    const cardWidth = testimonials[0].offsetWidth + 20; // +gap
    const scrollAmount = cardWidth * index;

    container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });

    // Set active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');

    currentIndex = index;
}

    //Move to previous testimonial
    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    }

    // Event listeners for buttons
    document.getElementById('prevBtn').addEventListener('click', () => {
        prevTestimonial();
        resetInterval();
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        nextTestimonial();
        resetInterval();
    });

    // Add click event to dots
    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'));
            showTestimonial(index);
            resetInterval(); // Reset auto-rotation when manually changing
        });
    });

    // Function to move to next testimonial
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    // Function to reset the interval
    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextTestimonial, 2500);
    }

    // Start auto-rotation
    resetInterval();

    // Mobile menu functionality (if needed)
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', function () {

        });
    }
    // Get the toggle button and the menu
    const toggleBtn = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Add event listener to toggle the menu visibility
    toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Toggle the 'active' class
    });

});