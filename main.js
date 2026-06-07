import { prompts } from './prompts.js';

const promptElement = document.querySelector('#prompt');
const getRandomPromptBtnElement = document.querySelector('#get-prompt-btn');

function loadGame() {
    
}

function getRandomPrompt() {
    return prompts[Math.floor(Math.random() * prompts.length)];
}

getRandomPromptBtnElement.addEventListener('click', (e) => {
    promptElement.textContent = getRandomPrompt();
});

// Set prompt when page loads
promptElement.textContent = getRandomPrompt();