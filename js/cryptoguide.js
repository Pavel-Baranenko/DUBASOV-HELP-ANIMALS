const headerLinks = document.querySelector('.header__links')
let currentScroll = 0
let isMobile = window.innerWidth < 1080

window.addEventListener('scroll', () => {
  if (!isMobile) {
    if (window.scrollY < currentScroll) {
      headerLinks.classList.add('fix')
    } else {
      headerLinks.classList.remove('fix')
    }
    currentScroll = window.scrollY
  } else {
    if (window.scrollY > 100) {
      headerLinks.classList.add('fix')
    } else {
      headerLinks.classList.remove('fix')
    }
  }
})

let links = document.querySelectorAll('.header-line-link')
links.forEach(e => {
  e.addEventListener('click', () => {
    let last = document.querySelector('.header-line-link.active')
    if (last) last.classList.remove('active')
    e.classList.add('active')
  })
})

function observeElements(selector) {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let last = document.querySelector('.header-line-link.active')
        if (last) last.classList.remove('active')
        const link = document.querySelector('[data-link="' + entry.target.id + '"]');
        link.classList.add('active')
        if (isMobile && window.scrollY > 1000) {
          link.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
      }
    });
  }, {
    threshold: 0.5
  });

  elements.forEach(element => {
    observer.observe(element);
  });
}

observeElements('.section-item');

