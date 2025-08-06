const arr = [6, 14, 12, 8, 5, 3, 34, 6, 15, 7];
function compare(pair1, pair2) {
  if (pair1 < pair2) {
    return pair1 - pair2;
  }
  if (pair1 > pair2) {
    return pair1 - pair2;
  }
  return pair1 - pair2;
}
arr.sort((pair1, pair2) => { return pair1 - pair2; })
console.log(arr)