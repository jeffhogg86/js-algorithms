const countingValleys = (steps: number, path: string): number => {
  // Write your code here
  let valleys = 0;
  let level = 0;

  path.split('').forEach(char => {
    if (char === 'D') {
      level--;
    } else {
      level++;
      if (level === 0) {
        valleys++;
      }
    }
  });

  return valleys;
};

// Complete the jumpingOnClouds function below.
const jumpingOnClouds = c => {
  let jumps = 0;
  let pos = 0;

  while (pos < c.length - 1) {
    if (c[pos + 2] === 0) {
      pos = pos + 2;
      jumps++;
    } else if (c[pos + 1] === 0) {
      pos = pos + 1;
      jumps++;
    }
  }

  return jumps;
};

const repeatedString = (s, n) => {
  let count = 0;

  if (n >= s.length) {
    let target = [...s].filter(e => e === 'a').length;

    count = Math.floor(n / s.length) * target;
  }

  let tailLength = n % s.length;
  let tailAs = [...s].slice(0, tailLength).filter(e => e === 'a').length;
  count += tailAs;

  return count;
};

const alternating = str => {
  let result = [];
  // split into Array
  str.split('').forEach((char, i) => {
    // check if duplicate
    if (char === str[i + 1]) {
      result.push(char);
    }
  });

  // return result length
  return result.length;
};

const rotLeft = (a, d) => {
  return a.concat(a.splice(0, d));
};

//

const makingAnagrams = (a, b) => {
  a.split('').forEach(char => {
    if (b.includes(char)) {
      a = a.replace(char, '');
      b = b.replace(char, '');
    }
  });

  return a.length + b.length;
};

console.log(makingAnagrams('zoozoo', 'zoo'));
