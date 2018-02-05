//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function countDown(n) {
    while (n > 0) {
        n -= 1;
    }
    return n;
}
//2. Next, try looping just like above except using recursion
function recursionCountDown(n) {
    if (n > 0) {
        n -= 1;
        recursionCountDown(n);
    }
    return n;
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, expo) {
    let count = 1;
    let result = base;
    while (expo > count) {
        result *= base;
        count += 1;
    }
    return result;
}
//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function recursiveExponent(base, expo) {
    if (expo === 1) {
        return base;
    }
    return base * recursiveExponent(base, --expo);
}
//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr, num) {
    let x = arr.pop() * num;
    if(arr.length > 0) {
        recursiveMultiplier(arr, num);
    }
    arr.push(x);
    return arr;
}
//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse(arr) {
    let x = arr.pop();
    if(arr.length > 0) {
        recursiveReverse(arr);
    }
    arr.unshift(x);
    return arr;
}