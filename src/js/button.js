const burgerBtn = document.querySelector('.menu__link');
const blur = document.querySelector('.blur');
const sideMenu = document.querySelector('.sidemenu');

burgerBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  sideMenu.classList.add('sidemenu--active');
  blur.classList.add('blur--active');

})


const burgerBtnClose = document.querySelector('.sidemenu-header__sidebar-icon');
burgerBtnClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  sideMenu.classList.remove('sidemenu--active');
  blur.classList.remove('blur--active');

})

blur.addEventListener('click', function (evt) {
  evt.preventDefault();
  sideMenu.classList.remove('sidemenu--active');
  blur.classList.remove('blur--active');
  modalCall.classList.remove('modal--active');
  modalFeedback.classList.remove('modal--active');
})

const callBtn = document.querySelector('.menu__call-icon');
const callBtn2 = document.querySelector('.contact-icons__call-icon');
const modal = document.querySelectorAll('.modal');
const modalCall = modal[1];
const closeBtn = document.querySelectorAll('.modal__close');
const callCloseBtn = closeBtn[1];
const feedbackCloseBtn = closeBtn[0];
const modalFeedback = modal[0];
const feedbackBtn = document.querySelector('.contact-icons__chat-icon');
const feedbackBtn2 = document.querySelector('.menu__chat-icon');



function feedbackModalActive(button){
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalFeedback.classList.add('modal--active');
    blur.classList.add('blur--active');
  })
}

function callModalActive(button){
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalCall.classList.add('modal--active');
    blur.classList.add('blur--active');
  })
}


callCloseBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (!(sideMenu.classList.contains('sidemenu--active'))) {
    blur.classList.remove('blur--active');
  }
  modalCall.classList.remove('modal--active');
})



feedbackCloseBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (!(sideMenu.classList.contains('sidemenu--active'))) {
    blur.classList.remove('blur--active');
  }
  modalFeedback.classList.remove('modal--active');
})






callModalActive(callBtn);
callModalActive(callBtn2);
feedbackModalActive(feedbackBtn);
feedbackModalActive(feedbackBtn2);
