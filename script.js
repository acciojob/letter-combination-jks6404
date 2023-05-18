function letterCombinations(digits) {
  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  
  const result = [];
  
  if (digits.length === 0) {
    return result;
  }
  
  const backtrack = (combination, nextDigits) => {
    if (nextDigits.length === 0) {
      result.push(combination);
    } else {
      const letters = map[nextDigits[0]];
      for (let i = 0; i < letters.length; i++) {
        backtrack(combination + letters[i], nextDigits.slice(1));
      }
    }
  };
  
  backtrack('', digits);
  
  return result.sort();
}


module.exports = letterCombinations;