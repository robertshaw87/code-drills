// Finish the fuzzy_name function to pass all the tests

function removeDuplicates(arr) {
  const encountered = {};
  return arr.filter((elem, i) => {
    if (!encountered[elem]) {
      encountered[elem] = true;
      return true;
    } else {
      return false;
    }
  })
}

function cleanMissing(name) {
  console.log(name)
  let endIndex = name.length;
  for (var i=name.length-1; i>=0; i--) {
    if (name[i] === ",") {
      endIndex = i;
    }
    console.log(console.log(name[i]),endIndex)
  }
  return name.substring(0, endIndex);
}

function fuzzy_name(names, options){
  if (!names) return null;
  let namesArr = names.split(", ");
  let namesOutput = "";
  let numNames = namesArr.length -1;
  let lengthCheck = true;
  if (options) {
    if (options.length) {
      if (options.length > namesArr.length -1) {
        lengthCheck = false;
      }
      numNames = Math.min(options.length, namesArr.length-1);
    }
    if (options.sorted) {
      namesArr.sort();
    }
    if (options.unique) {
      namesArr = removeDuplicates(namesArr);
    }
  }
  if (namesArr.length === 1) return namesArr[0];
  for (var i = 0; i<numNames - 1; i++) {
    let currName = cleanMissing(namesArr[i]);
    namesOutput += currName + ", ";
  }
  if ((options && options.length && lengthCheck)) {
    const numLeft = namesArr.length - options.length;
    const othersFormatted = (numLeft === 1 ? "other" : "others")
    namesOutput += (namesArr[options.length-1] + " and " + numLeft + " " + othersFormatted);
  } else {
    namesOutput += namesArr[numNames-1] + " and " + namesArr[numNames];
  }
  console.log(namesOutput);
  return namesOutput;
}

// Testing
function test_zero_names(){
  return(fuzzy_name() == null);
}

function test_one_name() {
  var names = "Mickey";
  return(fuzzy_name(names) === "Mickey");
}

function test_two_names() {
  var names = "Mickey, Minnie";
  return(fuzzy_name(names) === "Mickey and Minnie");
}

function test_all_names() {
  var names = "Luke, Leia, Hahn, Chewie, Darth Vader";
  return(fuzzy_name(names) === "Luke, Leia, Hahn, Chewie and Darth Vader");
}

function test_three_names() {
  var names = "Luke, Leia, Hahn, Chewie, Darth Vader";
  return(fuzzy_name(names, {length: 3}) === "Luke, Leia, Hahn and 2 others");
}

function test_four_names() {
  var names = "Luke, Leia, Hahn, Chewie, Darth Vader";
  return(fuzzy_name(names, {length: 4}) === "Luke, Leia, Hahn, Chewie and 1 other");
}

function test_three_names_sorted() {
  var names = "Luke, Leia, Hahn, Chewie, Darth Vader";
  return(fuzzy_name(names, {length:3, sorted: true}) === "Chewie, Darth Vader, Hahn and 2 others");
}

function test_three_names_unique() {
  var names = "Luke, Leia, Hahn, Chewie, Darth Vader, Luke";
  return(fuzzy_name(names, {length:3, unique: true}) === "Luke, Leia, Hahn and 2 others");
}

function test_missing_names() {
  var names = "Luke, Leia,,, Darth Vader";
  return(fuzzy_name(names) === "Luke, Leia and Darth Vader");
}

function test_big_length() {
  var names = "Luke, Leia, Hahn, Chewie, Darth Vader";
  return(fuzzy_name(names, {length:100}) === "Luke, Leia, Hahn, Chewie and Darth Vader");
}

(function test_run(){
  var tests = [
    test_zero_names,
    test_one_name,
    test_two_names,
    test_all_names,
    test_three_names,
    test_four_names,
    test_three_names_sorted,
    test_three_names_unique,
    test_missing_names,
    test_big_length,
  ]
  var pass = 0;
  for (var i = 0; i < tests.length; i++){
    var test = tests[i];
    if (test()) { 
      console.info('Pass: '+ test.name); 
      pass++;
    }
    else { 
      console.warn('Fail: '+ test.name);
    }
    console.log('\n');
  }
  console.log("----------------------");
  console.log(pass + " of " + tests.length + " tests passing");

})();