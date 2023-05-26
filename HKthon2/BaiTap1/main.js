// Tìm Giá trị Max
let arr = [-15, -25, -56, 55, -6, 9, -100, 9, 16, -10];
let max = arr[0];
let index = 0;
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
    index = i;
  }
}
console.log(`Vị trí max: ${index} Giá trị max: ${max}`);
