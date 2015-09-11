// Преобразование типов

// Преобразование строки в число
console.log(typeof Number("555"));
console.log(typeof +"454"); // с помощью унарного оператора

console.log(typeof parseInt("45 px", 10)); // 10 - основание системы исчисления
console.log(typeof parseFloat("42.123 em")); // для вещественных чисел

// Преобразование числа в строку
console.log(typeof String(4433));
console.log(typeof(345 + ''));
var number = 23;
console.log(typeof number.toString());

// Числа в булевый
console.log(typeof Boolean(1));
console.log(typeof !!5); // 0 - false

// Булевый в строковый
console.log(typeof false.toString())
  
// Булевый в число
console.log(typeof +true); // 1
console.log(typeof +false); // 0





/* Булевый преобразователь */
console.log(!!""); // false
console.log(!!NaN); // false
console.log(!!0); // false
console.log(!!null); // false
console.log(!!undefined); // false

// все другие true
console.log(!!"undefined"); // true