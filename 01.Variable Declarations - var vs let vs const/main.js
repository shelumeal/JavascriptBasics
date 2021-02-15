// --------------------------------------------------------------//
function addNumber1() {
    var a = 10;
    var b = 20;
    var flag = true;
    if (flag) {
        var sum = a + b;
        console.log('Inside if block', sum);
    }
    console.log('Outside if block', sum);
}
addNumber1();
// Inside if block 30
// Outside if block 30
// --------------------------------------------------------------//

// --------------------------------------------------------------//
function addNumber2() {
    const a = 10;
    const b = 20;
    const flag = true;
    if (flag) {
        const sum = a + b;
        console.log('Inside if block', sum);
    }
    console.log('Outside if block', sum);
}
addNumber2();
// Inside if block 30
// Uncaught ReferenceError: sum is not defined
// --------------------------------------------------------------//


// Hoisting
// --------------------------------------------------------------//
function hoists() {
    var name
    console.log(name);
}
hoist();
// Undefined
// --------------------------------------------------------------//

// --------------------------------------------------------------//
function hoist1() {
    console.log(name);
    var name
}
hoist1();
// Undefined (Hoisted and initialized with undefined)
// --------------------------------------------------------------//

// --------------------------------------------------------------//
function hoist2() {
    console.log(name);
    var name = 'Test';
}
hoist2();
// Undefined : Only variable declaratons are hoisted to the top and not variable initialization.
// --------------------------------------------------------------//


// --------------------------------------------------------------//
function exercise1() {
    var name = 'Mark';
    var name = 'James';
    console.log(name);
}
exercise1();
// 'James' : After the fist declaration of the variable, subsequent declarations of a variable using 'var' are allowed


// --------------------------------------------------------------//
function exercise2() {
    let name = 'Mark';
    let name = 'James';
    console.log(let);
}
exercise2();
// SyntaxError : Identifier 'name' has already been declared.
// You can't redeclare variables with let keyword.
// --------------------------------------------------------------//

// --------------------------------------------------------------//
var a = 10;
function exercise3(){
    a=20;
    console.log(a);
}
exercise3();
console.log(a);
// 20
// 20
// Funcion can access  and change variables in thier outerscope.
// When we omit the var keyword on line 3, Javascript engine will not create a new instance of variable 'a' in the function scope.
// Instead, it will  try to find variable 'a' in the function scope. If it does not find it, it will go up one scope to find it
// --------------------------------------------------------------//

// --------------------------------------------------------------//
const profile={
    name: 'Mark',
    age: 12
}
profile.name= 'James';
console.log(profile.name);
// 'James'