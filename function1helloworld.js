/*Instructions:
Make a simple function call
greet that 
returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?

*/

//My Answer
// Write a function "greet" that returns "hello world!"
function greet() {
  return "hello world!";
}

//other answers

//a
const greet = () => "hello world";

//b
function greet() {
  var a = 0;
  var abc = [
    "a ",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var hello = [];
  var world = [];
  a++;
  a++;
  a++;
  a++;
  a++;
  a++;
  a++;
  a--;
  a++;
  hello.push(abc[a]);
  a++;
  a++;
  a--;
  a--;
  a--;
  a--;
  a--;
  hello.push(abc[a]);
  a++;
  a++;
  a++;
  a++;
  a--;
  a++;
  a++;
  a++;
  a++;
  hello.push(abc[a]);
  a++;
  a++;
  a--;
  a--;
  a++;
  a--;
  a = a;
  hello.push(abc[a]);
  a++;
  a--;
  a++;
  a++;
  a--;
  a++;
  a--;
  a++;
  a++;
  a--;
  a++;
  hello.push(abc[a]);

  a++;
  a++;
  a++;
  a++;
  a++;
  a++;
  a--;
  a++;
  a = a;
  a++;
  a++;
  world.push(abc[a]);
  a--;
  a--;
  a--;
  a--;
  a--;
  a--;
  a--;
  a--;
  a = a;
  world.push(abc[a]);
  a++;
  a++;
  a++;
  a--;
  a--;
  a--;
  a++;
  a++;
  a++;
  world.push(abc[a]);
  a--;
  a++;
  a--;
  a--;
  a--;
  a--;
  a++;
  a--;
  a--;
  a--;
  world.push(abc[a]);
  a--;
  a--;
  a--;
  a--;
  a--;
  a--;
  a--;
  a--;
  a++;
  a = a;
  a--;
  world.push(abc[a]);

  return hello.join("") + " " + world.join("") + "!";
}
