'strict mode'
// //This section is going to focus on specific data dealing with objects and Arrays.

// //ARRAYS
// //Arrays are lines of code that holds data that can be added or removed. Lets use a
// //room as an example. We can add people and remove them. The people are the data and the room is the Array.
// //Arrays are a data structer. The two most important data structers in JS are Arrays and Objects
// //Lets look at it as an example.
// const friend1 = 'Mystic';
// const friend2 = 'Asssassin';
// const friend3 = 'BryBry';
// //Saving friends to code like this can get annoying and tedious FAST!!!!! Even if
// //we use all the shortcut tricks in the book we would still have to edit the specifics
// //but we have arrays



// //What we do here is instead of making a const for each friend, we name all the friends in a array and seperate them with commas. We still surround each individual name with quotes but we insert
// //the commas outside the quotes. See the example below.
// //CREATING AN ARRAY
// const psnFriends = ['Mystic', 'Assassin', 'BryBry', 'Zay', 'Greg', 'Shawn', 'Positivity', 'Echo', 'Retro'];
// console.log(psnFriends);

// //Here is another way to make one
// const gameBuddies = new Array(Neomorphic, Jon, BlackBulma, svgrCloud);

// //Arrays can hold as many values as desired and any tyoe of value as well like numbers and strings.
// //The first method is the preffered method.

// //So how do we retrieve information from a string.
// console.log(psnFriends[0]);
// //It Should return 'Mystic'.
// //What the line did was called the item identified as zero in the arrays.
// //Items are numbered in an array but instead of starting with 1 they start with zero.
// //These are called the Array index
// //So how Mystic is the first friend in the psnFriends array. If we wanted to get him out of the array we would call(psnFriends[0]).

// //We can also get the number of elements in an array as well.
// console.log(psnFriends.length);
// //What we did here is use a property. .length tells us how many items we have total in an array. but with this returned number the number is actually correct. Meaning in this case mystic will be = to 1.
// //To get the index of the last number we want to subtract 1 from the length so....
// //console.log(psnFriends[psnFriends.length-1])

// //We can also replace friends in arrays or remove them.
// //See below
// psnFriends[5] = 'JT';
// console.log(psnFriends);
// //NOTE arrays are imutable so const doesnt effect data in an array.
// //But the changes need to be made to the array outside the declaration.
// //we cannot declare a new array with new data in the same array declared.
// //So we cannot do
// //"const psnFriends = [Velvet, Laphi];"

// //Added bits
// //1.Arrays can be created into other arrays.

// // Exercize
// const years = [1994, 1999, 1987, 1964, 2019];
// //Say we wanted to add the numbers in the array by 10.
// //It takes a bit of code, lets see why.

// const currentAge = function (birthYear) {
//     return 2024 - birthYear;
// }

// //See below
// console.log(currentAge(years)); // Should be NaN;
// //THIS WILL NOT WORK!
// //Seeing as arrays have more than a singular item of data, the calculations will be off
// //since the argument is seeking a single value vs an array.

// //What we CAN do is make calculations with individual elements.
// //See Below

// console.log(currentAge(years[0]));
// console.log(currentAge(years[3]));
// console.log(currentAge(years[4]));
// console.log(currentAge(years[5]));
// //Since we are selecting a specific piece of data then we will get a value from the calls above.

//We can place function calls inside an array as well because they produce a value.
//See example below.

const ages = [currentAge(years[0]), currentAge(years[3]), currentAge(years[5])];
//Above we created a new array and placed items in it.









