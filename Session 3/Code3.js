//Lets begin with a function.
//What is a function?
//A function is a line of code that initiates a action or process for
//interacting with websites and applications.
//Lets start by making a function.
//We start by declaring a function 
function logger() {
    console.log(`Say hello to A better future!`)
}

//Here we are calling, running, or invoking a function.
logger();
logger();
logger();
logger();

//Functions can also return data as well. This allows us to get information back that we 
//can use elsewhere.
//Next lets try adding arguments to the function.()
//Lets try it
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    //So what we do now is we set up a string to use as an example of parameters.
    //For instance if we input 7 for apples and 7 for oranges we 
    //can use that information and concatinate it in a const process called juice.
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

    //Afterwards we want to input return so we can see our  results.
    return juice;
};
//We now have a reusable function that we  can use anywhere in our code simply by callinng it.
//We also have the ability to change the value of the arguments each time.

fruitProcessor(7, 7);
//success
//For now our string is nowhere to be found,
//To fix this we want to store it in a variable.

const appleJuice = fruitProcessor(5, 5);
console.log(appleJuice);
//OR
console.log(fruitProcessor(9, 9))

//Recap
//We called fruitProcessor with 2 arguments.
//When it runs now apples and oranges will = the values we input
//in the parenthesis of the function call.(We get 5,5 in the console)
//We then use those values to create the juice string inside the function.
// Then we return it from the function.
//Returning means the result of the juice function will be whats returned. 
//Then we have to store the value. By saving it. then we can log it for the juice string.
//OR we could just console log fruitProcessor with the values.



//Practice below

function weeklyPay(day1, day2, day3, day4, day5) {
    console.log(day1, day2, day3, day4, day5)
    const Pay = `YoYo made ${day1 + day2 + day3 + day4 + day5} dollars this week`;
    return Pay;
};

console.log(weeklyPay(112.55, 122.54, 155.99, 177.42, 128.75));
console.log(weeklyPay(155.55, 147.54, 155.99, 177.42, 142.75));


function getChecks(Monday, Tuesday, Wednesday, Thursday, Friday) {
    console.log(getChecks);
    const hoursWorked = `This worker worked ${Monday + Tuesday + Wednesday + Thursday + Friday} hours this week!`;
    return hoursWorked;
}

console.log(getChecks(40, 40, 35, 30, 20));