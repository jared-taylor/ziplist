function zipList(in1, in2) {
  const out = [];
  for (let i = 0; i < in1.length; i++) {
    out.push(in1[i]);
    out.push(in2[i]);
  }
  return out;
}

function zipTheEasyWay(in1, in2) {
  return _.flatten(_.zip(in1, in2));
}

const arr1 = [0, 1, 2, 3];
const arr2 = ['a', 'b', 'c', 'd'];

console.log(zipList(arr1, arr2));
console.log(zipList(arr1, arr2));
console.log(zipTheEasyWay(arr1, arr2));
