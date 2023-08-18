let reverseString = (inputString) => inputString.split('').reverse().join('');
let inputString = "hello";
let reversedString = reverseString(inputString);
console.log(reversedString);





function solution(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let sum1 = numbers.reduce((sum, num) => sum + num, 0);
    let sum2 = sum1 / numbers.length;
    return sum2;
}
let numbers = [5, 24, 86, 12];
let avg = solution(numbers);
console.log(`итог: ${avg}`);





let array = ["name", "John", "lastname", "Black", "age", "23"];
let resultObject = {};
for (let i = 0; i < array.length; i += 2) {
    let key = array[i];
    let value = array[i + 1];
    resultObject[key] = value;
}
console.log(resultObject);





let data = [null, 123, undefined, null, 'qwerty', 34, 65, undefined, null, null, 43, 'aerg', 'пкцйк', null, 'uioo'];
let groupedByType = {};
data.forEach(item => {
    let type = typeof item;
    if (!groupedByType[type]) {
        groupedByType[type] = [];
    }
    groupedByType[type].push(item);
});
let sortedArrays = Object.values(groupedByType).sort((a, b) => a.length - b.length);
console.log(sortedArrays);