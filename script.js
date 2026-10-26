(() => {
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeToggle');
  const themeIcon = themeBtn.querySelector('.theme-icon');
  const themeCopy = themeBtn.querySelector('.theme-copy');
  const menuBtn = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileNav');
  const storageKey = 'rony-portfolio-theme';
  const preferred = (() => { try { return localStorage.getItem(storageKey); } catch { return null; } })();
  function setTheme(theme) {
    root.dataset.theme = theme;
    themeBtn.setAttribute('aria-pressed', String(theme === 'dark'));
    themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    themeIcon.textContent = theme === 'dark' ? '☾' : '☀';
    themeCopy.textContent = theme === 'dark' ? 'Night mode' : 'Day mode';
    document.querySelector('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#171b20' : '#f4eddd');
  }
  setTheme(preferred === 'light' || preferred === 'dark' ? preferred : 'dark');
  themeBtn.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem(storageKey, next); } catch {}
  });
  function closeMenu() { menu.hidden = true; menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.setAttribute('aria-label', 'Open navigation'); }
  menuBtn.addEventListener('click', () => {
    const opening = menu.hidden;
    menu.hidden = !opening;
    menuBtn.setAttribute('aria-expanded', String(opening));
    menuBtn.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  document.getElementById('year').textContent = String(new Date().getFullYear());
  // Motion enhancement only. Content stays readable if GSAP/CDN is unavailable.
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced && window.gsap) {
    gsap.from('.hero-content > *', { y: 24, opacity: 0, duration: .8, stagger: .11, ease: 'power2.out', clearProps: 'all' });
    gsap.from('.hero-art', { y: 20, opacity: 0, rotate: -3, duration: 1.1, delay: .2, ease: 'power2.out', clearProps: 'all' });
    if (window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray('.section-heading, .about-grid, .project-card, .timeline-item, .skill-group, .education-band, .contact-card').forEach(el => {
        gsap.from(el, { y: 22, opacity: 0, duration: .72, ease: 'power2.out', clearProps: 'all', scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
      });
    }
  }
})();

// Progressive enhancements: expandable work, icons and pause-on-hover portrait.
(() => {
  if (window.lucide) window.lucide.createIcons();
  const more = document.getElementById('showMoreProjects');
  const extra = [...document.querySelectorAll('.extra-project')];
  if (more) more.addEventListener('click', () => {
    const expanding = more.getAttribute('aria-expanded') !== 'true';
    extra.forEach(card => { card.hidden = !expanding; });
    more.setAttribute('aria-expanded', String(expanding));
    more.innerHTML = expanding ? 'Show less <i data-lucide="minus-circle" aria-hidden="true"></i>' : 'Show more <i data-lucide="plus-circle" aria-hidden="true"></i>';
    if (window.lucide) window.lucide.createIcons();
  });
  const portrait = document.getElementById('animatedPortrait');
  const motion = document.querySelector('.portrait-motion');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!portrait || !motion || reduce) return;
  if (window.gsap) {
    motion.classList.add('gsap-floating');
    const float = gsap.to(motion, {y:-14, rotation:1.3, duration:2.6, repeat:-1, yoyo:true, ease:'sine.inOut'});
    const pause = () => float.pause();
    const resume = () => float.resume();
    portrait.addEventListener('mouseenter',pause); portrait.addEventListener('mouseleave',resume);
    portrait.addEventListener('focusin',pause); portrait.addEventListener('focusout',resume);
  } else {
    motion.classList.add('css-floating');
  }
})();
