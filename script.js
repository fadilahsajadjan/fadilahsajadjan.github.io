const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    }
  });
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.section-kicker, .section-grid, .section-heading, .experience-item, .work-card, .video-showcase, .design-work, .credential-grid, .contact-inner');
if (!reduceMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('js-motion');
  revealItems.forEach((item, index) => {
    item.dataset.reveal = item.matches('.section-grid, .contact-inner') ? 'left' : 'up';
    if (item.matches('.experience-item, .work-card')) item.style.transitionDelay = `${Math.min(index % 3, 2) * 65}ms`;
  });
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
  revealItems.forEach((item) => observer.observe(item));
}

let ticking = false;
window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const range = document.documentElement.scrollHeight - window.innerHeight;
    const value = range > 0 ? window.scrollY / range * 100 : 0;
    document.documentElement.style.setProperty('--scroll-progress', `${value}%`);
    ticking = false;
  });
}, { passive: true });

const portfolioVideo = document.querySelector('#portfolio-video');
const videoFrame = document.querySelector('.video-frame');
if (portfolioVideo && videoFrame) {
  portfolioVideo.addEventListener('loadeddata', () => videoFrame.classList.add('has-video'), { once: true });
  portfolioVideo.addEventListener('error', () => {
    const status = videoFrame.querySelector('.video-placeholder small');
    if (status) status.textContent = 'Video could not be loaded';
  }, { once: true });
}

