var typed = new Typed('#typed', {
    strings: ['Володимир <span>Охлопков</span>', 'Я з Івано-<span>Франківська</span>', 'Володимир <span>Охлопков</span>'],
    showCursor: false,
    typeSpeed: 50,
    startDelay: 500,
    backSpeed: 50,
  });

// VARS
const orderOpen = document.getElementById('order'),
      modal = document.getElementById('modal'),
      orderClose = document.getElementById('close'),
      orderSend = document.getElementById('orderSend'),
      orderSendEn = document.getElementById('orderSendEn'),
      modalFormUa = document.querySelector('.modal__form'),
      modalFormEn = document.querySelector('.modal__formEn'),
      ua = document.getElementById('ua'),
      en = document.getElementById('en'),
      myName = document.getElementById('typed'),
      engName = document.getElementById('engName'),
      myWork = document.getElementById('mywork');

// MODAL
orderOpen.addEventListener('click', () => {
  modal.classList.add('active');
  orderSend.innerHTML = 'Залишити заявку';
  orderSendEn.innerHTML = 'Leave a request';
});

orderClose.addEventListener('click', () => {
  modal.classList.remove('active');
});

orderSend.addEventListener('click', function(){
  orderSend.innerHTML = 'Відправляється...'
  setTimeout(function(){
    modal.classList.remove('active');
  }, 2000);
  setTimeout(function(){
    alert('Ай молодець!');
  }, 2500);
});

orderSendEn.addEventListener('click', function(){
  orderSendEn.innerHTML = 'Sending...'
  setTimeout(function(){
    modal.classList.remove('active');
  }, 2000);
  setTimeout(function(){
    alert('Well Done');
  }, 2500);
});

// BURGER
const burger = document.getElementById('burger'),
      nav = document.getElementById('nav')

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});

// LANG
ua.addEventListener('click', (e) => {
  en.classList.remove('active');
  e.target.classList.add('active');
  myName.style.display = "block";
  engName.style.display = "none";
  orderSendEn.style.display = "none"
  orderSend.style.display = "block"
  modalFormUa.style.display = "flex"
  modalFormEn.style.display = "none"
  myWork.innerHTML = 'Я займаюсь створенням <span>веб-сайтів</span> та <span>дизайном'
});

en.addEventListener('click', (e) => {
  ua.classList.remove('active');
  e.target.classList.add('active');
  myName.style.display = "none";
  engName.style.display = "block";
  orderSendEn.style.display = "block"
  orderSend.style.display = "none"
  modalFormUa.style.display = "none"
  modalFormEn.style.display = "flex"
  myWork.innerHTML = 'I make <span>web-sites</span> and <span>web-design</span>';
});



