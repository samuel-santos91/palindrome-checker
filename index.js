// CALL FUNCTION WITH A STRING FOR VERIFICATION

const palindrome = (str) => {
  let newStr = str.replace(/[^a-zA-Z0-9]/g, "");
  let lowCase = newStr.toLowerCase();

  let n = lowCase.length;
  let counter = 0;

  for (let i = 0; i < n; i++) {
    if (lowCase[i] == lowCase[n - 1 - i]) {
      counter++;
    } else {
      return console.log(`${str} is NOT a palindrome.`)
    }
    if (counter == n) {
      return console.log(`${str} IS a palindrome.`)
    }
  } 
}

//ADD STRING AND CALL FUNCTION

palindrome("string");

