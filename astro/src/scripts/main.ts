// Nav scroll state
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 8);
  });
}

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Feature card spotlight
document.querySelectorAll<HTMLElement>('.feature-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  });
});

// Screenshots tabs
const tabs = document.querySelectorAll<HTMLButtonElement>('.shot-tab');
const shots = document.querySelectorAll<HTMLElement>('.shot');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const id = tab.dataset.shot;
    tabs.forEach((t) => t.classList.toggle('active', t === tab));
    shots.forEach((s) => s.classList.toggle('active', s.dataset.shot === id));
  });
});

// Auto-cycle screenshots until user interacts
let autoIdx = 0;
let userInteracted = false;
tabs.forEach((t) => t.addEventListener('click', () => (userInteracted = true)));
setInterval(() => {
  if (userInteracted) return;
  autoIdx = (autoIdx + 1) % tabs.length;
  tabs[autoIdx]?.click();
  userInteracted = false;
}, 4000);

// Copy button
const copyBtn = document.getElementById('copyBtn');
const codeBlock = document.getElementById('codeBlock');
if (copyBtn && codeBlock) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('git clone https://github.com/Code-Jonny/CS2-Tools-By-Jonny.git');
      codeBlock.classList.add('copied');
      setTimeout(() => codeBlock.classList.remove('copied'), 1600);
    } catch (e) {
      /* noop */
    }
  });
}
