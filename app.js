// Bubblesort, morning exercise

function bubble (arr){
  let swap = true;
  while (swap === true){
    swap = false;
    for (i=0; i<arr.length-1; i++){
      if (arr[i] > arr[i+1]){
        tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
        swap = true;
      }
    }
  }
}

// simple object in JS -------------- //
// let obj = new Object() or let obj = {}

// let obj = new Object();
// let obj2 = {};
//
// let person = {
//   name : 'Max',
//   age : 26,
// };
//
// console.log(obj);
// console.log(person);


// complex object in JS ------------- //
// array/objects nested inside of an object

// let person = {
//   name : 'Max',
//   age : 26,
//   languages : ['Python', 'SQL', 'JavaScript'],
//   printName : function() {
//     return(this.name);
//   }
// };
//
// console.log(person.languages);
// console.log(person.printName());
//
// for (let i in person.languages){
//   console.log(`${person.printName()} knows ${person.languages[i]}`);
// }


// -------------- understanding the bind concept in JS ------------ //

// function logInfo() {
//   console.log(this.name);
// };
//
// let person = {name : 'Max'};
//
// let bound = logInfo.bind(person);
//
// bound();


// ==== Exercise #1 ======= //
/*
  Write a function that parses through the person object and displays all of their favorite teams as shown:
  'baseball: Boston Red Sox',
  'football: New England Patriots',
  'hockey: Boston Bruins',
  'soccer: New England Revolution',
  'soccer: France',
  etc....
  HINT: Access the keys of the object using Object.keys()
  HINT: To print an array of an array check the type with Array.isArray()
*/

// let person = {
//   name: "Max",
//   age: 26,
//   fav_color: "Green",
//   language: ["Javascript", "Python", "C#", "Java"],
//   team: {
//     baseball: "Boston Red Sox",
//     football: "New England Patriots",
//     hockey: ["Boston Bruins", "San Jose Sharks"],
//     soccer: ["New England Revolution", "France", "England", "Croatia"]
//   }
// };
//
// function printSports() {
//   let keys = Object.keys(this.team);
//   for (i=0; i<keys.length; i++){
//     if (Array.isArray(this.team[keys[i]])) {
//       for (j=0; j<this.team[keys[i]].length; j++){
//         console.log(`${keys[i]} : ${this.team[keys[i]][j]}`);
//       }
//     }
//     else {
//       console.log(`${keys[i]} : ${this.team[keys[i]]}`);
//     }
//   }
// }
//
// let bound = printSports.bind(person);
// bound();



// ======================== //


// object prototype -------------- //
// use the new keyword to create each instance
// introduce () => arrow functions

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//
//   this.printInfo = () => {
//     console.log(`${this.name} is ${this.age} years old.`);
//   }
// }
//
// let p = new Person('Max', 26);
// p.printInfo();


// variable name = parameters => functionality

// single line doesn't require return or curly braces
// let logSum = (x, y) => x+y;
//
// console.log(logSum(3,5));




// ======== Exercise #2 ======= //
/*
  Write an object prototype for a 'Car' that takes in a model, make, and year, and miles, has a 'printInfo' method, and also has a method that increments the car by 100 miles . Create two cars using the 'new' keyword, and print both of their info's and increment one cars miles by three hundred. Use arrow function syntax for both methods.
*/
// function Car(make, model, year, miles) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.miles = miles;
//
//   this.printInfo = () => console.log(`This ${this.year} ${this.make} ${this.model} has ${this.miles} miles.`);
//
//   this.addMileage = (num=100) => this.miles += num;
// }
//
// let moms = new Car('Subaru', 'Forester', '2015', 50000);
// let mine = new Car('Chrysler', 'PT Cruiser', '2009', 88000);
// moms.printInfo();
// mine.printInfo();
// mine.addMileage(300);
// mine.printInfo();


// ============================ //


// function closures ---------- //
// call right away with () at end

// let countUp = (function() {
//   let num = 0;
//   console.log(`Outside function num is ${num}.`);
//
//   return function() {
//     console.log(`Inside function num is ${num}.`);
//     return num++;
//   }
// })();
//
// countUp();
// countUp();
// countUp()


// classes ---------------- //
// define constructor and printInfo method

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   printInfo() {
//     console.log(`${this.name} is ${this.age} years old.`);
//   }
// }
//
// let p = new Person('Max', 26)
// p.printInfo();


// inheriting -------------- //
// using extends keyword inherit from class above
// use super() to assign variables declared in constructor

// class Animal extends Person {
//   constructor(name, age, species) {
//     super(name, age);
//     this.species = species;
//   }
//
//   printInfo() {
//     console.log(`${this.name} is ${this.age} years old and of the ${this.species} species.`);
//   }
// }
//
// let lion = new Animal('Simba', 6, 'Panthera Leo');
//
// lion.printInfo();


// importing classes ----------- //
// export default comes first, then import other classes
// import my_default, { Person, logMe } from './person.js';

// import default_func, { Person, API_KEY } from './person.js';
//
// let p = new Person('Max', 26);
//
// p.printInfo()
// console.log(API_KEY);
//
// default_func(3);


// ======== Exercise #3 ========== //
/*
  Create a car.js file, throw the Car class from above into it. Export it as default, and import it into this app.js file. Create a new Car object in this file, and call the printInfo method to make sure that you're importing correctly. Make sure that the Car class is commented out above.
*/

// import Car from './car.js';
// let twoSeater = new Car ('BMW', 'Z4', '2015', 30500);
// twoSeater.printInfo();



// =============================== //



// --------------- Javascript DOM Manipulation ------------ //

// Accessing an element by class name ------- //
// document.getElementsByClassName

// let links = document.getElementsByClassName('link');
//
// for (let i in links) {
//   console.log(links[i]);
// }

// Accessing an element by id ------------ //
// document.getElementById

// let current_page = document.getElementById('active');
// console.log(current_page);


// Setting an attribute with a selector ------ //

// let current_page = document.getElementById('active');
//
// current_page.setAttribute('style', "color:red");


// Getting all of a specific item -------- //
// navbar links
// document.querySelectorAll("nav ul li a");

// let anchors = document.querySelectorAll('nav ul li a');

// for (let i in anchors) {
//   console.log(anchors[i]);
// }




// Setting attributes for all links --------- //
// loop variable above, .style.color = red;

let anchors = document.querySelectorAll('nav ul li a');

for (let i in anchors) {
  anchors[i].style.fontSize = '32px';

  if ( i>= anchors.length-1) break;
}


// Appending text to a child ------------ //
// document.    createElement, createTextNode, appendChild
// loop all panels and add $34.99

let prices = document.getElementsByClassName('price');

let total = 10.00;
for (let i in prices) {
  let p = document.createElement('p');
  let text = document.createTextNode(`$${total}`);

  p.appendChild(text);

  prices[i].appendChild(p);

  if (i >= prices.length - 1) {
    break;
  }

  total += 10.00;
}


// Setting an event listener ---------- //
// document.   getElementById,  addEventListener, setAttribute

function toggleImage(e) {
  let img = document.getElementById('paris');
  let toggle_btn = document.getElementById('img-btn');
  if (img.style.display === 'none') {
    img.style.display =  'block';
    toggle_btn.innerText = 'Hide Image';
  } else {
    img.style.display = 'none'
    toggle_btn.innerText = 'Show Image';
  }
}

let toggle_btn = document.getElementById('img-btn');
toggle_btn.addEventListener('click', toggleImage);




// ------------------------------------------ //
// ------------------- jQuery --------------- //
// ------------------------------------------ //

// Changing the value of a form field ----- //
// $().val

$('#sport').val('baseball');


// Changing the attribute of an element ----- //
// $().attr

$('#paris').attr('style', 'max-width: 100px');


// Changing direct HTML on an element ------ //
// $().html

let person = {
  name : 'Max',
  age : 26
};

$('#test').html(`<b>${person.name}</b> is <i>${person.age}</i> years old.`);


// Changing or adding text ----------- //
// $().text

// $('body>p').text(`<b>${person.name}</b> is <i>${person.age}</i> years old.`);


// Adding a class to change the color -------- //
// $().addClass

$('#paris').addClass('img-center');


// adding our person class to show on index ---- //
// $().html with ``



// Changing img src --------------- //
// set string then access $().attr, $().css

$('#paris').attr('src', 'https://i.ytimg.com/vi/VwW0E2oAa-c/maxresdefault.jpg').css('max-width', '300px')


// Getting an input as it's typed --------------- //
// use $('id').keyup(function(e) { console.log($(this).val()); })

$('#sport').keyup(function(e) {
  let value = $(this).val();
  console.log(value);
})


// ----------------------------------- //



/*
  Exercise #1
  _________________________
  Create a form that allows for two inputs of numbers, and has two buttons of multiply and divide. When either button is clicked it should call the correct function and display the result below the form. Use jQuery to perform all the necessary DOM manipulation.
*/

let firstNumber = 0
let secondNumber = 0
let operator = ''

let add = document.getElementById('add');
add.addEventListener('click', addf);
let subtract = document.getElementById('subtract');
subtract.addEventListener('click', subtractf);
let multiply = document.getElementById('multiply');
multiply.addEventListener('click', multiplyf);
let divide = document.getElementById('divide');
divide.addEventListener('click', dividef);

function addf() {
  operator = 'PLUS';
  $('#quickMaths').html(parseInt(firstNumber) + parseInt(secondNumber));
}

function subtractf() {
  operator = 'SUBTRACT';
  $('#quickMaths').html(firstNumber - secondNumber);
}

function multiplyf() {
  operator = 'MULTIPLY'
  $('#quickMaths').html(firstNumber * secondNumber);
}

function dividef() {
  operator = 'DIVIDE';
  $('#quickMaths').html(firstNumber / secondNumber);
}

const evaluate = function(e){
  firstNumber = $('#number1').val();
  secondNumber = $('#number2').val();

  switch (operator) {
    case 'PLUS':
      $('#quickMaths').html(parseInt(firstNumber) + parseInt(secondNumber));
      break;
    case 'SUBTRACT':
      $('#quickMaths').html(firstNumber - secondNumber);
      break;
    case 'MULTIPLY':
      $('#quickMaths').html(firstNumber * secondNumber);
      break;
    case 'DIVIDE':
      $('#quickMaths').html(firstNumber / secondNumber);
      break;
    default:
      $('#quickMaths').html();
      break;
  }
}

$('#number1, #number2').keyup(() => evaluate())
$('#number1, #number2').change(() => evaluate())

// ======================================== //
