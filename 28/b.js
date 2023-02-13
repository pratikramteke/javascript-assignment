let input = 3;
let output = "";
for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= input; j++) {
    output += "* ";
  }
  output += "\n";
}
console.log(output);
