
let multiplicationNumber = (x, n) => { 
  if (Number.isInteger(x) && Number.isInteger(n) && x > 0 && n > 0) {
   const multiplication =  x ** n;
   console.log(multiplication);
  } else {
    console.log("Число/числа не натуральные")
  };
};
console.log(multiplicationNumber(2, 9));
console.log(multiplicationNumber(-2, 9));
console.log(multiplicationNumber(0, 9));
console.log(multiplicationNumber(1, 0.9));