const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}
shoppingCart.filter(removeValue);
shoppingCart.forEach(function (item, i) {
  if (item == "Tea") shoppingCart[i] = "Green Tea";
});
console.log(shoppingCart);

function removeValue(value, index, arr) {
  // If the value at the current array index matches the specified value (2)
  if (value === "Honey") {
    // Removes the value from the original array
    arr.splice(index, 1);
    return true;
  }
  return false;
}
