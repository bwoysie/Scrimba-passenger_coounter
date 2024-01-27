//document.getElementById('count-el').innerText = 6 

// let count = 0;
// console.log(count)
// let myAge = 66;
// console.log(myAge)
// let humanDogRation = (7 * 2)
// console.log(humanDogRation)
// myDogAge = myAge * humanDogRation
// console.log(myDogAge)
// let bonusPoints = 50;
// bonusPoints = 100;
// bonusPoints = 25;
// bonusPoints = 75;
// bonusPoints = bonusPoints -75
// console.log(bonusPoints)

//step 1 initialize the count
  //let count = o
//step 2 listen for a click on the button
  //..this means writing an onclick attribute in the html and setting 
  //..it to a function
//step 3 increment the count varible when the button is clicked
//change the count-el in the HTML to reflect the new count


// let count = 0;

// function increment() {
//   console.log("the button was clicked")
// }

//Creating a function to that logs out the number 42 to the console
// call or invoke the function

// function fortyTwo() {
//   console.log(42)
// }

// fortyTwo()

// //creating a function that logs out the sum of all the lap times

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function palSum(){
//   console.log( lap1+lap2+lap3)
// }
//  palSum()

//  let lapsCompleted = 0;

//  function lapsIncrement(){
 
//   lapsCompleted = lapsCompleted + 1

//  } 
// lapsIncrement()
// lapsIncrement()
// // lapsIncrement()
//  console.log(lapsCompleted)


//step 1 initialize the count
  //let count = o
//step 2 listen for a click on the button
  //..this means writing an onclick attribute in the html and setting 
  //..it to a function
//step 3 increment the count varible when the button is clicked
   //..check it in the console
//change the count-el in the HTML to reflect the new count
   //.. first grab it by its Id ..set it to a variable..then change its innertext
   //.. to be the count variable that you established and set the onclick funtion 
   //.. to change and record the count

const saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')
let count = 0;


//check in console
console.log(countEl)

function increment() {
  // console.log('I clicked the button')
  count += 1
  countEl.textContent = count
  // console.log(count)
}

//to create a function called save which logs out the count when it is called
// in the HTML create a save button and give it a save-btn attribute 
// the call the save() when it is clicked


// console.log(saveEl)

function save(){
  let countStr = count + " - "
  //1. grab the save-el paragraph and store it in a variable called Save-el
  //2.Create a variable that contains both the count and the dash seperator
  //i.e "12-3"
  //3.render the variable in the saveEl using innerText
  saveEl.textContent += countStr;

  //Make sure to not delete the existing content of the paragraph
  // console.log(count)

  //when you are ready to reset the counter simply grab the countEl and reset it
  countEl.textContent = 0;
  count= 0;
}
   
