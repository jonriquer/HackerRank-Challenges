let n = 5;
let arr = [
  [1,1,1,0,0],
  [1,1,1,1,0],
  [1,1,0,0,0],
  [1,1,1,0,0],
  [1,0,0,0,0]
];
let emptySpaces = 0;

function findEmptyRow(rows) {
  for(r=0; r < rows.length; r++) {
    for(s=0; s < rows[r].length; s++) {
      if(rows[r][s]===0) {
        emptySpaces++;
      }
    }
    
  }
}

findEmptyRow(arr); 
console.log(emptySpaces);

// function carParking(n, available) {
//   const min = 1;
//   const max = 100; 

//   if( 
//     n >= min &&
//     n <= max &&
//     arr.length === n  
//   ) {

//   }
// }
