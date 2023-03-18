function OpeningCeremony(score, next) {
    console.log("Let the games begin");
    setTimeout(() => {
      Race100M(score, next);
    }, 1000);
  }
  
  function Race100M(score, next) {
    console.log("Starting Race100M");
    setTimeout(() => {
      const redTime = Math.floor(Math.random() * 6) + 10;
      const yellowTime = Math.floor(Math.random() * 6) + 10;
      const blueTime = Math.floor(Math.random() * 6) + 10;
      const greenTime = Math.floor(Math.random() * 6) + 10;
  
      let timeArray = [redTime, yellowTime, blueTime, greenTime];
      timeArray.sort();
  
      score[Object.keys(score)[timeArray.indexOf(redTime)]] += 50;
      score[Object.keys(score)[timeArray.indexOf(yellowTime)]] += 25;
  
      console.log("Race100M finished");
      console.log("Previous Score: ", score);
      console.log(`Red got ${redTime} seconds`);
      console.log(`Yellow got ${yellowTime} seconds`);
      console.log(`Blue got ${blueTime} seconds`);
      console.log(`Green got ${greenTime} seconds`);
  
      next(score, LongJump);
    }, 3000);
  }
  
  function LongJump(score, next) {
    console.log("Starting LongJump");
    setTimeout(() => {
      const colors = ["red", "yellow", "blue", "green"];
      const randomIndex = Math.floor(Math.random() * colors.length);
      const winnerColor = colors[randomIndex];
  
      score[winnerColor] += 150;
  
      console.log("LongJump finished");
      console.log("Previous Score: ", score);
      console.log(`${winnerColor} won the Long Jump`);
  
      next(score, HighJump);
    }, 2000);
  }
  
  function HighJump(score, next) {
    console.log("Starting HighJump");
    setTimeout(() => {
      const userInput = prompt("What colour secured the highest jump?");
      if (userInput !== null && userInput !== "") {
        const userInputColor = userInput.toLowerCase();
        if (Object.keys(score).includes(userInputColor)) {
          score[userInputColor] += 100;
        } else {
          console.log("Event was cancelled");
        }
      } else {
        console.log("Event was cancelled");
      }
  
      console.log("HighJump finished");
      console.log("Previous Score: ", score);
  
      next(score, AwardCeremony);
    }, 1000);
  }
  
  function AwardCeremony(score, next) {
    console.log("Starting AwardCeremony");
    console.log("Final Score: ", score);
  
    const sortedColors = Object.keys(score).sort((a, b) => score[b] - score[a]);
    console.log(`1st Place: ${sortedColors[0]} with ${score[sortedColors[0]]} points`);
    console.log(`2nd Place: ${sortedColors[1]} with ${score[sortedColors[1]]} points`);
    console.log(`3rd Place: ${sortedColors[2]} with ${score[sortedColors[2]]} points`);
  }
  
  // Start the event
  const initialScore = { red: 0, blue: 0, green: 0, yellow: 0 };
  OpeningCeremony(initialScore, Race100M);