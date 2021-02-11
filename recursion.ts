function power(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;

  return num * factorial(num - 1);
}

const productOfArray = (arr: number[]): number => {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
};

const recursiveRange = (num): number => {
  if (num === 0) return 0;

  return num + recursiveRange(num - 1);
};

// Fibanacci
const fib = n => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

// reverse a string
const reverse = (str: string): string => {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
};

// const capitalizeFirst = (arr: string[]): string[] => {
//   if (arr.length === 1) {
//     return [arr[0].toUpperCase()]
//   }

// };
