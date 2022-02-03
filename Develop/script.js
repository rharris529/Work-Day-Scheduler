var currentDay = document.querySelector("currentDay");
var task = document.getElementById("saveBtn");

// using moment.js, display time dynamically
var now = moment().format('LL');

// Will display current day when page loads
$('#currentDay').html(now);

// Function to save task to local storage
var save = function() {

}

