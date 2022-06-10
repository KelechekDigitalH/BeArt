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


// экинчи вариант

// var wrapper = document.querySelector('.marquee'),
//     marquee = document.querySelector('.stroke-text'),   
//     wrapperWidth = wrapper.offsetWidth,
//     marqueeWidth = marquee.scrollWidth;
    
// document.querySelector('button').onclick = function() {
//   clearInterval(interval)
// }
    
// function move() {
//   var currentTX = getComputedStyle(marquee).transform.split(',');
//   if( currentTX[4] === undefined ) {
//     currentTX = -1;
//   } else {
//     currentTX = parseFloat(currentTX[4]) - 1;
//   }
  
//   if(-currentTX >= marqueeWidth) {
//     marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';
  
//   } else {
//     marquee.style.transform = 'translateX(' + currentTX + 'px)';
//   }
// }

// var interval = setInterval(move, 10);



