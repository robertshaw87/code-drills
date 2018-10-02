// Bracket Checker


// `checkBracket` takes in a string and returns whether the configuration of brackets within that string is valid
const checkBracket = (str) => {
  // -------------------- Your Code Here --------------------
  // Create an object of the opening parenthesis associated with their corresponding closing parenthesis
  // We will be using this to check the 
  const opening = {
    "{": "}",
    "(": ")",
    "[": "]"
  }
  const closing = {
    "}": "{",
    ")": "(",
    "]": "["
  }
  const bracketStack = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (opening[char]) {
      bracketStack.push(opening[char]);
    } else if (closing[char]) {
      if (bracketStack.length === 0 ||
          bracketStack[bracketStack.length-1] !== char)
        return false;
      else bracketStack.pop();
    }
  }
  return bracketStack.length === 0;  
  // --------------------- End Code Area --------------------
}


// Tests
// All tests should console log `true`
var test = "{}ja(jd)a[jid(ajd{bofd{(d)}jqd}gf)]";
// ------------------------------------------------------------
console.log("==================== Test 1 ====================");
console.log(checkBracket(test));

// ------------------------------------------------------------
console.log("==================== Test 2 ====================");
console.log(checkBracket("{}()[]"));

// ------------------------------------------------------------
console.log("==================== Test 3 ====================");
console.log(checkBracket("}{") === false);

// ------------------------------------------------------------
console.log("==================== Test 4 ====================");
console.log(checkBracket("[(])") === false);
