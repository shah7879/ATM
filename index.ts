import inquirer from "inquirer"

let  mybalance = 5000
let mypin  = 1234

let pinans = await inquirer.prompt(
    [        {
           name: "pin",
           type: "number",
           message: "enter your pin code", 
        }
    ]
);
if (pinans.pin === mypin)
    console.log("your pin is correct, log in successfully")
let operationans = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "select an operation",
        choices: ["withdraw", "check balance"]
    }
]
);
if (operationans.operation === "withdraw"){}
    let amountans = await inquirer.prompt([
        
            {
                name:"amount",
                type: "number",
                message: "enter your amount withdraw"
            }
        
    
    ]);
      
    if (amountans.amount > mybalance){
    console.log("insufficiant balance");
    }
else
    mybalance -= amountans.amount;
    console.log(`${amountans.amount} withdraw succesfully`)
    console.log(`your remaining balance is: ${mybalance}`);

 if(operationans.operation === "check balance"){
    console.log(`your account balance is: ${mybalance}`);
}

