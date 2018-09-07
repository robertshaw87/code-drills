$(document).ready(function () {

    // This helper function takes in the name, link, image url, id, and rating for a restaurant and renders that restaurant card to the DOM. You will not need to change this function.
    function renderCards(name, link, img, id, rating) {
        $(".restaurants").append("<div class='col-md-4'><div class='restaurant-card'><h3>" + name + "</h3><a href='"+ link +"'> <img class='restaurant__img' src=" + img +"></a><div id='"+ id +"' class='rating-contain'><div class='stars-contain stars1' value='1'><i class='fa fa-star stars' aria-hidden='true'></i></div><div class='stars-contain stars2' value='2'><i class='fa fa-star stars' aria-hidden='true'></i></div><div class='stars-contain stars3' value='3'><i class='fa fa-star stars' aria-hidden='true'></i> </div><div class='stars-contain stars4' value='4'><i class='fa fa-star stars' aria-hidden='true'></i></div><div class='stars-contain stars5' value='5'><i class='fa fa-star stars' aria-hidden='true'></i><p>rating</p></div></div> </div></div>")
        for (var j = 0 ; j < 5 ; j++) {
        var childStars = $("#"+(id)).children()[j]
        var starVal = parseInt($(childStars).attr("value"))
            if (starVal === rating){
                $(childStars).addClass("star-click")
                $(childStars).prevAll().addClass("star-click")
            }
        }
    }




// TO DO: Create a GET route at /api/restaurants. For every restaurant in the response, call the renderCards function, passing it the restaurant's name, link, image, id and rating. This renders cards for all our restaurants


// TO DO: When the element with the class `stars-contain` is clicked on, grab the id of the star (look into jquery's .parent() method) as well as the value of the star. NOTE: These elements are dynamically generated.


// TO DO: Create a PUT route which sends the values we grabbed in the previous step to our server via the url. (Thin req.params). This allows the user to update the rating of the restaurant.


// TO DO: When the form with the ID of newRestaurant is submited, grab the values of all the inputs in the form and store them in an object.

// TO DO: Create a POST route to /api/restaurants/new, sending the object we created in the last step. This adds a new restaurant to the database.


})