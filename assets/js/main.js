// Main JavaScript file for App Suite

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
            mobileMenuButton.classList.toggle('open');
        });
        
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.classList.remove('open');
            });
        });
    }
    
    // FAQ accordion functionality
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.classList.remove('rotate-180');
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.classList.add('rotate-180');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.pathname === window.location.pathname) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
