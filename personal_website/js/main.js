document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href')
    if(href.length>1){
      e.preventDefault()
      document.querySelector(href).scrollIntoView({behavior:'smooth'})
    }
  })
})

document.getElementById('year').textContent = new Date().getFullYear()

const themeBtn = document.getElementById('themeToggle')
themeBtn.addEventListener('click', ()=>{
  const isDark = document.documentElement.hasAttribute('data-theme')
  if(isDark){
    document.documentElement.removeAttribute('data-theme')
    themeBtn.textContent = '🌙'
  } else {
    document.documentElement.setAttribute('data-theme','dark')
    themeBtn.textContent = '☀️'
  }
})

const contactForm = document.getElementById('contactForm')
if(contactForm){
  contactForm.addEventListener('submit', (e)=>{
  })
}

const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});
