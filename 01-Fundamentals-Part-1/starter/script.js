// Type conversion and coercion
console.log(Number(1234) + 10);
console.log(String(1234) + 10);
console.log(Number('abcd')); //NaN is 'not a number', it happens when the numeric value is invalid


let a = '1', b = '1'; //Operation other than + trigers coercion (automatic conversion)
a = a + 1;
b++;
console.log(a, b);

//Truthy and Falsy values
console.log(
    Boolean(0), //false
    Boolean(undefined), //false
    Boolean(NaN), //false
    Boolean(''), //false
    Boolean({}), //true
    Boolean('abc'), //true
    Boolean(1), //true
    
);