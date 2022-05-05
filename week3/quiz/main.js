alert("Welcome to Quiz Ninja!");

// Set the questions
const quiz = [
  ["What is Superman's real name?", "Clark Kent"],
  ["What is Wonderwoman's real name?", "Dianna Prince"],
  ["What is Batman's real name?", "Bruce Wayne"],
];

function start(quiz) {
  // initialize score
  let score = 0;
}

// main game loop
for (const [question, answer] of quiz) {
  // get answer from user
  const response = ask(question);
  check(response, answer);
}

// end of main game loop

gameOver();

// function declarations

function ask(question) {
  return prompt(question);
}

function check(response, answer) {
  if (response === answer) {
    alert("Correct");
    score++;
  } else {
    alert(`wrong! The correct answer was ${answer}`);
  }
}

function gameOver() {
  // At the end of the game, report the player's score
  alert(`Game Over, you scored ${score} point${score !== 1 ? "s" : ""}`);
}

start(quiz);
