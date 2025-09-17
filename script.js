// script.js

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 70, // navbar height offset
            behavior: 'smooth'
        });
    }
}

// Pricing toggle monthly/annual
const pricingToggle = document.getElementById('pricingToggle');
const monthlyPrice = document.getElementById('monthlyPrice');
const pricePeriod = document.getElementById('pricePeriod');
const annualNote = document.getElementById('annualNote');

pricingToggle.addEventListener('change', () => {
    if (pricingToggle.checked) {
        // Annual
        monthlyPrice.textContent = '1,600';
        pricePeriod.textContent = '/year';
        annualNote.style.display = 'block';
    } else {
        // Monthly
        monthlyPrice.textContent = '200';
        pricePeriod.textContent = '/month';
        annualNote.style.display = 'none';
    }
});

// WhatsApp button for pricing CTA
function openWhatsAppBooking() {
    const whatsappNumber = '447123456789';
    const message = encodeURIComponent("Hi, I'd like to start a free trial of Handalink call handling services");
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
}

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Add smooth animation for floating cards
const floatingCards = document.querySelectorAll('.floating-cards .card');
floatingCards.forEach((card, index) => {
    card.style.animationDelay = `${index}s`;
});

// Pulse animation for phone icon
const phoneIcon = document.querySelector('.phone-mockup i');
phoneIcon.style.animation = 'pulse 2s infinite';

// Contact form submission (basic front-end validation)
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        restaurantName: contactForm[0].value.trim(),
        yourName: contactForm[1].value.trim(),
        email: contactForm[2].value.trim(),
        phone: contactForm[3].value.trim(),
        type: contactForm[4].value,
        message: contactForm[5].value.trim()
    };

    // Simple validation
    if (!formData.restaurantName || !formData.yourName || !formData.email || !formData.phone || !formData.type || !formData.message) {
        alert("Please fill all required fields.");
        return;
    }

    // Optionally, you can send the form data to a backend using fetch
    // For now, just alert success
    alert(`Thank you ${formData.yourName}, we will contact you shortly!`);

    // Reset form
    contactForm.reset();
});