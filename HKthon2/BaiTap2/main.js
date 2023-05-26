let str = " this is A tEst ";
str = str.trim();
let arr = str.split(" ");
for (let i = 0; i < arr.length; i++) {
  let newArr = arr[i];
  let firstText = newArr.charAt(0).toUpperCase();
  let resultText = newArr.slice(1).toLowerCase();
  arr[i] = firstText + resultText;
}
let newStr = arr.join(" ");
console.log(newStr);
let newIndex = newStr.length;
console.log(newIndex);
