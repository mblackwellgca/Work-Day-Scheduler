var saveBtnEl = document.getElementById('saveBtn');
var currentDayEl = document.getElementById('lead');
var hourEl = document.getElementById('hour');
var userTextEl = document.getElementById('description');
var timeBlockEl = document.getElementById('row');
var timeTracker = 
// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

saveBtnEl.addEventListener('click', saveText);

// save user input
function saveText(){

}


// Color code time blocks for past, present, future
// First, we need to track the current time before defining past, present, future
function timeTracker(){
    
}

// enter text into event

// save text in local storage

// refresh page, text still saved

