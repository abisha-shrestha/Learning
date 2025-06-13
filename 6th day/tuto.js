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
