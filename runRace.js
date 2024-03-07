let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);
var registeredEarly = false;
var runnerAge = 19;
var raceTime;
 if(runnerAge > 18){
  if(registeredEarly){
  raceTime = '09:30 AM';
  raceNumber += 1000;
  console.log('hello, you will run at '+ raceTime + ' your race number is: ' + raceNumber );
 }
 else{
  raceTime = '11: 30 AM'
  console.log('hello, you will run at ' + raceTime + ' your race number is: ' + raceNumber )
 }
 }
 
 else{
  raceTime = '12:30 PM';
  console.log('Hello! you will run at ' + raceTime);

 }
  