var randomNum = Math.floor(Math.random() * 100) + 1;
var attempts = 5;
var low = 1;
var high  = 100;
console.log(randomNum);
process.stdin.on('data', (chunk) => { 
  let num1 = chunk.toString().trim();


  if (num1 ==='lower')
  {
    high = randomNum - 1;
    console.log(low + ', ' + high);
    console.log('You have '+attempts+' attempts remaining.');
  }

  else if (num1 ==='higher')
  {
    low=randomNum + 1;
    console.log(low + ', ' + high);
    console.log('You have '+attempts+' attempts remaining.');
  }

  else if ("correct!")
  {
    console.log('Damn I am good.');
    console.log('I mean, shit, I still had '+ (5-attempts) + ' attempts remaining.');
    process.exit(0);
  }

 // else
 // {
 //   console.log("Try a different number, dumbass.");
  //  console.log('You still have '+attempts+' remaining.');
 // }

  attempts--;
  if (attempts == -1) //has to be negative to be correct?
  {
    console.log('Sorry, but I SUCK.');
    process.exit(0);
  }
 randomNum = Math.floor(Math.random() * 100 - (high - low)) + low
}
)