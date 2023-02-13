const getDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};

const daysInOctober = getDays(2022, 10);
console.log(daysInOctober);
