const nav = document.querySelector('.nav');
const headerBtn = document.querySelector('.header__btn');
const navItem = document.querySelector('.nav__item');
const navItems = document.querySelectorAll('.nav__item');
const menuBtn = document.querySelectorAll('.menu__btn');
const card = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');
const modaClose = document.querySelector('.modal__close');
const modalBtnSize = document.querySelectorAll('.modal__btn-size');
const modalBtnAdds = document.querySelectorAll('.modal__btn-adds');


headerBtn.addEventListener('click', () => {
  nav.classList.toggle('nav__active');
  headerBtn.classList.toggle('header__btn-active');
  document.body.classList.toggle('body-fix');
})

navItems.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.toggle('nav__active');
    headerBtn.classList.toggle('header__btn-active');
    document.body.classList.toggle('body-fix');
  });
})

menuBtn.forEach(item => {

  item.addEventListener('click', ({target}) => {

    menuBtn.forEach(item => {
      if (target !== item.classList.contains('.menu__btn-active')) {
        item.classList.remove('menu__btn-active');
      }
    })
    target.classList.add('menu__btn-active');
  })
})

// modal

const modalFunc = () => {
  card.forEach(item => {

    item.addEventListener('click', () => {
      modal.classList.add('modal-active');
      document.body.classList.add('body-fix');
    })
  })
  
  modal.addEventListener('click', ({target}) => {
    if (target == modal || target == modaClose) {
      modal.classList.remove('modal-active');
      document.body.classList.remove('body-fix');
    }
  });
  
  modalBtnSize.forEach(item => {
  
    item.addEventListener('click', ({target}) => {
  
      modalBtnSize.forEach(item => {
        if (target !== item.classList.contains('.modal__btn-active')) {
          item.classList.remove('modal__btn-active');
        }
      })
  
      item.classList.add('modal__btn-active');
    })
  })
  
  modalBtnAdds.forEach(item => {
  
    item.addEventListener('click', () => {
      item.classList.toggle('modal__btn-active');
    })
  })
}

modalFunc();
menuList();





