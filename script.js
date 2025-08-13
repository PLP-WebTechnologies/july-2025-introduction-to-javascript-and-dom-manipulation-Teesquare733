let secretNumber = Math.floor(Math.random() * 10) + 1;
let maxAttempts = 3;
let guessCount = 0;

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('btn');
    const userInput = document.getElementById('userguess');
    
    submitButton.addEventListener('click', checkGuess);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkGuess();
        }
    });
});

function checkGuess() {
    const guess = parseInt(document.getElementById('userguess').value);
    
    if (isNaN(guess) || guess < 1 || guess > 10) {
        document.getElementById('message').textContent = "Please enter a valid number between 1 and 10!";
        return;
    }
    
    guessCount++;
    
    if (guess === secretNumber) {
        document.getElementById('message').textContent = `Correct! The number was ${secretNumber}`;
        document.getElementById('message').style.color = "green";
        disableInput();
    } else if (guess > secretNumber) {
        document.getElementById('message').textContent = "Oops, Too High! Try again";
    } else {
        document.getElementById('message').textContent = "Oops, Too Low! Try again";
    }
    
    document.getElementById('attempts').textContent = `Attempts: ${guessCount}/${maxAttempts}`;
    
    if (guessCount >= maxAttempts && guess !== secretNumber) {
        document.getElementById('message').textContent = `Game Over! The number was ${secretNumber}.`;
        document.getElementById('message').style.color = "red";
        disableInput();
    }
}

