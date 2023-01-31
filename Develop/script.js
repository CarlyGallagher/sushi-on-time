//format in military time
let time = parseInt(dayjs().format('H'));

$(document).ready(function () {

  // set current day in header
  var current = dayjs();
  $('#currentDay').text(current.format('[Today is] MMMM dddd D, YYYY'));

  // sets items to local storage
  $('.saveBtn').click(function () {
    var timeBlockId = $(this).parent().attr('id');
    localStorage.setItem('timeBlockId', timeBlockId);

    value = $(this).siblings("textarea").val();
    textString = $(this).siblings("div").text();
    localStorage.setItem(textString, JSON.stringify(value));

  });

// creates the time block color and checks the time
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
        row.classList.add('present');

      } else if (time < rowHour) {
        row.classList.add('future');
      } else {
        row.classList.add('past');
      }
    }
// gets item from local storage
    $('#9 .description').val(localStorage.getItem('9AM'));
    $('#10 .description').val(localStorage.getItem('10AM'));
    $('#11 .description').val(localStorage.getItem('11AM'));
    $('#12 .description').val(localStorage.getItem('12pm'));
    $('#13 .description').val(localStorage.getItem('1pm'));
    $('#14 .description').val(localStorage.getItem('2pm'));
    $('#15 .description').val(localStorage.getItem('3pm'));
    $('#16 .description').val(localStorage.getItem('4pm'));
    $('#17 .description').val(localStorage.getItem('5pm'));

  });
});
