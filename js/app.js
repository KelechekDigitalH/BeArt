/***Burger***/

document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger', '.nav__list').classList.toggle('active');
    document.querySelector('.nav__list').classList.toggle('open');
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