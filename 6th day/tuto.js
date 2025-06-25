// WAP to print even numbers from 1 to 50.

for (let a = 1; a <= 50; a++) {
    if (a % 2 == 0) {
        console.log("Even numbers from 1 to 50:", a);
    }
}

// WAP to count how many numbers between 1 to 100 are divisible by both 3 and 5.

let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        count++;
    }
}
console.log("Count:", count);

// WAP to print the multiplication table of a given number using for loop.

const table = (number) => {
    for (let x = 1; x < 11; x++) {
        // multiplication = number * x;
        // console.log(multiplication);
        console.log(`${x} X ${number} = ${number * x}`);
        
    }

};
table(5);
// WAP to print the sum of numbers from 1 to 100 using a while loop.

let sum = 0;

for (let a = 1; a <= 100; ) {
    sum += a;
    a++;
}
console.log("Sum:", sum);


//WAP to perform addition using a function

function add(a,b){
    console.log(a+b)
}

add(10,10)


//Write a function called findMax that takes two numbers as input and returns the greater number.

function findMax(a,b){
    if(a>b){
        console.log(a,"is greater.")
    }
    else{
        console.log(b,"is greater.")
    }
}

findMax(9,5)

//Write a function called isLeapYear that takes a year as input and returns true if it's a leap year, otherwise false.

function isLeapYear(year){

    if (year%4 == 0 && year%100 !=0 || year%400 ==0){
        console.log(year,"is leap year.")
    }
    
    else{
        console.log(year,"is not leap year.")
    }
}

isLeapYear(2004)

isLeapYear(1999)

isLeapYear(2005)