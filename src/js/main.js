(function() {
  "use strict";
  document.addEventListener('DOMContentLoaded', function() {

calc();

function calc(){

  //
  // function addToDisplay(value) {
  //   var display = document.getElementById('ans');
  //   //var display = document.querySelector('#ans > input');
  //   var input = document.createTextNode(value);
  //   display.appendChild(input);
  //   //display.text = (display.text +  value);
  //
  // }
  // function getAns(value){
  //   var display = document.getElementById('ans').innerHTML;
  //   var result = eval(display);
  //   document.getElementById('ans').innerHTML = result;
  // }
var toggle = 0;
function addToDisplay(value) {
  var text = document.getElementById('ans');
  if(toggle == 1) {
    text.value = "";
  }
    text.value = (text.value + value);
    toggle = 0;

}

function getAns(){
  var display = document.getElementById('ans');
  var result = eval(display.value);
  display.value = result;
  toggle = 1;
}

// function getAns(){
//   var display = document.getElementById('ans');
//   var result = eval(display.value);
//   document.getElementById("ans").value = result;
//   toggle = 1;
// }


  //Listen for button clicks
  document.getElementById("1").addEventListener("click", function() {
    addToDisplay(this.value);
  });

   document.getElementById("2").addEventListener("click", function() {
   addToDisplay(this.value);
 });
   document.getElementById("3").addEventListener("click", function() {
   addToDisplay(this.value);
 });
   document.getElementById("4").addEventListener("click", function() {
   addToDisplay(this.value);
 });
   document.getElementById("5").addEventListener("click", function() {
   addToDisplay(this.value);
 });
   document.getElementById("6").addEventListener("click", function() {
   addToDisplay(this.value);
 });
   document.getElementById("7").addEventListener("click", function() {
   addToDisplay(this.value);
 });
   document.getElementById("8").addEventListener("click", function() {
   addToDisplay(this.value);
 });
   document.getElementById("9").addEventListener("click", function() {
   addToDisplay(this.value);
 });
   document.getElementById("0").addEventListener("click", function() {
   addToDisplay(this.value);
 });
   document.getElementById("plus").addEventListener("click", function() {
    addToDisplay(this.value);
  });
   document.getElementById("minus").addEventListener("click", function() {
   addToDisplay(this.value);
 });
   document.getElementById("divide").addEventListener("click", function() {
   addToDisplay(this.value);
 });
   document.getElementById("multiply").addEventListener("click", function() {
   addToDisplay(this.value);
 });
   document.getElementById("equals").addEventListener("click", function() {
   getAns();
 });
   document.getElementById("dot").addEventListener("click", function() {
   addToDisplay(this.value);
 });
 //   document.getElementById("AC").addEventListener("click", function() {
 //   addToDisplay(this.value);
 // });
   document.getElementById("C").addEventListener("click", function() {
   //document.getElementById('ans').innerHTML= "";
   var text = document.getElementById('ans');
   text.value = "";
 });
}
})
})();
