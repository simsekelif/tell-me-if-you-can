// timer function

//Do not forget to change the seconds as 60!
let count = 5;
  // printed timer to the playground with this attribute.
  document.getElementById("secondsLeft").innerText = count;
const timer = setInterval(() => {
  count--;
  // This line prints the count to the console!
  console.log(count);
  
  if (count === 0) {
    clearInterval(timer);
    
    const buttons = document.querySelectorAll("#buttons button");
    buttons.forEach((button) => {
      button.disabled = true;
  });
  console.log("Time's up! Your score: "); 
}
}, 1000);


// score function

// let score = 0;
// for(var score = 0; i < 20; i++) {

// }
// function addOn(){
//   score++
// };
// console.log(addOn);


//cards are below!
let cards =[ 
  firstCard = {
  word: "Watt",
  forbiddenWords: ["joule", "unit", "power","electric", "potential"]
},
  secondCard = {
    word: "Telescope",
    forbiddenWords: ["star", "observatory", "planet", "look", "astronomy"]
  },
  thirdCard = {
    word: "Magma",
    forbiddenWords: ["volcano", "fiery", "liquid", "rock", "lava"]
  }
]
// function for the "next"button.
const getCard = (() => {
  let index = 0; 

  return () => {
      if (index < cards.length) {
          return cards[index++];
      }
  };
});
