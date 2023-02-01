// Make sure document is ready
$(function () {
    console.log("ready!");

    // Assign elements to variables
    const currentDayEl = $('#currentDay');
    const tableBodyEl = $('#tableBody');

    // Get current date and insert into html page
    var now = moment();
    currentDayEl.text(now.format("dddd, MMMM Do"));

    // Add working hours into array so that you can adjust if necessary
    const workingHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

    // function to populate the page with rows that contain data
    function generateSchedule() {
        // for every item in the array make the necessary elements for a bootstrap table that displays the hour in an easy to read format
        workingHours.forEach(element => {
            var timeslotRowEl = $('<tr>');
            var timeColumnEl = $('<th>');
            timeColumnEl.attr('scope', 'row');
            timeColumnEl.text(element + ":00");
            var appointmentColumnEl = $('<td>');

            // Code to get current hour and compare it to each row that is created so that we can style it accordingly.
            var blockTime = parseInt(element);
            var currentHour = parseInt(moment().format("k"));
            console.log(currentHour, blockTime)

            if (blockTime < currentHour) {
                appointmentColumnEl.addClass('table-secondary');
            } else if (blockTime === currentHour) {
                appointmentColumnEl.addClass('table-danger');
            } else {
                appointmentColumnEl.addClass('table-success');
            }

            // Create an input field that have a save button. Give parent element an id equal to the array item
            appointmentColumnEl.append(`<div class="input-group mb-3 " id="${element}"> <input type = "text" class= "form-control" placeholder = "Enter details here..." aria - label="Enter details here..." aria - describedby="button-addon2">   <button class="btn btn-outline-secondary save-btn" type="button" id="button-addon2">Save</button>  </div > `);
            // add created elements into table
            timeslotRowEl.append(timeColumnEl, appointmentColumnEl);
            tableBodyEl.append(timeslotRowEl);

            // Create an onclick function to save content of row into local storage with the hour as the key and the inputted text as the value
            $('.save-btn').click(function () {
                var apppointmentText = $(this).siblings('.form-control').val();
                var apppointmentTime = $(this).parent().attr('id');
                console.log(apppointmentText, apppointmentTime);
                localStorage.setItem(apppointmentTime, apppointmentText);
            })
            // go into local storage and using created ids insert saved text into matching row
            $("#9 .form-control").val(localStorage.getItem("9"))
            $("#10 .form-control").val(localStorage.getItem("10"))
            $("#11 .form-control").val(localStorage.getItem("11"))
            $("#12 .form-control").val(localStorage.getItem("12"))
            $("#13 .form-control").val(localStorage.getItem("13"))
            $("#14 .form-control").val(localStorage.getItem("14"))
            $("#15 .form-control").val(localStorage.getItem("15"))
            $("#16 .form-control").val(localStorage.getItem("16"))
            $("#17 .form-control").val(localStorage.getItem("17"))

        });
    }




    // Created a button to clear the form to make it more useable. This wipes the local storage and generates the table from scratch
    $('#clearBtn').click(function () {
        localStorage.clear();
        $('#tableBody').empty();
        generateSchedule();
    })

    generateSchedule();

});