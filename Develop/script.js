var currentDay = document.querySelector("currentDay");
var schedule = document.querySelector(".container");

// using moment.js, display time dynamically
var now = moment().format('LL');

// Will display current day when page loads
$('#currentDay').html(now);

// Display an 9am - 5pm grid
var displayHours = function() {
    var time = [9, 10, 11, 12, 1, 2, 3, 4, 5];

    for (var i = 0; i = time.length; i++) {

        var grid = document.createElement("p");
        var put = grid.innerText = i + "pm";
        
        schedule.appendChild(put);
    }

    console.log(put);
}

var timeBlocks = function() {

    for (var i = 0; i < 8; i++) {


        // create submit field
        var task = document.createElement("input");
        task.className = "input-group-append ";

        // create a save button
        var save = document.createElement("button");
        save.className = "btn-primary saveBtn";

        // display the time
        var hours = moment().format("ha");
        console.log(hours);
        
        
        schedule.appendChild(task);
        schedule.appendChild(save);
        
    }
    
    
}

displayHours();
timeBlocks();
