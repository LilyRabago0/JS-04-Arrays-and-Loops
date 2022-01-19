


// Comentar los ejercicios que no se revisan para poder probar el elegido.

/*
- Print all the odd numbers between 1 - 100.
let oddNumbers = 1
while(oddNumbers <= 100){
    if (oddNumbers % 2 == 0){
        console.log(oddNumbers);
    } 
    oddNumbers++;
}

*/

/*
- Write a method with a while loop to print 1 through n in square brackets. 
For example, if n = 6 print [1] [2] [3] [4] [5] [6]
function squareBrackets(number) {
    let i = 1
    while (i <= number) {
        console.log([i]);
        i++;
    }
}
let number = Number(prompt("Cuál número escoges?"))
squareBrackets(number);
*/

/*
- Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n*/



function sumNumbers(number) {
    let i = 1
    let sum = 0
while(i <= number){
    sum = sum + i
    i++
}
console.log("The sum of all the numbers is " + sum);
}
let number = Number(prompt("Write a number"));
sumNumbers(number);

