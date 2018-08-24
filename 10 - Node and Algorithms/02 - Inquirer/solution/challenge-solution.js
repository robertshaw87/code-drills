var inquirer = require("inquirer")

var quotes = [
  {
    author: "Albus Dumbledore",
    quote: "It is our choices, Harry, that show what we truly are, far more than our abilities"
  },
  {
    author: "Sirius Black",
    quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals"
  }
]

start()

function start() {
  console.log("Welcome to the Quote Library!\n");
  mainMenu();
}

function mainMenu() {
  inquirer.prompt([
    {
      type: "list",
      name: "menuChoice",
      message: "What would you like to do?",
      choices: ["View a quote", "Add a quote", "Exit"]
    }
  ]).then(function (userChoice) {
    switch (userChoice.menuChoice) {
      case "View a quote":
        showQuotes();
        break;
      case "Add a quote":
        addQuotes();
        break;
      case "Exit":
        console.log("\n Goodbye! Come back soon!");
    }
  })
}

function showQuotes() {

  var authorChoices = [];
  for (var i=0; i<quotes.length; i++) {
    authorChoices.push(i + ") " + quotes[i].author);
  }
  inquirer.prompt([
    {
      type: "list",
      name: "authorChoice",
      message: "Show the quote from which author? ",
      list: authorChoices
    }
  ]).then(function(userChoice) {
    var index = authorChoices.indexOf(userChoice.authorChoice);
    console.log(quotes[index].quote);
    mainMenu();
  })
}

function addQuotes() {
  inquirer.prompt([
    {
      type: "input",
      name: "author",
      message: "Please input the author's name: "
    },
    {
      type: "input",
      name: "quote",
      message: "Please input the quote: "
    }
  ]).then(function(userInput) {
    quotes[userInput.author] = userInput.quote;
    console.log("Quote added!");
    mainMenu();
  })
}