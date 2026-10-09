(() => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const mobileNav = document.querySelector('.mobile-nav');
  if (!(mobileNav instanceof HTMLDetailsElement)) return;

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.open = false;
    });
  });
})();
