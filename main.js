const container = document.querySelector('.section-3 .container');
const body = document.querySelector('body');
const hamburger = document.querySelector('.header .hamburger');
const mobileNav = document.querySelector('.header .mobile-nav');
const closeBtn = document.querySelector('.header .closeBtn');
const mobileNavLinks = document.querySelector('.header .ul');
const seeMoreBtn = document.querySelector('.section-3 .more-container');

// Speakers Array
const speakers = [
  {
    index: 0,
    image: 'images/speakers/alanTuring.jpeg',
    name: 'Alan Turing',
    headline: 'father of computer science',
    p: 'Alan Turing was a British mathematician and logician. He played a crucial role in breaking the German Enigma code during World War II, which significantly impacted the outcome of the war.',
  },
  {
    index: 1,
    image: 'images/speakers/GraceHopper.jpg',
    name: 'Grace Hopper',
    headline: 'An American computer scientist and United States Navy rear admiral',
    p: 'Grace Hopper was a pioneer in programming languages and compiler development. She is credited with developing the first compiler for a programming language and played a significant role in the development of COBOL (Common Business-Oriented Language).',
  },
  {
    index: 2,
    image: 'images/speakers/Dennis_Ritchie.jpg',
    name: 'Dennis Ritchie',
    headline: 'Director of Art Centre Nabl and a board member of TMS Rwanda',
    p: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology. humanites, and the arts.',
  },
  {
    index: 3,
    image: 'images/speakers/JohnMcCarthy.jpeg',
    name: 'John McCarthy',
    headline: ' American computer scientist',
    p: 'John McCarthy, is known for coining the term *artificial intelligence* (AI) and pioneering research in the field. He made significant contributions to the development of the Lisp programming language, which became widely used in AI research.',
  },
  {
    index: 4,
    image: 'images/speakers/JohnvonNeumann.jpeg',
    name: 'John von Neumann',
    headline: 'Hungarian-American mathematician and computer scientist',
    p: 'John von Neumann, was instrumental in the design of early digital computers and made foundational contributions to the theory of algorithms and computer architecture.',
  },
  {
    index: 5,
    image: 'images/speakers/TimBerners-Lee.jpeg',
    name: 'Tim Berners-Lee',
    headline: 'British computer scientist',
    p: 'Tim Berners-Lee, is credited with inventing the World Wide Web (WWW) while working at CERN in the late 1980s. He developed the first web browser and web server, which revolutionized the way information is accessed and shared on the internet.',
  },
];

// Dynamically Generating Spekaers HTML
speakers.forEach((speaker) => {
  const innerContainer = document.createElement('div');
  innerContainer.classList.add('inner-container');

  const imgContainer = document.createElement('div');
  const chessBox = document.createElement('img');
  chessBox.classList.add('chess-box');
  chessBox.src = 'images/speakers/chess-box-pattern.jpg';
  chessBox.alt = 'image';
  const img = document.createElement('img');
  img.classList.add('image');
  img.src = speaker.image;
  img.alt = 'image';
  imgContainer.appendChild(chessBox);
  imgContainer.appendChild(img);

  const content = document.createElement('div');
  content.classList.add('content');
  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = speaker.name;
  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = speaker.headline;
  const grayLine = document.createElement('div');
  grayLine.classList.add('gray-line');
  const p = document.createElement('p');
  p.classList.add('p');
  p.textContent = speaker.p;
  content.appendChild(name);
  content.appendChild(headline);
  content.appendChild(grayLine);
  content.appendChild(p);

  innerContainer.appendChild(imgContainer);
  innerContainer.appendChild(content);
  container.appendChild(innerContainer);
});

// Mobile Menu Popup
hamburger.addEventListener('click', () => {
  mobileNav.style.display = 'flex';
  body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  mobileNav.style.display = 'none';
  body.style.overflow = 'visible';
});

mobileNavLinks.addEventListener('click', () => {
  mobileNav.style.display = 'none';
  body.style.overflow = 'visible';
});

// see more button manipulation
seeMoreBtn.addEventListener('click', () => {
  // set the css to be manipulated
  const childrenToDisplay = document.querySelectorAll(
    '.section-3 .inner-container:nth-child(n + 3)',
  );

  if (seeMoreBtn.innerHTML === 'MORE ▾') {
    seeMoreBtn.innerHTML = 'LESS ▴';
    childrenToDisplay.forEach((child) => {
      child.style.display = 'flex';
    });
  } else if (seeMoreBtn.innerHTML === 'LESS ▴') {
    seeMoreBtn.innerHTML = 'MORE ▾';
    childrenToDisplay.forEach((child) => {
      child.style.display = 'none';
    });
  }
});