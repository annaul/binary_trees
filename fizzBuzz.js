'use strict';

var print = '';

for (var i=1; i<1000; i++) {
  if (i%3 === 0) print += 'fizz';
  if (i%5 === 0) print += 'buzz';
  print += ' ';
}

// console.log(print);


console.log(Array.apply(null, Array(1000)).map((_, i) => (((i%3)?'':'fizz')+((i%5) ?'':'buzz'))).join(' '));



console.log([...Array(1000)].map((x, i)=>i).map((_,i)=>(((i%3)?'':'fizz')+((i%5) ?'':'buzz'))).join(' '));
