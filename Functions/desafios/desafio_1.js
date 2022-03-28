// Primeiro desafio

// Function Declaration
function somar(n1) { // Primeira função recebe um parâmetro e retorna outra função
    return function(n2) { // Segunda também recebe um parâmetro e retorna a função
        return function(n3) { // Terceira recebe outro parâmetro e soma todos eles
            return n1 + n2 + n3
        }
    }
}

/**
 * Aqui está sendo passado o primeiro argumento para a função somar
 * E está sendo armazenado na constante n1
 * Que agora vai fazer o papel de receber o segundo argumento do retorno da função
 */
const n1 = somar(5)


/**
 * Aqui está sendo feito o mesmo processo de n1
 * Passando o argumento para a primeira função retornada
 */
const n2 = n1(5)


/**
 * Aqui está sendo passado o último argumento para a última função retornada
 * Que é a função responsável por somar todos os outros argumentos
 */
const n3 = n2(5)

console.log(n3) // Aqui está sendo logado o resultado da soma dos 3 argumentos


// Podemos também fazer desta forma mais simplificada e obter o mesmo resultado
console.log(somar(5)(5)(5))






// Segundo desafio

// Function expression
const calcular = (n1) => {
    return function(n2) {
        return function(fn) {
            return fn(n1, n2)
        }
    }
}

const multiplicar = (n1, n2) => {
    return n1 * n2
}

console.log(calcular(5)(5)(multiplicar))
