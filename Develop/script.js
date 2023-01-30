let currentDate = new Date();
let time = currentDate.getHours() + ":" + currentDate.getMinutes();
console.log(time);

$(document).ready(function () {

  // set current day in header
  var current = dayjs();
  $('#currentDay').text(current.format('[Today is] MMMM dddd D, YYYY'));

  // sets items to local storage
  $('.saveBtn').click(function () {
    preventDefault();
    var timeBlockId = $(this).parent().attr('id');
    localStorage.setItem('timeBlockId', timeBlockId);

    value = $(this).siblings("textarea").val();
    textString = $(this).siblings("div").text();
    localStorage.setItem(textString, JSON.stringify(value));

  });


  var rows = document.getElementsByClassName("row");
  Array.from(rows).forEach(row => {
    let
      rowIdString = row.id,
      rowHour;
    if (rowIdString) {
      rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
      // Compares row id to current hour and sets color accordingly
      if (time === rowHour) {
        setColor(row, "red");
      } else if ((time < rowHour) && (time > rowHour - 6)) {
        setColor(row, "green");
      } else if ((time > rowHour) && (time < rowHour + 6)) {
        setColor(row, "lightgrey");
      } else {
        setColor(row, "white");
      }
    }
    function setColor(element, color) {
      element.style.backgroundColor = color;
    }

  });
});
