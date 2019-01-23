---
layout: post
title:  "JavaScript Basics"
date:   2018-08-06 21:44:49 +0530
categories: javascript
---

### JavaScript is a scripting language. A scripting language is a light-weight programming language. Outside of browser JavaScript provide an environment for programming. They can be written right in the HTML and execute automatically as the page loads.

### The Advantages of JavaScript
Minimum syntax (Easy to learn)
Quick development
It has the procedural capability
Easy to debugging and testing
Platform independence
Writing JavaScript into HTML:-

### JavaScript syntax is embedded into an HTML file. The browser takes this information using the HTML tag script. The <script> marks the beginning of a scripting code and </script> marks the end of the scripting code.

```
<script  type="text/javascript">
(Body)
</script>
```

## Variable Declaration:-
### Variable means anything that can vary. JavaScript includes variables which “store value” for data and it can be changed or constant according to a reserved keyword.
### JavaScript uses the reserved keyword var, let and const to declare a variable. A variable must have a unique name. You can assign a value to a variable using equal to (=) operator when you declare it or before using it.


variable declaration using var keyword
Data Types:-
In JavaScript, there are two different kinds of data: primitives, and objects. A primitive is simply a data type that is not an object and has no methods. In JS, there are six primitive data types, that is String, Number, Boolean, Null. Undefined, Symbol.

String:- A string is a sequence of one or more characters (letters, numbers, symbols). In JavaScript, strings exist within either single quotes ' or double quotes “ so as to create a string, enclose a sequence of characters in quotes:
Example:-

var name = “sam”;
var age = "42";
Number:- The Number is a primitive data type in JavaScript. Number data type represents an integer, float, hexadecimal, octal or exponential value. Number data types have no quotes.
Example:

var age = 42;
var point = 42.20;
Boolean:- The Boolean data type can be one of two values, either true or false. Think of a boolean as an on/off or a yes/no switch.
Example:

var isEven = true;
var isOdd = false;
Null:- Null has one value: null. It is explicitly nothing.
Example:

var student = null;
Undefined:- A variable that has no value is undefined.
Example:

var student;
Symbol:- Symbols are new in ES6. A Symbol is an immutable primitive value that is unique. For the sake of brevity, that is the extent that this article will cover Symbols.
const mySymbol = Symbol('mySymbol');
Objects:- Objects are not a primitive dataType. The JavaScript object data type can contain many values as “name: value” pairs. The object literal is a simple way of creating an object using { } brackets. In object data type, a variable is called key.
Example:

ar student = { name = "sam" ,
                age = 42 };
Operators:-
An operator is used to transform one or more values into a single resultant value. The values to which the operator is applied is referred to as operands. A combination of an operator and its operands is referred to as an expression.



Conditional Checking:-
The conditional statement in javascript offers a simple way to make a decision. It will either return a true value or a false value, depending upon how the condition evaluated.

Syntax:

if(condition) {
(Body)
}

The conditional expression (Ternary operator):

Javascript support the conditional expression operator they are ? and : . The conditional expression operator is a ternary operator because it takes two operators in three parts.

Syntax:

condition  ?  true value  :  false value ;
Looping:-
Looping refers to the ability of a block of code to repeat itself. Javascript offers many types of looping structure.

for loop:

Syntax:

for( initial value ; condition ; increasing/decreasing value) {
(Body)
}
While loop:

Syntax:

while(condition) {
(Body)
}
Function:-
a function is also a block of javascript code, it stores actions. That performs a specific task and after return a value. A javascript function may take zero or more parameters, these are a standard technique via which control data passed to a function. Control data passed to a function processed that data and return a value.


Comments:-
Comments make code easy to understand It can be used to elaborate the code so that user can easily understand the code. It can also be used to avoid the code being executed. Sometimes, we add the code to perform some action. But after some time, there may need to disable the code. In such a case, it is better to use comments.

// single line comment
/* multiple line comments */
Coding Style:-
