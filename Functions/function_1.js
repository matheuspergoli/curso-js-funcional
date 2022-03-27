// Declaração de função
// Ou também Function Declaration
function bomDia() {
    console.log('Bom dia!')
}
bomDia()

// Function expression
const boaTarde = function () { // Essa função não retorna nada
    console.log('Boa tarde!')
}
let x = boaTarde() // Portanto ao logar, irá apresentar undefined
console.log(x)

function somar(a, b) {
    return a + b
}
let resultado = somar(2, 3)
console.log(resultado)

resultado = somar(5, 5, 6, 7, 8, 9) // O JS vai ignorar os argumentos extras
console.log(resultado)

// Se passar apenas um argumento para uma função que pede 2 parâmetros
// O JS vai automaticamente passar o valor do parâmetro para undefined
resultado = somar(15) // Portanto, ao somar 15 + undefined o resultado é NaN
console.log(resultado)