const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questions = {
  name : "What's your name? Nicknames are also acceptable :) ",
  activity : "What's an activity you like doing? ",
  favouriteMusic : "What do you listen to while doing that? ",
  favouriteMeal : "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  favoriteFood : "What's your favourite thing to eat for that meal? ",
  favouriteSport : "Which sport is your absolute favourite? ",
  superPower : "What is your superpower? In a few words, tell us what you are amazing at! "
};

let profil = {};


rl.question(questions.name, (answer) => {
  profil["name"] = answer;
  rl.question(questions.activity, (answer) => {
    profil["activity"] = answer;
    rl.question(questions.favouriteMusic, (answer) => {
      profil["favouriteMusic"] = answer;
      rl.question(questions.favouriteMeal, (answer) => {
        profil["favouriteMeal"] = answer;
        rl.question(questions.favoriteFood, (answer) => {
          profil["favouriteFood"] = answer;
          rl.question(questions.favouriteSport, (answer) => {
            profil["favouriteSport"] = answer;
            rl.question(questions.superPower, (answer) => {
              profil["superPower"] = answer;
              rl.close();
              console.log(`${profil.name} loves listening to ${profil.favouriteMusic} while ${profil.activity}, devouring ${profil.favouriteFood} for ${profil.favouriteMeal}, prefers ${profil.favouriteSport} over any other sport, and is amazing at ${profil.superPower}.`)
            });
          });
        });
      });
    });
  });
});