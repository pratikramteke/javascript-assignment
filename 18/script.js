const getDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};

const daysInFebruary = getDays(2022, 2);
console.log(daysInFebruary);
