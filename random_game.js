var readline = require('readline');
var randomNum = Math.floor(Math.random() * 10);
var attempts = 5;
var terminal = readline.createInterface( //havent learned, but only way I could get it to work
{
  input : process.stdin,
  output : process.stdout
});

terminal.setPrompt('Give it your best shot: ');
terminal.prompt();
terminal.on('line', function(answer)
{
  var answerNum = parseInt(answer);

  if (answerNum < randomNum)
  {
    console.log('Get higher!');
    console.log('You have '+attempts+' attempts remaining.');
  }

  else if (answerNum > randomNum)
  {
    console.log('Go lower!');
    console.log('You have '+attempts+' attempts remaining.');
  }

  else if (answerNum === randomNum)
  {
    console.log('Lucky guess.');
    console.log('You still had '+ (5-attempts) + ' attempts remaining.');
    process.exit(0);
  }

  else
  {
    console.log("Try a different number, dumbass.");
    console.log('You still have '+attempts+' remaining.');
  }

  attempts--;
  if (attempts == -1) //has to be negative to be correct?
  {
    console.log('Sorry, but YOU SUCK.');
    process.exit(0);
  }

  terminal.prompt();
});

terminal.on('close', function()
{
  console.log('Giving up already?')
  process.exit(1);
});