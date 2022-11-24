let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 19;

if (runnerAge > 18 && registeredEarly === true) {
  raceNumber += 1000
};
if (runnerAge > 18 && registeredEarly === true) {
  console.log (`The runners with  the race number ${raceNumber} will run at 9:30am `)
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log (`The runners with  the race number${raceNumber} will run at 11am `) 
} else {
  console.log (`The runners with the race number ${raceNumber} will run at 12;30pm `) 
};
