//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function countDown(n) {
    while(n > 0) {
        console.log(n);
        n -= 1;
    }
    console.log(n);
    return n;
}
//2. Next, try looping just like above except using recursion
function recursionCountDown(n){
    if(n > 0) {
        n -= 1;
        console.log(n);
        recursionCountDown(n);
    }
    return n;
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, expo) {
    let count = 1;
    let result = base;
    console.log(base);
    while(expo > count) {
        result *= base;
        count += 1;
        console.log(result);
    }
    return result;
}
//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function recursiveExponent(base, expo) {
    if(expo > count) {
        result *= base;
        count += 1;
        console.log(result);
        recursiveExponent(base, expo);
    }
}
//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

recursiveExponent(10,8);