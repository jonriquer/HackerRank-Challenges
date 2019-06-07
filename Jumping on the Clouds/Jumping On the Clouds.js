// first && last [i] must be 0 
// n must be 2-100 

const n1 = 7;
const c1 = [0,0,1,0,0,1,0,0,1,0,0,0,0]; 
// Output 4

const n2 = 6;
const c2 = [0,0,0,0,1,0];
// Output 3

function jumpingOnClouds(c) {
    var i = 0;
    var jumps = 0;

    while (i < c.length - 1) {
        if (c[i + 2] == 0) {
            i+=2;
        } else {
            i++;
        }
        jumps++;
    }

    return(jumps);
    
}

// function jumpingOnClouds(c) {
//   let counter = -1; 

//   for(i = 0; i < c.length; i++) {
//     if ( c[i + 2] === 1 ) {
//       c[i]+=1
//       counter +=1
//       // console.log(c[i])
      
//     }
//     if ( c[i + 2] === 0 ) {
//       c[i]+=2;
//       counter+=1
//       // console.log(c[i]);
//     }
//     if (c[i + 1] === 1 ) {
//       c[i]+=2
//       counter+=1
//     }
    
//   }
//   console.log(counter);
// }



jumpingOnClouds(c1);