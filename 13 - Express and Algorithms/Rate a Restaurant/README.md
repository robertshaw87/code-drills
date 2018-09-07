# Express

## Rate-a-restaurant
Let's build a full-stack app!!!

## Overview

Rate-a-restaurant is an application that allows the user to enter information about a restaurant, and then to rate that restaurant.

<img src="demo.png">

## Instructions

### Organize The Data

1. Navigate to the `data` folder and open `schema.sql`.

2. Create a database, a table and 3 seeds.
- The database should be called restaurantsDB.
- The table should be called restaurants.
- The table should contain 5 columns: id (primary key, auto incrementing), a name, a link to the restaurants website, an image from the web, and a rating.
- Name the above columns as you see fit.
- Seed the file with three restaurants (rows).

3. Copy your schema file into MySQL workbench, and run it. 

4. Navigate to `server.js`. You will find the instructions repeated, step-by-step there. You will be asked to: 
- Require and install some packages (specified in server.js)
- Configure the database to your own settings
- Render two different HTML pages at two different routes
- Create three API routes

- Make sure that these routes behave as you expect them to. You can provide these routes with dummy data in order to test them. 

5. Finally, navigate to app.js and follow the instructions there. You will be asked to:
- Render components based on our query to our database.
- Allow the use to update the rating of a restaurant. 
- Allow the use to add new restaurants.

6. You're all done!!!


Note: You do not need to touch any of the HTML files, style.css or stars.js

