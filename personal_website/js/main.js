document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// --- Set current year ---
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// --- Dark Mode Toggle ---
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

if (themeToggle) {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
  } else {
    html.removeAttribute('data-theme'); 
    themeToggle.textContent = '🌙';
  }

  // Handle toggle click
  themeToggle.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    if (isDark) {
      html.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = '🌙';
    } else {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = '☀️';
    }
  });
}

// --- Contact Form ---
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Form submitted!');
  });
}

