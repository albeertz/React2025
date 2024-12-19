const sumPairs = (numbers, result) => {
  for (let i = 0; i <= numbers.length; i++) {
    for (let j = i + 1; j <= numbers.length; j++) {
      if (numbers[i] + numbers[j] === result) {
        return [numbers[i], numbers[j]]
      }
    }
  }
  return null
}

console.log(sumPairs([1, 2, 3, 4, 5], 6)) // [1,5], [2,4]
console.log(sumPairs([1, 5, 3, 4, 5], 10))
console.log(sumPairs([1, 3, 6, 4, 6], 12))
