const nArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nArrayLength = nArray.length;
let initialValue = 0;

for (let i = 0; i < nArrayLength; i += 1) {
  initialValue += nArray[i];
}

console.log(initialValue);


const reduceInitial = 0;
const reducer = (old, current) => old + current;
const sum = nArray.reduce(reducer, reduceInitial);
console.log(sum);
