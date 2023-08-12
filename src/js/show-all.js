let img = document.querySelector('.btn__open-img');
let brands = document.querySelector('.brands__swiper');
let btn = document.querySelector('.btn__open');

btn.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (brands.classList.contains('over')) {

    brands.classList.remove('over');
    document.querySelector('.text').textContent = "Показать все";
    img.classList.remove('arrows_rotate');
    img.classList.add('arrows_revers');

  } else {

    brands.classList.add('over');
    document.querySelector('.text').textContent = "Скрыть";
    img.classList.add('arrows_rotate');
    img.classList.remove('arrows_revers');
  }
})

let img2 = document.querySelectorAll('.btn__open-img')[1];
let repair = document.querySelector('.repair-types__swiper');
let btn2 = document.querySelectorAll('.btn__open')[1];

btn2.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (repair.classList.contains('over')) {

    repair.classList.remove('over');
    document.querySelectorAll('.text')[1].textContent = "Показать все";
    img2.classList.remove('arrows_rotate');
    img2.classList.add('arrows_revers');

  } else {

    repair.classList.add('over');
    document.querySelectorAll('.text')[1].textContent = "Скрыть";
    img2.classList.add('arrows_rotate');
    img2.classList.remove('arrows_revers');
  }
})
