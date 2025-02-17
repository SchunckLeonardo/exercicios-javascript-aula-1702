// Exercise 1
const dobro = num => num * 2

console.log(dobro(7))
console.log(dobro(15))

// Exercise 2
const dividir = (a, b) => a / b

console.log(dividir(10, 2))
console.log(dividir(9, 3))

// Exercise 3
const mensagemBoasVindas = name => console.log(`Seja bem-vindo, ${name}`)
mensagemBoasVindas("Carlos")
mensagemBoasVindas("Ana")

// Exercise 4
const executarOperacao = (a, b, func) => func(a, b)

console.log(executarOperacao(6, 3, (a, b) => a - b)); // 3
console.log(executarOperacao(4, 5, (a, b) => a * b)); // 20

// Exercise 5
const precos = [100, 200, 300, 400];
const precosComDesconto = precos.map(num => num - (num * 0.1))
console.log(precosComDesconto); // [90, 180, 270, 360]

// Exercise 6
const idades = [12, 25, 17, 30, 14, 19];
const menoresDeIdade = idades.filter(age => age < 18)
console.log(menoresDeIdade); // [12, 17, 14]

// Exercise 7
const numeros = [2, 3, 4, 5];
const produto = numeros.reduce((acc, curr) => acc * curr, 1)
console.log(produto); // 120 (pois 2 * 3 * 4 * 5 = 120)