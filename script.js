// implement navigation decoration

const nav = document.querySelector('.navList');
nav.addEventListener('click', (event) => {
  nav.querySelectorAll('.navLink').forEach(i => i.classList.remove('active'));
  event.target.classList.add('active');
})

// add black display to vertical phone

const verticalPhone = document.querySelector('.verticalPhone');
const blackDisplayVertical = document.querySelector('.blackDisplayVertical');
verticalPhone.addEventListener('click', () => {
  if (blackDisplayVertical.style.display === 'none') {
    blackDisplayVertical.style.display = 'block';
  } else {
    blackDisplayVertical.style.display = 'none';
  }
})

blackDisplayVertical.addEventListener('click', () => {
  blackDisplayVertical.style.display = 'none';
})

// add black display to horizontal phone

const horizontalPhone = document.querySelector('.horizontalPhone');
const blackDisplayHorizontal= document.querySelector('.blackDisplayHorizontal');
horizontalPhone.addEventListener('click', () => {
  if (blackDisplayHorizontal.style.display === 'none') {
    blackDisplayHorizontal.style.display = 'block';
  } else {
    blackDisplayHorizontal.style.display = 'none';
  }
})

blackDisplayHorizontal.addEventListener('click', () => {
  blackDisplayHorizontal.style.display = 'none';
})

// tab switching

const tabs = document.querySelector('.tabs');
const pictures = document.querySelector('.picturesContainer');
tabs.addEventListener('click', (event) => {
  tabs.querySelectorAll('.listItem').forEach(i => i.classList.remove('active'));
  event.target.classList.add('active');
  shuffle(pictures);
})

function shuffle(container) {
  [...container.children].sort(() => Math.random() > 0.5 ? 1 : -1).forEach(f => container.appendChild(f));
}


// picture border 

pictures.addEventListener('click', (event) => {
  pictures.querySelectorAll('.picture').forEach(i => i.classList.remove('active'));
  event.target.classList.add('active');
})

// submitting form

const form = document.querySelector('.form');
const themeInput = document.querySelector('.subject');
const describeInput = document.querySelector('.describe');
const innerText = document.querySelector('.innerText');
const modalWindow = document.querySelector('.modalWindow');
const wrapper = document.querySelector('.wrapper');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  modalWindow.classList.remove('inactive');
  
  let theme;
  if (themeInput.value) {
    theme = themeInput.value;
  } else {
    theme = 'Без темы';
  }
  
  let description;
  if (describeInput.value) {
    description = describeInput.value;
  } else {
    description = 'Без описания'
  }

  innerText.innerHTML = `Письмо отправлено<br>Тема: ${theme}<br>Описание: ${description}`;
})

const modalSubmit = document.querySelector('.modalSubmit');
modalSubmit.addEventListener('click', () => {
  [...form.children].forEach(item => item.value = '');
  modalWindow.classList.add('inactive');
})