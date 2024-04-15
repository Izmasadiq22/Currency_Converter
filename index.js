#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.56,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter from Currency",
        choices: [`USD`, `EUR`, `GBP`, `INR`, `PKR`]
    },
    {
        name: "to",
        type: "list",
        message: "Enter to Currency",
        choices: [`USD`, `EUR`, `GBP`, `INR`, `PKR`]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Amount"
    }
]);
let fromAmount = currency[user_answer.from]; // exchange rate
let toAmount = currency[user_answer.to]; //exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //USD base curency //4
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
