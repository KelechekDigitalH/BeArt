/***Burger***/

document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger', '.nav__list').classList.toggle('active');
    document.querySelector('.nav__list').classList.toggle('open');
    document.querySelector('body').classList.toggle('menu-opened');
})


/**Hide header by scroll */
let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');
const navList = document.querySelector('.nav__list');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
  if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    header.classList.add('hide');
    navList.classList.add('hide');
  }
  else if(scrollPosition() < lastScroll && containHide()){
    header.classList.remove('hide');
    navList.classList.remove('hide');
  }

  lastScroll = scrollPosition();
})



/***Title animation */
const ourCommitment = new Vivus(
  'line-commitment',
  {
    type: 'sync',
    duration: 150,
  },
);

const ourCommunity = new Vivus(
  'line-community',
  {
    type: 'sync',
    duration: 150,
  },
);

const roadmap = new Vivus(
  'line-roadmap',
  {
    type: 'sync',
    duration: 150,
  },
);

const ourTeam = new Vivus(
  'line-our-team',
  {
    type: 'sync',
    duration: 150,
  },
);

const ourPartners = new Vivus(
  'line-our-partners',
  {
    type: 'sync',
    duration: 150,
  },
);

const footer = new Vivus(
  'line-footer',
  {
    type: 'sync',
    duration: 150,
  },
);

AOS.init({
  // Global settings:
   disable: false,
   startEvent: 'DOMContentLoaded',
   initClassName: 'aos-init',
   animatedClassName: 'aos-animate',
   useClassNames: false,
   disableMutationObserver: false,
   debounceDelay: 50,
   throttleDelay: 99,
 
   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   offset: 120,
   delay: 0, 
   duration: 400,
   easing: 'ease',
   once: false,
   mirror: false,
   anchorPlacement: 'top-bottom',
});


/***Marquee animation ***/
function animateMarquee(el, duration) {
  const strokeEl = el.querySelector('.stroke-text');
  const innerWidth = strokeEl.offsetWidth;
  const cloneEl = strokeEl.cloneNode(true);
  el.appendChild(cloneEl);

  let start = performance.now();
  let progress;
  let translateX;

  requestAnimationFrame(function step(now) {
    progress = (now - start) / duration;
 
    if (progress > 1) {
    	progress %= 1;
      start = now;
    }

    translateX = innerWidth * progress;
    
    strokeEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
    cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
    requestAnimationFrame(step);
  });
}
const marquee = document.querySelector('#marquee-text');
animateMarquee(marquee, 18000);


// Carousel-swiper

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 15,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
   
});



