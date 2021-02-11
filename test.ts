const maxTwoConsecutive = S => {
  const result = S.split('').filter((char, i) => {
    if (S[i] === S[i + 1] && S[i] === S[i + 2]) {
      return false;
    } else {
      return true;
    }
  });

  return result.join('');
};

console.log(maxTwoConsecutive('xxxvxxxzzyyy'));

// const solution = S => {
//   let result = [];
//   S.split('').map((char, i) => {
//     if (S[i] === S[i + 1] && S[i] === S[i + 2]) {
//       result.push(char);
//     } else if (S[i] !== S[i + 1]) {
//       result.push(char);
//     }
//   });

//   return result.join('');
// };
