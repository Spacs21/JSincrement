function findShort(s){
    const words = s.split(' ');
    const lengths = words.map(word => word.length);
    return Math.min(...lengths);
}

function findSmallestInt(arr) {
    return Math.min(...arr);
}

function removeChar(str){
    return str.slice(1, -1);
}

function repeatStr(n, s) {
    return s.repeat(n);
}

function positiveSum(arr) {
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            result += arr[i];
        }
    }
    return result;
}

function highAndLow(numbers){
    const numArray = numbers.split(' ');
    let highest = Math.max(...numArray);
    let lowest = Math.min(...numArray);
    return `${highest} ${lowest}`;
}

function disemvowel(str) {
    const vowels = 'aeiouAEIOU';
    let result = '';
    for(let i = 0; i < str.length; i++){
        if(!vowels.includes(str[i])){
            result += str[i];
        }
    }
    return result;
}

function getCount(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

function printArray(array){
    return array;
}

console.log(findShort("hammag salom bu esa sozlar!")); 
console.log(findSmallestInt([34, 15, 88, 2])); 
console.log(removeChar("hello")); 
console.log(repeatStr(3, "ha")); 
console.log(positiveSum([1, -4, 7, 12])); 
console.log(highAndLow("1 2 3 4 5")); 
console.log(disemvowel("This is an example")); 
console.log(getCount("Hello World")); 
console.log(printArray([1, 2, 3, 4]));
