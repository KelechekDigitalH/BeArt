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