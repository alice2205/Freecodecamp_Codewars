// 1
multiply = function (a, b) {
    return a * b;
}

// 2 Complete the solution so that it reverses the string passed into it.
function solution(str){
return str.split('').reverse().join('')
}

// 3 Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.
function getChar(c){
    return String.fromCharCode(c);
}
// 4 return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){

}

function twoOldestAges(arr){
let res = arr.sort((a, b) => a-b);
res = [arr[arr.length-2], arr[ arr.length-1]];
  return res
}

// 5
function makeUpperCase(str) {
  return str.toUpperCase()// Code here
}

// 6 return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){

}

function twoOldestAges(arr){
let res = arr.sort((a, b) => a-b);
res = [arr[arr.length-2], arr[ arr.length-1]];
  return res
}