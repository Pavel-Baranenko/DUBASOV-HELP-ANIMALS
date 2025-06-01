
const header = document.querySelector('.header')
let lastScroll = 0
let moveScroll = false
window.addEventListener('scroll', () => {
  if (window.scrollY < lastScroll) {
    moveScroll = true
    setTimeout(() => {
      if (moveScroll) {
        header.classList.add('fix')
      }
    }, 500);

  } else {
    moveScroll = false
    header.classList.remove('fix')
  }
  lastScroll = window.scrollY
})


function observeElements(selector) {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.5
  });

  elements.forEach(element => {
    observer.observe(element);
  });
}

observeElements('.animate-item');


const btn = document.querySelector('.navbar-menu')
const closeBtn = document.querySelector('.header-menu-close')
const links = document.querySelectorAll('.header__link')
const headerMenu = document.querySelector('.header-menu-wrap')

btn.addEventListener('click', () => {
  headerMenu.classList.add('open-menu')
})
links.forEach(e => {
  e.addEventListener('click', () => {
    headerMenu.classList.remove('open-menu')
  })
})
closeBtn.addEventListener('click', () => {
  headerMenu.classList.remove('open-menu')
})

