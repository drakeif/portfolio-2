var typed = new Typed('#typed', {
    strings: ['Володимир <span>Олегович</span>', 'Я з Івано-<span>Франківська</span>', 'Володимир <span>Олегович</span>'],
    showCursor: false,
    typeSpeed: 50,
    startDelay: 500,
    backSpeed: 50,
  });

// MODAL
const orderOpen = document.getElementById('order'),
      modal = document.getElementById('modal'),
      orderClose = document.getElementById('close'),
      orderSend = document.getElementById('orderSend');

orderOpen.addEventListener('click', () => {
  modal.classList.add('active');
  orderSend.innerHTML = 'Залишити заявку'
});
orderClose.addEventListener('click', () => {
  modal.classList.remove('active');
});

orderSend.addEventListener('click', function(){
  orderSend.innerHTML = 'Відправляється...'
  setTimeout(function(){
    modal.classList.remove('active');
  }, 2000);
});

// BURGER
const burger = document.getElementById('burger'),
      nav = document.getElementById('nav')

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});

// LANG
const ua = document.getElementById('ua'),
      en = document.getElementById('en');

ua.addEventListener('click', (e) => {
  en.classList.remove('active');
  e.target.classList.add('active');
});

en.addEventListener('click', (e) => {
  ua.classList.remove('active');
  e.target.classList.add('active');
});
