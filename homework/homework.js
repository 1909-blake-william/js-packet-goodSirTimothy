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
/**
 * calculates fibonacci to the nth number
 * @param {*} n 
 */
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
/**
 * simple bubble sort algorithm
 * @param {*} numArray 
 */
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
/**
 * simple reverse String
 * @param {*} someStr 
 */
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
/**
 * Factorial calculation with recursion
 * @param {*} someNum 
 */
function factorial(someNum) {
    if (someNum <= 1) {
        return someNum;
    }
    else {
        return factorial(someNum - 1) * someNum;
    }
}


// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
/**
 * find a substring of a select string
 * @param {*} someStr   input string
 * @param {*} length    where to end the substring (cannot be larger then the string, or less then 0)
 * @param {*} offset    where to start the substring (cannot be less then 0)
 */
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
/**
 * subtract the number till it is 1 or 0 (odd or even)
 * @param {*} someNum 
 */
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
/**
 * I am assuming that a word or sentice does not have ponctuation OR capital letters. 
 * So writing 
 * "a hi ih a" == true
 * "a hi, ih a" == false
 * "a hi iH a" == false
 * @param {*} someStr 
 */
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

/**
 * I have split this task into seperate functions depending on which shape to print
 * @param {*} shape = the shape meant to be printed
 * @param {*} height = the dimensions of the object. 5 = 5x5
 * @param {*} character = the character to fill in the shape
 */
function printShape(shape, height, character) {
    if (shape === 'Square') {
        // print out a square
        console.log(printSquare(height, character));
    } else if (shape === 'Triangle') {
        // print out a Triangle
        console.log(printTriangle(height, character));
    } else if (shape === 'Diamond') {
        // print out a Diamond
        console.log(printDiamond(height, character));
    } else {
        console.log('sorry, not a valid shape')
    }
}

/**
 * function for square logic
 * @param {*} height 
 * @param {*} character 
 */
function printSquare(height, character) {
    let shape = '';
    for (i = 0; i < height; i++) {
        shape = shape + ' ';            // Insert a space to aline the suare with the diamond
        for (j = 0; j < height; j++) {
            shape = shape + character;
        }
        shape = shape + ' \n';
    }
    return shape;
}

/**
 * function for triangle logic (right angle only)
 * @param {*} height 
 * @param {*} character 
 */
function printTriangle(height, character) {
    let shape = '';
    for (i = 0; i < height; i++) {
        shape = shape + ' ';            // Insert a space to aline the triangle with the diamond
        for (j = 0; j < i + 1; j++) {
            shape = shape + character;
        }
        shape = shape + ' \n';
    }
    return shape;
}

/**
 * function for Diamond logic
 * @param {*} height 
 * @param {*} character 
 */
function printDiamond(height, character) {
    let shape = '';
    let halfwayPoint = (height - 1) / 2;
    let countDownStart = false;
    let count = 0;

    for (i = 0; i < height; i++) {
        numOfSpaces = halfwayPoint - count;

        // spaces before character
        for (j = 0; j < numOfSpaces + 1; j++) {
            shape = shape + ' ';
        }
        // print the character
        for (j = 0; j < (halfwayPoint + 1 + count) - (numOfSpaces); j++) {
            shape = shape + 'X';
        }
        /*// This code makes an interesting shape and I really don't want to forget about it. 
          // shape = <
        for (j = 0; j < (halfwayPoint + 1) - (numOfSpaces + count); j++) { shape = shape + 'X'; }*/

        // spaces after character
        for (j = 0; j < numOfSpaces + 1; j++) {
            shape = shape + ' ';
        }
        // check for when the buttom of the diamond has been hit. 
        if (!countDownStart) {
            count++;
            if (count > halfwayPoint) {
                countDownStart = true;
                count = count - 2;
            }
        } else {
            count--;
        }
        shape = shape + '\n';
    }
    return shape;
}

printShape('Square', 5, 'X');
printShape('Triangle', 5, 'X');
printShape('Diamond', 5, 'X');



// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
/**
 * 
 * @param {*} someObj 
 */
function traverseObject(someObj) {
    console.log(someObj);
}


// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
/**
 * 
 * @param {*} someArr 
 */
function deleteElement(someArr) {
    console.log(`Length of the array: ${someArr.length}`);
    // print array before "deleting" element
    console.log(someArr);
    if (someArr.length >= 3) {
        // assuming 'third element' = the second index. Also assuming that undefined = deleted element.
        someArr[2] = undefined;
    }
    console.log(`Length of the array: ${someArr.length}`);
    // print array after "deleting" element
    console.log(someArr);
}


// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
/**
 * 
 * @param {*} someArr 
 */
function spliceElement(someArr) {
    console.log(`Length of the array: ${someArr.length}`);
    // print array before splicing element
    console.log(someArr);
    if (someArr.length >= 3) {
        // assuming 'third element' = the second index
        someArr = someArr.splice(2, 1);;
    }
    console.log(`Length of the array: ${someArr.length}`);
    // print array before splicing element
    console.log(someArr);
}


// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	let john = new Person("John", 30);
/**
 * 
 * @param {*} name 
 * @param {*} age 
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let john = new Person("John", 30);

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	let john = getPerson("John", 30);
/**
 * 
 * @param {*} name
 * @param {*} age 
 */
function getPerson(name, age) {
    let person = {
        objAge: age,
        objName: name,
    };
    return person;
}
let john = getPerson("John", 30);