const currentDayEl = $('#currentDay');
const tableBodyEl = $('#tableBody');

// TODO: 3. Out of 365, what day of the year is today?
var now = moment();
currentDayEl.text(now.format("dddd, MMMM Do"));

const workingHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

workingHours.forEach(element => {
    var timeslotRowEl = $('<tr>');
    var timeColumnEl = $('<th>');
    timeColumnEl.attr('scope', 'row');
    timeColumnEl.text(element);
    var appointmentColumnEl = $('<td>');
    var saveButtonEl = $('<td>');
    timeslotRowEl.append(timeColumnEl, appointmentColumnEl, saveButtonEl);

    tableBodyEl.append(timeslotRowEl);
    console.log(timeslotRowEl);

});