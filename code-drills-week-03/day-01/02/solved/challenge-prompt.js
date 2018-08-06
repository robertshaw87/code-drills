$(function () {
  $(document).on("click", "button", function (event) {
    event.preventDefault();

    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var occupation = $("#occupation").val();
    var city = $("#city").val();
    var state = $("#state").val();

    var nameDiv = $("<h3>").text(firstName + " " + lastName);
    var occupationDiv = $("<h4>").text(occupation);
    var locationDiv = $("<h4>").text(city + ", " + state);

    $("#display-area").append(nameDiv, occupationDiv, locationDiv);
  })
})