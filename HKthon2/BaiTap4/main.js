let arr = [3, 25, 38, 49, 12];
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] > arr[i]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  console.log(`${i + 1}.${arr}`);
  break;
}
