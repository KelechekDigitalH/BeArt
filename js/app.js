/***Burger***/

document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger', '.nav__list').classList.toggle('active');
    document.querySelector('.nav__list').classList.toggle('open');
    document.querySelector('body').classList.toggle('menu-opened');
});


/**Hide header by scroll */
let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');
// const mediaQuery = window.matchMedia('(min-width: 768px)');

window.addEventListener('scroll', () => {
  if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    header.classList.add('hide');
  }
  else if(scrollPosition() < lastScroll && containHide()){
    header.classList.remove('hide');
  }
  

  lastScroll = scrollPosition();
})





/***Title animation */
const ourCommitment = new Vivus(
  'line-commitment',
  {
    type: 'sync',
    duration: 150,
    start: 'inViewport',
  },
);
ourCommitment.reset().play();

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
  slidesPerView: '4',
  spaceBetween: 100,
  centeredSlides: true,
  grabcursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    425: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    478: {
      slidesPerView: 2,
      spaceBetween: 120
    },
    672: {
      slidesPerView: 2,
      spaceBetween: 100
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 70
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 70
    },
    885: {
      slidesPerView: 4,
      spaceBetween: 100
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 100
    },

  
  }
});


// Card animation
const cardArtist = document.querySelector('.image-artists');
cardArtist.addEventListener('mousemove', startRotateArtist);
cardArtist.addEventListener('mouseout', stopRotateArtist);

function startRotateArtist(e) {
  const cardImgArtist = this.querySelector('.community__img');
  const halfHeightArtist = cardImgArtist.offsetHeight / 2;
  const halfWidthArtist = cardImgArtist.offsetWidth / 2;

  cardImgArtist.style.transform = 'rotateX('+-(e.offsetY - halfHeightArtist)/20+'deg) rotateY('+ (e.offsetX - halfWidthArtist)/20 +'deg)';
}

function stopRotateArtist() {
  const cardImgArtist = this.querySelector('.community__img');
  cardImgArtist.style.transform = 'rotate(0)';
}


const cardGallery = document.querySelector('.image-gallery');
cardGallery.addEventListener('mousemove', startRotateGallery);
cardGallery.addEventListener('mouseout', stopRotateGallery);

function startRotateGallery(e) {
  const cardImgGallery = this.querySelector('.gallery-img');
  const halfHeightGallery = cardImgGallery.offsetHeight / 2;
  const halfWidthGallery = cardImgGallery.offsetWidth / 2;

  cardImgGallery.style.transform = 'rotateX('+-(e.offsetY - halfHeightGallery)/20+'deg) rotateY('+ (e.offsetX - halfWidthGallery)/20 +'deg)';
}

function stopRotateGallery() {
  const cardImgGallery = this.querySelector('.gallery-img');
  cardImgGallery.style.transform = 'rotate(0)';
}


// Topscreen Video
const topscreen = document.querySelector('.topscreen');
const topscreenWrapper = document.querySelector('.topscreen__wrapper');
const topscreenTitle = document.querySelector('.topscreen__title');
const videoPlayBtn = document.querySelector('.video-btn');
const videoBtnBlock = document.querySelector('.video-btn-block');
const strokeTextBlocks = document.querySelectorAll('.stroke-text-block');
const video = document.querySelector('.video');
const closeBtn = document.querySelector('.close-btn');
const strokeTextLeft = document.querySelector('#stroke-left');
const strokeTextRight = document.querySelector('#stroke-right');

videoPlayBtn.addEventListener('click', togglePlay);
closeBtn.addEventListener('click', closeVideoScreen);

function togglePlay() {

  strokeTextBlocks.forEach(el => {
    el.classList.add('active');
  });

  topscreen.classList.add('active');
  topscreenTitle.classList.add('unvisible');
  topscreenWrapper.classList.add('active');
  closeBtn.classList.add('active');
  strokeTextLeft.classList.add('animate');
  strokeTextRight.classList.add('animate');
  videoBtnBlock.classList.add('hidden');

  if (video.paused || video.ended) {
    setTimeout(function() {video.play()}, 1500);
    video.classList.add('active');
    video.volume=0.3;
  } else {
    video.pause();
    video.classList.remove('active');
  }
}

function closeVideoScreen() {
  video.classList.remove('active');
  strokeTextBlocks.forEach(el => {
    el.classList.remove('active');
  });
  videoBtnBlock.classList.remove('hidden');
  closeBtn.classList.remove('active');
  topscreen.classList.remove('active');
  topscreenTitle.classList.remove('unvisible');
  topscreenWrapper.classList.remove('active');
  video.pause();
}
