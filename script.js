const nav = document.querySelector('.navList');
nav.addEventListener('click', (event) => {
  nav.querySelectorAll('.navLink').forEach(i => i.classList.remove('active'));
  event.target.classList.add('active');
})