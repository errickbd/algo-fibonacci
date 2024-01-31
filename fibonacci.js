function fibonacci(num) {
  let numOne = 0
  let numTwo = 1
  let countIndex = 2
  let nextNum = 0
  
  while (countIndex <= num){
    if (num === 0){
      return 0
    }
    else if (num === 1){
      return 1
    }

    nextNum = numOne + numTwo;
    numOne = numTwo;
    numTwo = nextNum;
    
    countIndex++

  }
  
  return nextNum;
  
}

console.log(fibonacci(1))


module.exports = fibonacci;
