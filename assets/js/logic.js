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
    appointmentColumnEl.addClass('table-secondary');
    appointmentColumnEl.append('<div class="input-group mb-3"> <input type = "text" class= "form-control" placeholder = "Enter details here..." aria - label="Enter details here..." aria - describedby="button-addon2">  <div class="input-group-append"> <button class="btn btn-outline-secondary" type="button" id="button-addon2">Save</button> </div> </div > ');
    // var saveButtonColumnEl = $('<td>');
    // saveButtonColumnEl.append('<button type="button" class="btn btn-primary btn-lg btn-block">Save</button>')
    timeslotRowEl.append(timeColumnEl, appointmentColumnEl);

    tableBodyEl.append(timeslotRowEl);


});