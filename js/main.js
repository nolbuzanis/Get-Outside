var distanceSpecified;

// Check to see if value is valid, a number, and greater than 0
function distanceValidation() {
    var value = document.getElementById('distance').value;
    if (!value || isNaN(value)) {
        console.log('No distance specified.');
    } else if (value == 0){
        console.log('Specify a value greater than zero.');
    }
    else {
        console.log(value + ' km entered');
    }
}

// When button is pressed, call distanceValidation function
document.getElementById('search').addEventListener('click', distanceValidation);

// Call distanceValidation function is enter key is pressed
document.getElementById('distance').addEventListener('keypress', function(e) {
    if (e.keyCode == 13) {
        distanceValidation();
    }
});
