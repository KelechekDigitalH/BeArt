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