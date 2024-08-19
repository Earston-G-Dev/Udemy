// Starting by defining a age.
// const age = 23;

// 1.We start the conditional by stating what the age condition will be.
//2.After the condition we use a question mark
//3.First we add the command we want if the inpout is true after the question mark.
//4.Once we finish the actions we want for the true condition we input a ":"[colon]
//5.After the colon we input what we want to happen if the condition is false. 

// age >= 18 ? console.log('I like to drink wine 😒') : 
//  console.log('I like to drink water 😊') ;

//There are other ways to do conditionals. Current practice conditionals 
//are said to go like what  we have below. 

// first we declare an unchanging arrow function variable(const)[doesnt have to be const, can be let, or var]
// then we make the argument "age"
//next we use the condition 18 and follow the way we did before. Only new we can call the function later using "drink"
//  const drink = age => 18 ? 'wine🍷' : 'water 💧';
//  console.log(drink);

 //This makes it easier to call at other locations of code and also allows 
//for the best practice of simple and readable code.

//Below is a bit more of a complex way. We dont want to make a habit of it be we 
//want to be able to understand certain concepts so its more practice friendly.


//A rule of thumb to remember is that if we want to use a variable in a if or else block, 
//we must declare it outside.
//Here we declare the variable we will use with let since we want it changable.

// let Drink2;

//Now below we input our if else statement
// if(age >= 18) {
//     Drink2 = 'wine 🍷';
// } else {
//     Drink2 = 'water 💧';
// }

// console.log(Drink2);



