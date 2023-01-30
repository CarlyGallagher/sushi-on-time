

$(document).ready(function () {

  var current = dayjs();
  $('#currentDay').text(current.format('[Today is] MMMM dddd D, YYYY'));

  $('.saveBtn').click(function () {
    var timeBlockId = $(this).parent().attr('id');
    localStorage.setItem('timeBlockId', timeBlockId);

    value = $(this).siblings("textarea").val();
    textString = $(this).siblings("div").text();
    localStorage.setItem(textString, JSON.stringify(value));

    
    
  });

let currentDate = new Date();
let time = currentDate.getHours() + ":" + currentDate.getMinutes();
console.log(time);

});
