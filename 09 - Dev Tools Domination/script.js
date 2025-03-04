'use strict';

const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

const makeGreen = () => {
  const p = document.querySelector('p');
  p.style.color = '#bada55';
  p.style.fontSize = '50px';
};

// Regular
console.log('Hello!');

// Interpolated
console.log('Hello, I am a %s', '💩');

// Styled
console.log('%cStyled log', 'background-color: purple; font-size: 16px');

// warning!
console.warn('Warning!');

// Error :|
console.error('Shit!');

// Info
console.info('The human nose can detect over 1 trillion smells.');

// Testing
console.assert(1 === 2, 'This is wrong!');

// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');

console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(dog.name);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
  console.groupEnd(dog.name);
});

// counting
console.count('Good Morning!');
console.count('Good Morning!');
console.count('Good Evening!');
console.count('Good Morning!');
console.count('Good Morning!');

// timing
console.time('Fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('Fetching data');
    // console.log(data);
  });
