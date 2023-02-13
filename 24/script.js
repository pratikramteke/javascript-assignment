const even = [];
const odd = [];

for (let i = 0; i <= 100; i++) {
  i % 2 == 0 ? even.push(i) : odd.push(i);
}

console.log(even);
console.log(odd);
