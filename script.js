/* =====================================================
   AGROTESP - INTERAÇÕES UX
===================================================== */

/* ---------- MENU LATERAL ---------- */
const navToggle = document.getElementById('navToggle');
const sideNav = document.getElementById('sideNav');
const overlay = document.getElementById('overlay');

navToggle.addEventListener('click', () => {
    sideNav.classList.add('active');
    overlay.classList.add('active');
});

overlay.addEventListener('click', () => {
    sideNav.classList.remove('active');
    overlay.classList.remove('active');
});

/* ---------- TROCA DE PÁGINAS ---------- */
const links = document.querySelectorAll('[data-page]');
const pages = document.querySelectorAll('.page');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.dataset.page;

        pages.forEach(p => p.classList.remove('active'));
        document.getElementById(target).classList.add('active');

        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        sideNav.classList.remove('active');
        overlay.classList.remove('active');

        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

/* ---------- FAQ ACCORDION ---------- */
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const icon = item.querySelector('.faq-icon');

        const open = answer.style.display === 'block';

        document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
        document.querySelectorAll('.faq-icon').forEach(i => i.textContent = '+');

        if (!open) {
            answer.style.display = 'block';
            icon.textContent = '−';
        }
    });
});
