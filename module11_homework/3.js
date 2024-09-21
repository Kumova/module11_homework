 
function ferstSum(a) { 
 
  return function secondSum(b) {
    return a+b;
  }
}

ferstSum(4)(10)



