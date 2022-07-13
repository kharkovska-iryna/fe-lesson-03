// программа, которая запрашивает число у пользователя и выводит в консоль последовательность Фибоначчи в заданном диапазоне.

let z = +prompt( 'Enter number', '' );

function fib(z) {
    let a = 0,
        b = 1
        result = a + ' ' + b + ' ';
    for (let i = 2; i < z; i++) {
        let c = a + b;
        a = b;
        b = c;
        result += c + ' ';
    }
    return result;
}
console.log(fib(z));





//программа, которая запрашивает число у пользователя и выводит в консоль лестницу чисел в заданном диапазоне

let n = +prompt( 'Enter number', '' );
for (let i = 0; i <= n; i++) {
	let line = 1 + ' ';
  for(let j = 2; j <= i; j++) {
    line += ' ' + j + ' ';
  }
  console.log(`${line}`)
}
