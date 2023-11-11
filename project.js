// 1. Deposit money
// 2. Determine number of lines to bet on 
// 3. Collect a bet amount 
// 4. Spin the slot 
// 5. Check if the player won 
// 6. Give the winner 
// 7. Play again 

const prompt = require("prompt-sync")();

const deposit = () => {
    while(true){
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);
    
        if (isNaN(numberDepositAmount) ||numberDepositAmount <= 0 ){
            console.log("Invalid deposit amount. Try again.");
        } else{
            return numberDepositAmount
        }

    }; 
    
};

const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter the number of lines to bet on (1 to 3): ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) ||numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid number of lines. Try again.");
        } else{
            return numberOfLines;
        }
    }
};

const getBet = (balance, lines) => {
    while(true){
        const bet = prompt("Enter the total bet per line: ");
        const numberbet = parseFloat(bet);

        if (isNaN(numberbet) ||numberbet <= 0 || numberbet > balance / lines) {
            console.log("Invalid bet. Try again.");
        } else{
            return numberbet;
        }
    };


};

let balance = deposit()
const numberOfLines = getNumberOfLines()
const bet = getBet(balance, numberOfLines)



