let input = "June";
console.log("The Season is", getSeason());

function getSeason() {
  if (input == "September" || input == "October" || input == "November") {
    return "Autumn";
  }
  if (input == "December" || input == "January" || input == "February") {
    return "Winter";
  }
  if (input == "March" || input == "April" || input == "May") {
    return "Spring";
  }
  if (input == "June" || input == "July" || input == "August") {
    return "Summer";
  }
}
