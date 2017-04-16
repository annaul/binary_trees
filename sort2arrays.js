'use strict';

var arr1 = [1, 3, 6, 7];
var arr2 = [2, 4, 5];
var arr3 = [];

function merge(arr1, arr2) {
  while(arr1 || arr2) {
    if ( arr1.length === 0 || arr2.length === 0) {arr3 = arr3.concat(arr1, arr2); break;}
    if (arr1[0] < arr2[0]) {arr3.push(arr1[0]); arr1.shift();}
    if (arr1[0] > arr2[0]) {arr3.push(arr2[0]); arr2.shift();}
  }
  return arr3;
}
merge(arr1,arr2);

console.log(arr3);
