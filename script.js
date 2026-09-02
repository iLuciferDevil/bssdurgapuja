const track = (name, el) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, { link_text: (el?.textContent || '').trim() });
  }
  console.log('[BSS tracking]', name);
};

document.querySelectorAll('[data-track]').forEach(el => {
  el.addEventListener('click', () => track(el.getAttribute('data-track'), el));
});

const scheduleData = {
  shashthi: { title: 'Maha Shashthi', date: '16 October 2026' },
  saptami: { title: 'Maha Saptami', date: '17 October 2026' },
  ashtami: { title: 'Maha Ashtami', date: '18 October 2026' },
  navami: { title: 'Maha Navami', date: '19 October 2026' },
  dashami: { title: 'Vijayadashami', date: '20 October 2026' }
};

const modal = document.getElementById('scheduleModal');
const titleEl = document.getElementById('modalTitle');
const dateEl = document.getElementById('modalDate');

function openSchedule(key) {
  const day = scheduleData[key];
  if (!day) return;
  titleEl.textContent = day.title;
  dateEl.textContent = day.date;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  track('schedule_view', { textContent: day.title });
}
function closeSchedule() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
document.querySelectorAll('[data-day]').forEach(card => card.addEventListener('click', () => openSchedule(card.dataset.day)));
document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeSchedule));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSchedule(); });
