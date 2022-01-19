task.js
// 62 Practice comparing different values
    // The compareEquality function in the editor compares two
    // values using the equality operator. Modify the function so
    // that it returns the string Equal only when the values are strictly equal
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");

// 63 Comparison with the Inequality Operator
    //   Add the inequality operator != in the if statement
    //   so that the function will return the string Not Equal
    //   when val is not equivalent to 99.
  function testNotEqual(val) {
    if (val!=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

// 64 Comparison with the Strict Inequality Operator
    // Add the strict inequality operator to the if statement 
    // so the function will return the string Not Equal when val
    // is not strictly equal to 17
    function testStrictNotEqual(val) {
        if (val!==17) { // Change this line
          return "Not Equal";
        }
        return "Equal";
      }
      
      testStrictNotEqual(10);   

// 65 Comparison with the Greater Than Operator
    // Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
  
    if (val>10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);

// 66 Comparison with the Greater Than Or Equal To Operator
    // Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

function testGreaterOrEqual(val) {
    if (val>=20) {  // Change this line
      return "20 or Over";
    }
  
    if (val>=10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);

// 67 Comparison with the Less Than Operator
    // Add the less than operator to the indicated lines so that the return statements make sense.
  function testLessThan(val) {
    if (val<25) {  // Change this line
      return "Under 25";
    }
  
    if (val<55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);

// 68 Comparison with the Less Than Or Equal To Operator
    // Add the less than or equal to operator to the indicated lines so that the return statements make sense.
    function testLessOrEqual(val) {
        if (val<=12) {  // Change this line
          return "Smaller Than or Equal to 12";
        }
      
        if (val<=24) {  // Change this line
          return "Smaller Than or Equal to 24";
        }
      
        return "More Than 24";
      }
      
    testLessOrEqual(10);

// 69 Comparisons with the Logical And Operator
    // Replace the two if statements with one statement, using the && operator, 
    // which will return the string Yes if val is less than or equal to 50 and 
    // greater than or equal to 25. Otherwise, will return the string No.
    function testLogicalAnd(val) {
        // Only change code below this line
      
        if (val<=50 && val >=25) {
            return "Yes";
        }
        // Only change code above this line
        return "No";
      }
      
      testLogicalAnd(10);

// 70 Comparisons with the Logical Or Operator
    // Combine the two if statements into one statement 
    // which returns the string Outside if val is not 
    // between 10 and 20, inclusive. Otherwise, return the string Inside.
function testLogicalOr(val) {
    // Only change code below this line
      
    if (val<10 || val>20) {
       return "Outside";
    }
    // Only change code above this line
    return "Inside";
}
      
    testLogicalOr(15);

// 71 Introducing Else Statements
    //Combine the if statements into a single if/else statement.
    function testElse(val) {
        let result = "";
        // Only change code below this line
      
        if (val > 5) {
          result = "Bigger than 5";
        } else {
          result = "5 or Smaller";
        }
      
        // Only change code above this line
        return result;
      }
      
      testElse(4);
    
// 72 Introducing Else If Statements
    // Convert the logic to use else if statements.
    function testElseIf(val) {
        if (val > 10) {
          return "Greater than 10";
        } else if (val < 5) {
          return "Smaller than 5";
        } else {return "Between 5 and 10";}
      }
      
      testElseIf(7);

// 73 Logical Order in If Else Statements
    //Change the order of logic in the function so that it will return the correct statements in all cases.
    function orderMyLogic(val) {
        if (val < 5) {
          return "Less than 5";
        } else if (val < 10) {
          return "Less than 10";
        } else {
          return "Greater than or equal to 10";
        }
      }
      
      orderMyLogic(7);

// 74 Chaining If Else Statements
    // Write chained if/else if statements to fulfill the following conditions:
    //num < 5 - return Tiny
    //num < 10 - return Small
    //num < 15 - return Medium
    //num < 20 - return Large
    //num >= 20 - return Huge
    function testSize(num) {
        // Only change code below this line
      if (num < 5) {
         return 'Tiny'
      } else if (num < 10) {
         return 'Small'
      } else if (num < 15) {
        return 'Medium'
      } else if (num < 20) {
         return 'Large'
      } else  if (num >= 20) {
        return 'Huge'
      } else
        return "Change Me";
        // Only change code above this line
      }
      
      testSize(7);

// 75 Golf Code
    // In the game of golf, each hole has a par, meaning, 
    // the average number of strokes a golfer is expected to make in order 
    // to sink the ball in the hole to complete the play. Depending on how 
    // far above or below par your strokes are, there is a different nickname.

    // Your function will be passed par and strokes arguments. 
    // Return the correct string according to this table which lists
    // the strokes in order of priority; top (highest) to bottom (lowest):

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if(strokes===1) {
    return names[0]
    } else if(strokes<= par - 2) {
    return names[1]
    }
    else if(strokes== par - 1) {
    return names[2]
    }
    else if(strokes==par) {
    return names[3]
    }
    else if(strokes==par + 1) {
    return names[4]
    }
    else if(strokes==par + 2) {
    return names[5]
    }
    else if(strokes>= par + 3) {
    return names[6]
    } else {return "Change Me";}

  // Only change code above this line
}

golfScore(5, 4);

// 76 Selecting from Many Options with Switch Statements
    // Write a switch statement which tests val and sets answer for the following conditions:
    //1 - alpha
    //2 - beta
    //3 - gamma
    //4 - delta

    function caseInSwitch(val) {
        let answer = "";
        // Only change code below this line
      
      switch(val) {
        case 1:
        answer='alpha';
        break;
        case 2:
        answer="beta";
        break;
        case 3:
        answer="gamma";
        break;
        case 4:
        answer="delta";
        break;
        }
        // Only change code above this line
        return answer;
      }
      
      caseInSwitch(1);

// 77 Adding a Default Option in Switch Statements
// Write a switch statement to set answer for the following conditions:
//a - apple
//b - bird
//c - cat
//default - stuff

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = 'apple';
      break;
    case 'b':
      answer = "bird";
      break;
    case 'c':
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  // Only change code above this line
  return answer;
}

switchOfStuff(1);

// 78 Multiple Identical Options in Switch Statements
 // Write a switch statement to set answer for the following ranges:
//1-3 - Low
//4-6 - Mid
//7-9 - High

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);

// 79 Replacing If Else Chains with Switch
    // Change the chained if/else if statements into a switch statement.
    function chainToSwitch(val) {
        let answer = "";
        // Only change code below this line
      
      switch(val) {
        case "bob":
        answer = "Marley";
        break;
        case 42:
        answer = "The Answer";
        break;
        case 1:
        answer = "There is no #1";
        break;
        case 99:
        answer = "Missed me by this much!";
        break;
        case 7:
        answer = "Ate Nine";
        break;
      }
        // Only change code above this line
        return answer;
      }
      
      chainToSwitch(7);

// 80 Returning Boolean Values from Functions
    // Fix the function isLess to remove the if/else statements.

    function isLess(a, b) {
        // Only change code below this line
       return a < b
        // Only change code above this line
      }
      
      isLess(10, 15);

// 81 Return Early Pattern for Functions
    //Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

function abTest(a, b) {
    // Only change code below this line
  
  if (a < 0 || b < 0) {
    return undefined
  }
    // Only change code above this line
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);

// 82 Counting Cards
  //