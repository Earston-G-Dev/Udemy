// Part 1 Code// 
//Strings and Template Literals
//Lets start by creating and logging some information about myself.
//We want to use the "+" sign to concatinate[Merge together or combine] strings.
//This is an older concept but now we can do this easier by using ${}. 
const firstName = 'Markus';
const job = 'Red Cross worker';
const birthYear = 1995;
const year = 2024;

//Notice the diffirence between the two functions below

//Code example below. Uncomment to see.
//const example = 'I'm ;

//const example2 = "I'm";



//Above we see that the wuote icon we use makes a diffirence in accordence to
//gramatical icons. For instance,
//to "I'm" in a string we want to use double quotes
//that way we dont throw of our computer from understanding icon 
//placements

//Below is an example of concatinating strings. 

//const example4 = "I'm " + firstName +', a ' +( year - birthYear) + 'years old' + job + '!';
//console.log(example4)

//In ES6 we have a much more productive and effective method for
//this purpose.See below.
const example5 = `'I'm ${firstName} a ${year - birthYear} years old ${job}`;
console.log(example5);

//To end this lesson the best practice is to just always use backtics.

//Creating multi line strings.
//The original way to implement is below.....
console.log('String with \n\
     see whats next');

//Here \n\ is what is used to make a new line in the string.
//May be universal in other languages.
//Using Backtics removes the need to use \n\ 
//Now we only need  to just move to the next line. See Below

console.log(`String with
    new lines`)