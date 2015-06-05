var userAge=parseInt(prompt("What is your age?"),10);
if (isNaN(userAge)) {
    console.log("Woops! What you entered is not a number!");
} else if (userAge<17) {
    console.log("I'm sorry, but you cannot legally play this game online. Please find another game to play");
} else {
    console.log("Congrats! You're old enough to play. Enjoy the game!");
};
