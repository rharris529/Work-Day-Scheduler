var currentDay = document.querySelector("currentDay");

var hourSegmentsArr = [
    {
        hour: "9:00 AM",
        task: ""
    },
    {
        hour: "10:00 AM",
        task: ""
    },    {
        hour: "11:00 AM",
        task: ""
    },    {
        hour: "12:00 PM",
        task: ""
    },    {
        hour: "1:00 PM",
        task: ""
    },    {
        hour: "2:00 PM",
        task: ""
    },    {
        hour: "3:00 PM",
        task: ""
    },    {
        hour: "4:00 PM",
        task: ""
    },    {
        hour: "5:00 PM",
        task: ""
    },
];

// Render the page
function createBlocks() {
    var timeSegments = saveInStorage();

    let timeSegement = "";

    let index = 0;

    timeSegments.forEach((block) => {
        const time = block.hour;

        const dailyTask = block.task;

        const segmentHTML = `<form class="row time-block"><div class="col-2 hour">${time}</div><textarea id="text-area-${index}" dataAttr="text-area">${dailyTask}</textarea><button id="save-button${index}" dataAttr="save-button${index}" class="col-1 saveBtn"><i dataAttr="save-button${index}" class="far fa-save fa-lg"></i></button></form>`;

        timeSegement+= segmentHTML;
        index++;
    });

    $("#container").html(timeSegement);

    const buttons = document.getElementsByClassName("saveBtn");

    var saveButtons = Array.prototype.slice.call(buttons);

    saveButtons.forEach((button) => {
        if (typeof button === "object") {
            document.getElementById(button.id).addEventListener('click', saveTask);
        }
    })
}

// Function to save task to local storage
function saveTask(e) {
    e.preventDefault();

    const previousItems = saveInStorage();

    const numberString = e.target.getAttribute('dataAttr').split("")[11];

    const parseString = parseInt(numberString);

    const taskString = $('#text-area-'+numberString).val();

    previousItems[parseString].task = taskString;

    localStorage.setItem('hourSegments', JSON.stringify(previousItems));
}

function saveInStorage() {
    let hourSegments = JSON.parse(localStorage.getItem('hourSegments'));

    if(!hourSegments) {
        hourSegments = hourSegmentsArr;
    }
    return hourSegments;
};

// using moment.js, display time dynamically
var now = moment().format('LL');

// Will display current day when page loads
$('#currentDay').html(now);

createBlocks();
