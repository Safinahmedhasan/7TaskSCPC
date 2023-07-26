function romanToInteger(roman) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentNumeral = romanNumerals[roman[i]];
    const nextNumeral = romanNumerals[roman[i + 1]];

    if (nextNumeral > currentNumeral) {
      result += nextNumeral - currentNumeral;
      i++; // Skip the next numeral since it's already accounted for
    } else {
      result += currentNumeral;
    }
  }

  return result;
}

// Test cases
console.log(romanToInteger("IX"));
console.log(romanToInteger("XXI"));
console.log(romanToInteger("XL"));
console.log(romanToInteger("MCMXCIV"));
