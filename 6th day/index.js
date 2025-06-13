hoisting
console.log(c);
console.log(a);

const a = 1;
let b = 2;
var c = 3;

// function scoped
function exampleVar() {
    if (true) {
    var x = 10;
    }
  console.log(x); // ✅ 10 - `var` is function scoped
}
exampleVar();

// block scoped
function exampleLet() {
    if (true) {
    let y = 20;
    console.log(y); // ✅ 20
    }
    console.log(y);
}
exampleLet();

function exampleConst() {
    if (true) {
    const z = 30;
    console.log(z); // ✅ 30
    }
    console.log(z);
}
exampleConst();

let d = (a == c);
console.log(d);

d = a !== b ? "a equals b" : "a doesn't equal b";
console.log(d);

console.log(10 !== 10 ? "same value" : "different value");

// (loading) ? </Loding> : null;

if (a == b) {
    console.log("a is equal to b");
} else {
    console.log("a is not equal to b");
}

if (a == b){
    return "a is equal to b";
} else{
    return "hie";
}

console.log(a);
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// while
let x = 0;
while (x < 5) {
    console.log(x);
    x++;
}
const fruits = ['apple', 'banana', 'cherry'];
for(const fruit of fruits) {
    console.log(fruit);
}

func
function run(name) {
//   console.log(`${name} is running`);
    return `hie ${name}`;
}

const running = run("Abi")
console.log(running);


function add(d, e, f){
    try{
        return d + e + f;
    } catch (error){
        console.error("An error occurred:", error);
        return null;
    }
}
console.log(add(1, 2, 3));

// arrow
const additionArrow = (number1, number2, number3) =>{
    return number1 + number2 + number3;
}


() => {

}