//Задание 1.
let evenNumbers = 0;
let oddNumbers = 0;
let otherNumbers = 0;
let array = [1, 2, 5, 2, 2, 3, null, undefined, 'b', 'c'];
function getAnyElement(allString){
    for (let i = 0; i < allString.length; i++) {
        if (allString[i] === 0 || (typeof (allString[i]) !== 'number')){
            otherNumbers++;
        } else {
            if (allString[i] % 2 === 0) {
                evenNumbers++;
            } else {
                oddNumbers++;
            }
        }
    }
}
getAnyElement(array);
console.log(oddNumbers);
console.log(evenNumbers);

//Задание 2.
function isPrime(n) {
    if (n <= 1 || n > 1000) return "данные неверны";
    if (n == 2) return "простое число";
    for (let i = 2; i <= n; i++){
       if (n % i === 0){
         return "не простое число";
       }
    
       return "простое число";
    }
}
   console.log(isPrime(2));
   console.log(isPrime(1002));
   console.log(isPrime(73))

//Задание 3.
function sum(x) {
    return function(y) {
        return x + y;
    };
}

let result=sum(20)(6);
console.log(result);

//Задание 4.
function getNumbers(x,y) {
    let timerId = setInterval(function() {
     console.log(x);
     if (x === y) {
       clearInterval(timerId);
     } else x++;
      
   }, 1000);
 }
 getNumbers(5,15)

//Задание 5.
const func = (x, n) => {
Math.pow(x,n)
}; 
console.log(Math.pow(6,2))