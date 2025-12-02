const inputRanges = [
  [226779, 293422],
  [65855, 88510],
  [868, 1423],
  [248115026, 248337139],
  [903911, 926580],
  [97, 121],
  [67636417, 67796062],
  [24, 47],
  [6968, 10197],
  [193, 242],
  [3769, 5052],
  [5140337, 5233474],
  [2894097247, 2894150301],
  [979582, 1016336],
  [502, 646],
  [9132195, 9191022],
  [266, 378],
  [58, 91],
  [736828, 868857],
  [622792, 694076],
  [6767592127, 6767717303],
  [2920, 3656],
  [8811329, 8931031],
  [107384, 147042],
  [941220, 969217],
  [3, 17],
  [360063, 562672],
  [360063, 562672],
  [7979763615, 7979843972 ],
  [1890, 2660 ],
  [23170346, 23308802]
];


//expand number ranges
function processRangeStrings(ranges) {
  const result = [];
  for (const [start, end] of ranges) {
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
  }
  return result;
}


//find duplicate numbers
function findDuplicatesMap(arr) {
  const counts = {};
  const duplicates = [];

  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] === 2) {
      duplicates.push(num);
    }
  }
  return duplicates;
}

const numList = processRangeStrings(inputRanges);
const duplicates = findDuplicatesMap(numList);
const zeroes = startsWithZero(numList);

//find numbers starting with zero 
function startsWithZero(arr) {
  return arr.filter(num => num.toString().startsWith("0"));
}



//exclude duplicates and zeros from numList
const filtered = numList.filter(num => !duplicates.includes(num) && !zeroes.includes(num));

//add entire non-duplicate array
const day2aAnswer = filtered.reduce((acc, val) => acc + val, 0);



document.getElementById('day-2a-answer').textContent = day2aAnswer;

console.log("Original:", numList.length);
console.log("After filter:", filtered.length);