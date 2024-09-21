const arr = [9, 8, 0, 'number', null, 1, 7, 18, 21]


function outputNumbers () {
  const evenNumbers = arr.filter(elem => elem % 2 === 0 && typeof elem == 'number' && elem !== 0 );
  const oddNumbers = arr.filter(elem => elem % 2 !== 0 && typeof elem == 'number');
  const nullNumber = arr.filter(elem => elem === 0 && typeof elem == 'number');

  console.log( evenNumbers.length,  oddNumbers.length, nullNumber.length );
  console.log(nullNumber);
}
outputNumbers ()

