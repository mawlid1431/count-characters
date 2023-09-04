// Good Luck 💪🏾  



function count(char, str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

// Example usages:
console.log(count("a", "fikrcamp")); // Output: 1
console.log(count("c", "bootcamp")); // Output: 1
console.log(count("o", "fikrcamp coding bootcamp")); // Output: 3

