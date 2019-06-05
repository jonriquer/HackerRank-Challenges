const stepsTaken = "DDUUDDUDUUUD"
const totalSteps = 12;

function countingValleys(n,s) {
  let position = 0; 
  let inValley = false; 
  let counter = 0;
  
  let sArr = s.split("", n);
  if (
    n >= 2 &&
    n <= 100 &&
    n === sArr.length
  ) {
    sArr.forEach(function(step) {
      if(step === 'U') {
        position++;
      }
      if (step === 'D') {
        position--; 
      }
      if (position < 0) {
        inValley = true;
      }
      if (inValley === true && position ===0) {
        inValley = false; 
        counter++;
      }
    });
    
  }
  return console.log(counter)
}

countingValleys(totalSteps,stepsTaken);