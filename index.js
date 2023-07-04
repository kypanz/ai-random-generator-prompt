import actions from './actions.js';
import hobbies from './hobbies.js';

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

// Generate a random prompt with specific characteristics
const characterDescription = "short and light blue hair, and a hoodie";
const randomAction = getRandomAction();
const randomHobby = getRandomHobby();
const prompt = `A character with ${characterDescription} is ${randomAction} while ${randomHobby}.`;

console.log(prompt);
