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
const modalContainer = document.querySelector('.modalContainer');
const wrapper = document.querySelector('.wrapper');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  modalContainer.classList.remove('inactive');
  
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
  modalContainer.classList.add('inactive');
})

// slider

const prevButton = document.querySelector('.left');
const nextButton = document.querySelector('.right');
const slider = document.querySelector('.photoBlock');
let items = document.querySelectorAll('.photoBlock .slider');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

function changeColor() {
  if (document.querySelector('.firstSlide').classList.contains('active')) {
    slider.style.backgroundColor = '#648BF0';
    slider.style.boxShadow = '0 6px 0 0 rgb(87, 123, 214)';
  } else {
    slider.style.backgroundColor = '#f06c64';
    slider.style.boxShadow = '0 6px 0 0 #ea676b';
  }
}

prevButton.addEventListener('click', function() {
	if (isEnabled) {
    changeColor();
    previousItem(currentItem);
  }
});

nextButton.addEventListener('click', function() {
	if (isEnabled) {
    changeColor();
    nextItem(currentItem);
	}
});

// black displays to slide2

const verticalFirst = document.querySelector('.verticalFirst');
const verticalSecond = document.querySelector('.verticalSecond');
const verticalThird = document.querySelector('.verticalThird');

const blackDisplayFirst = document.querySelector('.blackDisplayFirst');
const blackDisplaySecond = document.querySelector('.blackDisplaySecond');
const blackDisplayThird = document.querySelector('.blackDisplayThird');

// first
verticalFirst.addEventListener('click', () => {
  if (blackDisplayFirst.style.display === 'none') {
    blackDisplayFirst.style.display = 'block';
  } else {
    blackDisplayFirst.style.display = 'none';
  }
})

blackDisplayFirst.addEventListener('click', () => {
  blackDisplayFirst.style.display = 'none';
})

//second
verticalSecond.addEventListener('click', () => {
  if (blackDisplaySecond.style.display === 'none') {
    blackDisplaySecond.style.display = 'block';
  } else {
    blackDisplaySecond.style.display = 'none';
  }
})

blackDisplaySecond.addEventListener('click', () => {
  blackDisplaySecond.style.display = 'none';
})

//third
verticalThird.addEventListener('click', () => {
  if (blackDisplayThird.style.display === 'none') {
    blackDisplayThird.style.display = 'block';
  } else {
    blackDisplayThird.style.display = 'none';
  }
})

blackDisplayThird.addEventListener('click', () => {
  blackDisplayThird.style.display = 'none';
})

// scrolling

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}