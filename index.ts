import inquirer from "inquirer";

// Initialize user balance and pin code
let myBalance = 6000;
let myPin = 2468;

// print welcome message
console.log("welcome to Abdul Kalam - ATM Machine");

let pinAnswer = await inquirer. prompt ([
{
    name:"pin",
    type:"number",
    message:"Enter your pin code:"
}
]);
if (pinAnswer.pin===myPin){
    console.log("Pin is Correct,Login Successfuly!");
    // console.log("Current Account Balance is:${myBalance}");
   
    let OperationAns = await inquirer.prompt([
        {
       name: "operation",
        type: "list",
        message: "Select an operation:",
        choices: ["Withdraw Ammount","Check Balance"]
    }
    ]);
        
   if  (OperationAns.operation ==="Withdraw Ammount" ){
    let ammountAns = await inquirer.prompt([
       {
    name:"amount",
    type:"number",
    message:"Enter the amount to withdraw",
      }
    ]);
    if(ammountAns.amount > myBalance){
        console.log("Insufficient Balance");
    }
    else{
        myBalance  -= ammountAns.amount;
        console.log('${ammountAns.amount} Withdraw Successfully');
        console.log(`Your Remaining Balance is ${myBalance}`);
    }
    
    }
    else if(OperationAns.operation === "Check Balance"){
    console.log(`Your Account Balance is ${myBalance}`);
    }

}
else{
    console.log("Pin is Incorrect, Try Again");
}
