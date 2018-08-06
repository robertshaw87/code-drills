// Day 05
// Activity 05


// This is our password strength checker function. Refer to the README.md for
// instructions on the behavior.
function checkStrength(password) {
  // ----- Your code goes here -----







  // ----- End of your code area -----
}

// document.ready shorthand
$(function () {

  // click listener on the submit button
  $(document).on("click", "#password-button", function (event) {
    // This prevents the submit button from refreshing the page
    event.preventDefault();

    // Check the strength of the password and store the return value inside a variable
    var passwordStrength = checkStrength($("#password-input").val());

    // Clear the password input field after we have grabbed the value already
    $("#password-input").val("");
    
    // Display the result of the password check in our password strength div
    $("#password-strength").text(passwordStrength)

  })
})