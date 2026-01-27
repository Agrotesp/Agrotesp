/* ======================================================
   AGROTESP - JAVASCRIPT INSTITUCIONAL
====================================================== */

const navToggle = document.getElementById('navToggle');
const sideNav = document.getElementById('sideNav');
const overlay = document.getElementById('overlay');

/* MENU LATERAL */
navToggle.addEventListener('click', () => {
    sideNav.classList.add('active');
    overlay.classList.add('active');
});

overlay.addEventListener('click', () => {
    sideNav.classList.remove('active');
    overlay.classList.remove('active');
});

/* NAVEGAÇÃO ENTRE PÁGINAS */
const navLinks = document.querySelectorAll('[data-page]');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.dataset.page;

        pages.forEach(page => page.classList.remove('active'));
        document.getElementById(target).classList.add('active');

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        sideNav.classList.remove('active');
        overlay.classList.remove('active');

        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

/* FAQ ACCORDION */
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const icon = item.querySelector('.faq-icon');

        const isOpen = answer.style.display === 'block';

        document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
        document.querySelectorAll('.faq-icon').forEach(i => i.textContent = '+');

        if (!isOpen) {
            answer.style.display = 'block';
            icon.textContent = '−';
        }
    });
});
