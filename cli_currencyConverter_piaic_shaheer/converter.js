/* The TypeScript console app is used to convert currencies:
the users enter a certain amount of money in one currency and
set the currency they want to check the monetary value of.
While developing the app, the beginners can master variables,
algorithms, loops, if statements, and other TypeScript concepts.

Create a GitHub repository for the project and
submit its URL in the project submission form. */
import inquirer from "inquirer";
import chalk from "chalk";
const green = chalk.greenBright.bold.underline;
const red = chalk.redBright.bold;
const yellow = chalk.yellowBright.bold.underline;
const blue = chalk.blueBright;
const whites = chalk.whiteBright.bold;
console.log("\n\n");
console.log(green("█▀▀ █░█ █▀█ █▀█ █▀▀ █▄░█ █▀▀ █▄█     █▀▀ █▀█ █▄░█ █░█ █▀▀ █▀█ ▀█▀ █▀▀ █▀█     ▄▀█ █▀█ █▀█"));
console.log(green("█▄▄ █▄█ █▀▄ █▀▄ ██▄ █░▀█ █▄▄ ░█░     █▄▄ █▄█ █░▀█ ▀▄▀ ██▄ █▀▄ ░█░ ██▄ █▀▄     █▀█ █▀▀ █▀▀"));
console.log("\n");
console.log(blue("┳┓      ┓       ┓  ┓     ┏┓┓   ┓       "));
console.log(blue("┃┃┏┓┓┏┏┓┃┏┓┏┓┏┓┏┫  ┣┓┓┏  ┗┓┣┓┏┓┣┓┏┓┏┓┏┓"));
console.log(blue("┻┛┗ ┗┛┗ ┗┗┛┣┛┗ ┗┻  ┗┛┗┫  ┗┛┛┗┗┻┛┗┗ ┗ ┛ "));
console.log("\n\n");
do {
    function Pkr(amount) {
        let userAmount = amount;
        let PakRs = 279.72;
        let result = PakRs * userAmount;
        let num = result.toFixed(2);
        console.log(blue(`Your amount in Pakistani Rupee is PKR: ${num}`));
    }
    function UAEdirham(amount) {
        let userAmount = amount;
        let dirham = 3.67;
        let result = dirham * userAmount;
        let num = result.toFixed(2);
        console.log(blue(`Your amount in United Arab Emirates Dirham is AED: ${num}`));
    }
    function INR(amount) {
        let userAmount = amount;
        let inr = 82.89;
        let result = inr * userAmount;
        let num = result.toFixed(2);
        console.log(blue(`Your amount in Indian Rupee is INR: ${num}`));
    }
    function Euro(amount) {
        let userAmount = amount;
        let eu = 0.92;
        let result = eu * userAmount;
        let num = result.toFixed(2);
        console.log(blue(`Your amount in EURO: ${num}`));
    }
    function Yuan(amount) {
        let userAmount = amount;
        let yuan = 7.20;
        let result = yuan * userAmount;
        let num = result.toFixed(2);
        console.log(blue(`Your amount in Chinese Yuan: ${num}`));
    }
    function Yen(amount) {
        let userAmount = amount;
        let yen = 150.48;
        let result = yen * userAmount;
        let num = result.toFixed(2);
        console.log(blue(`Your amount in Japanese Yen: ${num}`));
    }
    do {
        console.log();
        var user = await inquirer.prompt([{
                name: "currency",
                type: "number",
                message: green("Enter your amount in USD: "),
            }]);
        var amount = user.currency;
        if (!(user.currency === amount)) {
            console.log(red("\nInput in digits only\n"));
        }
    } while (!(user.currency === amount));
    let choice = await inquirer.prompt([{
            name: "Currency",
            type: "list",
            message: green("Select your currency\n\n"),
            choices: ["Pakistani Rupee (PKR)", "United Arab Emirates Dirham (AED)", "Indian Rupee (INR)", "Euro", "Chinese Yuan", "Japanese Yen"]
        }]);
    switch (choice.Currency) {
        case "Pakistani Rupee (PKR)": {
            Pkr(amount);
            break;
        }
        case "United Arab Emirates Dirham (AED)": {
            UAEdirham(amount);
            break;
        }
        case "Indian Rupee (INR)": {
            INR(amount);
            break;
        }
        case "Euro": {
            Euro(amount);
            break;
        }
        case "Chinese Yuan": {
            Yuan(amount);
            break;
        }
        case "Japanese Yen": {
            Yen(amount);
            break;
        }
    }
    var start = await inquirer.prompt([{
            name: "over",
            type: "confirm",
            message: green("Start Over Again?\n")
        }]);
    if (start.over == false) {
        console.log(red("\nThank you for using Currency Converter App !"));
    }
} while (start.over != false);
