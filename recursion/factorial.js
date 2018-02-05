/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/

function factorial(num) {
    if(num > 1) {
        return num * factorial(num - 1)
    }
    return num;
}
console.log(factorial(6));