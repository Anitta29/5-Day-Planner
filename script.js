$(document).ready(function(){
var currentHour = moment().hours()
console.log(currentHour);
console.log(moment());

$(".saveBtn").on("click", function() {

    var value = $(this).siblings()[1].value
    console.log(value);

var time = $(this).parent().attr("id");
console.log(time)

var toDos = JSON.parse(window.localStorage.getItem("saveToDos")) || [];
toDos.push({time, value})


window.localStorage.setItem("saveToDos", JSON.stringify(toDos))

});


$(".time-block").each(function(){
var blockHour = parseInt($(this).attr("id"));

if (currentHour > blockHour) {
    $(this).addClass("past");
} else if (currentHour === blockHour) {
    $(this).addClass("present");
} else {
    $(this).addClass("future");
}
})

var saved = JSON.parse(window.localStorage.getItem("saveToDos"));

$(".reservation").each(function() {

    var id = $(this).parent().attr("id");

for (var i = 0; i < saved.length; i++) {

    var el = saved[i];
    if (id === el.time) {
        $(this).text(el.value);
    }
}
})

$("#today").text(moment().format('MMMM Do YYYY, h:mm:ss a'));



// localStorage.setItem(time, value);
// moment().format('MMMM Do YYYY, h:mm:ss a');













})