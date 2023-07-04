import actions from './actions.js';
import hobbies from './hobbies.js';
import sex_actions from './sex_actions.js';

// Generating a random action for your waifu
function getRandomAction() {
  const randomIndex = Math.floor(Math.random() * actions.length);
  return actions[randomIndex];
}

// Getting a random hobby from your waifu
function getRandomHobby() {
  const randomIndex = Math.floor(Math.random() * hobbies.length);
  return hobbies[randomIndex];
}

// Getting a random hobby from your waifu
function getRandomSexAction() {
  const randomIndex = Math.floor(Math.random() * sex_actions.length);
  return sex_actions[randomIndex];
}

// Generate a random prompt with specific characteristics
const characterDescription = "short and light blue hair, hoodie";
const randomAction = getRandomAction();
const randomHobby = getRandomHobby();
const randomSexAction = getRandomSexAction();
const prompt = `Teen girl with ${characterDescription}, ${randomAction} while ${randomHobby}.`;
const prompt_sex = `((${randomSexAction})), nude, Teen girl with ${characterDescription}, ((${randomSexAction}))`;
console.log(prompt);
