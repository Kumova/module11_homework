

function outputNumbers(a, b) {
  let current = a;

  let timerId = setInterval(function() {
    console.log(current);
    if (current == b) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

outputNumbers(9, 13);


