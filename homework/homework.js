// Javascript Homework
// Due next Friday Morning
// -----------------------------------------------------------------------------------
// PART I
//
// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
//
// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.
function fib(n) {
    let currentNum = 1;
    let lastNum = 0;
    let result = 0;
    if (n <= 1) {
        return n;
    }
    for (i = 0; i < n; i++) {
        result = lastNum + currentNum;
        lastNum = currentNum;
        currentNum = result;
    }
    return currentNum;
}


// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
function bubbleSort(numArray) {
    for (i = 0; i < numArray.length; i++) {
        for (j = i; j < numArray.length; j++) {
            if (numArray[i] > numArray[j]) {
                let holder = numArray[i];
                numArray[i] = numArray[j];
                numArray[j] = holder;
            }
        }
    }
    return numArray;
}


// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
function reverseStr(someStr) {
    let reverseString = '';
    for (i = (someStr.length - 1); i >= 0; i--) {
        reverseString = reverseString + someStr.charAt(i);
    }
    return reverseString;
}


// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum) {
    if (someNum <= 1) {
        return someNum;
    }
    let result = 1;
    for (i = 1; i <= someNum; i++) {
        result = result * i;
    }
    return result;
}


// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr, length, offset) {
    if (length > someStr.length) {
        alert(`length cannot be greater then the String ${someStr.length}`);
    } else if (offset > length) {
        alert(`offset cannot be greater then the length ${length}`);
    } else if (offset < 0 || length < 0) {
        alert(`number cannot be less the 0`);
    } else {
        return someStr.substring(offset, length);
    }
    return '0';
}


// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum) {
    while (someNum > 1) {
        someNum = someNum - 2;
    }
    if (someNum == 0) {
        return true;
    } else {
        return false;
    }
}

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr) {
    // remove spaces
    for (i = 0; i < someStr; i++) {
        let letter = someStr.charAt(i);
        if (letter === ' ') {
            someStr = someStr.replace(' ', '');
            i--;
        }
    }

    let someStrRev = reverseStr(someStr);
    for (i = 0; i < someStr.length; i++) {
        if (someStr[i] != someStrRev[i]) {
            return false;
        }
    }
    return true;
}

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *
function printShape(shape, height, character) {
    if (shape === 'Square') {

    } else if (shape === 'Triangle') {

    } else if (shape === 'Diamond') {

    } else {
        console.log('sorry, not a valid shape')
    }
}

function printSquare(height, character){

}

function printTriangle(height, character){

}

function printDiamond(height, character){

}


// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj) {
    console.log(someObj);
}


// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
function deleteElement(someArr) {
    console.log(`Length of the array: ${someArr.length}`);
    console.log(someArr);
    if (someArr.length >= 3) {
        // assuming 'third element' = the second index. Also assuming that undefined = deleted element.
        someArr[2] = undefined;
    }
    console.log(`Length of the array: ${someArr.length}`);
    console.log(someArr);
}


// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceElement(someArr) {
    console.log(`Length of the array: ${someArr.length}`);
    console.log(someArr);
    if (someArr.length >= 3) {
        // assuming 'third element' = the second index
        someArr = someArr.splice(2, 1);;
    }
    console.log(`Length of the array: ${someArr.length}`);
    console.log(someArr);
}


// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	let john = new Person("John", 30);
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let john = new Person("John", 30);

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	let john = getPerson("John", 30);
function getPerson(name, age) {
    let person = {
        objAge : age,
        objName: name,
    };
    return person;
}
let john = getPerson("John", 30);