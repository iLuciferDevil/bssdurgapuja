// Lightweight tracking hooks. When GA4 is connected, these can be wired to gtag().
document.querySelectorAll('[data-track]').forEach(el => {
  el.addEventListener('click', () => {
    const eventName = el.getAttribute('data-track');
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, { link_text: (el.textContent || '').trim() });
    }
    console.log('[BSS tracking]', eventName);
  });
});
