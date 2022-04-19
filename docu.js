// Very Easy //
let a = 20;
let b = 5;
console.log('The difference between 20 and 5 is' , a-b);

//Easy//
let x = 'Sayra';
let y = 'Justin';
console.log('The name Justin is longer than Sayra by 1 character');

// Medium // 
let talking =('How is sarah talking?');
console.log(talking);

if (talking == talking.toUpperCase()) {
    console.log ('user is yelling');
}

else if(talking == talking.toLowerCase()) {
    console.log ('user is whispering');
}

else {
    console.log(' user is talking normal');

}

//hard// 

function add(number1,number2){
    let result = number1 + number2
    return result
};

console.log(add(60,90));

function subtract(number1,number2){
    let result = number1 - number2
    return result
};
console.log(subtract(90,20));

function multiply(number1, number2){
    let result = number1 * number2
    return result;
}
console.log(multiply(60,2));

function divide(number1,number2){
    let result = number1 / number2
    return result
};
console.log(multiply(9,5));



// very hard //
let number1 = Number(prompt('enter your first number'));
const operation = prompt('enter your operator( + , - , * , /)');

let number2 = Number(prompt('enter your second number'));

let result;

if (operation == '+') {
    result = number1 + number2;
}

else if (operation == '-') {
    result = number1 - number2;
}   

else if (operation == '*') {
    result = number1 * number2;
}   

else { result = number1 / number2;
}

console.log(`${number1} ${operation} ${number2} = ${result}`);