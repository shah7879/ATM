"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let mybalance = 5000;
let mypin = 1234;
let pinans = await inquirer_1.default.prompt([{
        name: "pin",
        type: "number",
        message: "enter your pin code",
    }
]);
if (pinans.pin === mypin)
    console.log("your pin is correct, log in successfully");
let operationans = await inquirer_1.default.prompt([
    {
        name: "operation",
        type: "list",
        message: "select an operation",
        choices: ["withdraw", "check balance"]
    }
]);
if (operationans.operation === "withdraw") { }
let amountans = await inquirer_1.default.prompt([
    {
        name: "amount",
        type: "number",
        message: "enter your amount withdraw"
    }
]);
if (amountans.amount > mybalance) {
    console.log("insufficiant balance");
}
else
    mybalance -= amountans.amount;
console.log(`${amountans.amount} withdraw succesfully`);
console.log(`your remaining balance is: ${mybalance}`);
if (operationans.operation === "check balance") {
    console.log(`your account balance is: ${mybalance}`);
}
