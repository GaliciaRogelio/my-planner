
// array of html components and sections 
var dailyTask = [
    {
        id: "0",
        hour: "07",
        time: "07",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "08",
        time: "08",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "10",
        time: "10",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "4",
        hour: "11",
        time: "11",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "1",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "03",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "04",
        time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "06",
        time: "18",
        meridiem: "pm",
        reminder: ""
    },
    
];

// function to format the date on the header 
function dateEl() {
    var dateFormat = moment().format('LLLL');
    $("#currentDay").text(dateFormat);
};

// stores the tasks into local storage
function saveTasks() {
    localStorage.setItem("dailyTask", JSON.stringify(dailyTask));
};

// it sets data in local storage 
function showMyReminders() {
    dailyTask.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
};

// sets any existing localStorage data to the view if it exists
function loadTasks() {
    var storeDailyTask = JSON.parse(localStorage.getItem("dailyTask"));

    if (storeDailyTask) {
        dailyTask = storeDailyTask;
    }
// recall the functions to save tasks 
    saveTasks();
    showMyReminders();
}

// recalls the header date
dateEl();

// function to display elements into html container 
dailyTask.forEach(function(thisHour) {
    // creates timeblocks row
    var timeblockHour = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(timeblockHour);

    // creates time field
    var timeField = $("<div>")
        .text(`${thisHour.hour}${thisHour.meridiem}`)
        .attr({
            "class": "col-md-2 hour"
    });

    // creates schdeduler data
    var scheduleHour = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
        });
    var storeTextareaData = $("<textarea>");
    scheduleHour.append(storeTextareaData);
    storeTextareaData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("HH")) {
        storeTextareaData.attr ({
            "class": "past", 
        })
    } else if (thisHour.time === moment().format("HH")) {
        storeTextareaData.attr({
            "class": "present"
        })
    } else if (thisHour.time > moment().format("HH")) {
        storeTextareaData.attr({
            "class": "future"
        })
    }

    // variable to create a save button in index 
    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var clickSaveBtn = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    clickSaveBtn.append(saveButton);
    timeblockHour.append(timeField, scheduleHour, clickSaveBtn);
})

// loads tasks from local storage 
loadTasks();


// saves data to be used in localStorage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    dailyTask[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveTasks();
    showMyReminders();
});