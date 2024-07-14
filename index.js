import inquirer from "inquirer";
let MyBalance = 10000;
const mypinnum = 1212;
console.log("Your current Balance is " + MyBalance);
const pinAnswer = await inquirer.prompt([
    {
        name: "pinNumber",
        type: "number",
        message: "Enter yuor pin number"
    }
]);
if (pinAnswer.pinNumber === mypinnum) {
    console.log("right pin number");
    const option = await inquirer.prompt([
        {
            name: "operation",
            message: "Choice one option",
            type: 'list',
            choices: ['withdraw', 'check balance']
        }
    ]);
    if (option.operation === "withdraw") {
        const amout = await inquirer.prompt([{
                name: "howmuch",
                message: "Enter your amount that you want to withdraw",
                type: "number",
            }]);
        MyBalance -= amout.howmuch;
        console.log("your remaining amount is " + MyBalance);
    }
    else {
        console.log(MyBalance);
    }
}
else {
    console.log("wrong pin number");
}
