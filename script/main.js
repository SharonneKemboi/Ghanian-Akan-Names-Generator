let malenames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femalenames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


// Returned values after calling functions//
function calculate() {

var DD = document.getElementById("day").value;
var year = document.getElementById("year").value;
var MM = document.getElementById("month").value;
var female = document.getElementById("firstgender").checked;
var male = document.getElementById("secondgender").checked;


//use the syntax array.slice(start, end)-method that accepts two optional parameters
var YY = year.slice(0, 2);
var YY = year.slice(2, 4);
var CC = (YY - 1) / 100 + 1;
var output= parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

//use else if

if (document.getElementById("firstgender").checked) {
  var gender = 'female';

} else {
  var gender = 'male';

}
if (MM < 1 || MM > 12 || MM == 2 && DD > 29) {
  alert("INVALID MONTH");
} else if (DD < 1 || DD > 31) {
  alert("INVALID DAY");
}

//female function ----use of if statement
if (female) {
  if (output == 1) {
    document.getElementById("output").innerHTML =
    alert("Hey Beautiful!! You came into this world on a Monday and your Special Akan name is: " + femalenames[1]);
} else if (output == 2) {
  document.getElementById("output").innerHTML =
    alert("Hey Beautiful!! You came into this world on a Tuesday and your Special Akan name is: " + femalenames[2]);
} else if (output == 3) {
  document.getElementById("output").innerHTML =
    alert("Hey Beautiful!! You came into this world on a Wednesday and your Special Akan name is:" + femalenames[3]);
} else if (output == 4) {
  document.getElementById("output").innerHTML =
    alert("Hey Beautiful!! You came into this world on a Thursday and your Special Akan name is: " + femalenames[4]);
} else if (output == 5) {
  document.getElementById("output").innerHTML =
    alert("Hey Beautiful!! You came into this world on a Friday and your Special Akan name is: " + femalenames[5]);
} else if (output == 6) {
  document.getElementById("output").innerHTML =
    alert("Hey Beautiful!! You came into this world on a Saturday and your Special Akan name is: " + femalenames[6]);
} else if (output == 0) {
  document.getElementById("output").innerHTML =
    alert("Hey Beautiful!! You came into this world on a Sunday and your Special Akan name is: " + femalenames[0]);
}
}


//Male function
else if (male) {
  if (output == 1) {
    document.getElementById("output").innerHTML =
    alert("Hello handsome! You were born on a Monday and your special Akan name is " + malenames[1]);
} else if (output == 2) {
  document.getElementById("output").innerHTML =
    alert("Hello handsome! You were born on a Tuesday and your special Akan name is  " + malenames[2]);
} else if (output == 3) {
  document.getElementById("output").innerHTML =
    alert("Hello handsome! You were born on a Wednesday and your special Akan name is " + malenames[3]);
} else if (output == 4) {
  document.getElementById("output").innerHTML =
    alert("Hello handsome! You were born on a Thursday and your special Akan name is " + malenames[4]);
} else if (output == 5) {
  document.getElementById("output").innerHTML =
    alert("Hello Handsome! You were born on a Friday and your special Akan name is " + malenames[5]);
} else if (output == 6) {
  document.getElementById("output").innerHTML =
    alert("Hello Handsome! You were born on a Saturday and your special Akan name is " + malenames[6]);
} else if (output == 0) {
  document.getElementById("output").innerHTML =
    alert("Hello handsome! You were born on a Sunday and your special Akan name is " + malenames[0]);
}
} else {
alert("Enter Your Details Below!");
}
}
    


$(document).ready(function () {
// Listen to submit event on the <form> itself!
$('#akanform').submit(function (b) {

  // Prevent form submission which refreshes page
  b.refreshPage();

});
});
