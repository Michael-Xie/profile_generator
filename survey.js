const readline = require('readline');

process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.)? ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];
let response = [];
let index = 0;
const newQuestion = (questions, readline) => {
  readline.question(questions[index], (answer) => {
    response.push(answer);
    index++;
    if (index < questions.length) 
      return newQuestion(questions, readline)
    const formatted = `
${response[0]} loves listening to ${response[2]} while ${response[1]}, devouring ${response[4]} during ${response[3]}, prefers ${response[5]} over any other sport, and is amazing at ${response[6]}.
`;
    console.log(formatted);
    readline.close();
  });

};

newQuestion(questions, rl);




