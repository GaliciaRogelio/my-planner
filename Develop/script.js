var tasks = {};

// variable to display the date and time 
var timeEl = document.getElementById("displayMoment");

// this is the format of the displayed date and time 
var nowMoment = moment().format('LLLL');
timeEl.innerHTML = nowMoment;

var createTask = function(taskText) {
    var taskLi = $("").addClass("due-today");
    

}

var auditTask = function(taskEl) {
    if (moment().isAfter(time)) {
        $(taskEl).addClass("past");
    };
};

// this is the variable that will save the tasks in local storage 
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}



// button to save the tasks in local storage 
$(".saveBtn").click(function() {
    console.log("btn was clicked");
})

$(".due-today").on("click", function() {
    var text = $(this)
    .text()
    .trim();

    var textInput = $("<textarea>")
    .addClass("due-today")
    .val(text);

    $(this).replaceWith(textInput);

    textInput.trigger("focus");
});