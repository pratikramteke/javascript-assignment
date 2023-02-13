let input = 5;
let output = "";
for (let i = 0; i < input; i++) {
  for (let j = input; j > i; j--) {
    output += "  ";
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    output += "* ";
  }
  output += "\n";
}
console.log(output);
