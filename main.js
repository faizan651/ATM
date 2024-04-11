#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //dollars
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Please enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option:",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance in your account");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "fast cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "option",
                message: "Please select fast cash amount:",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"],
            },
        ]);
        myBalance -= fastcashAns.option;
        console.log(`Your remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your account balance is :" + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
