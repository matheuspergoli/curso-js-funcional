// Arrow function
const felizNatal = () => console.log('Feliz Natal!')
felizNatal()

const saudacao = nome => `Fala ${nome} !`
console.log(saudacao('Matheus'))

const somar = (...numeros) => {
    let total = 0
    for (let numero of numeros) {
        total += numero
    }
    return total
}

console.log(somar(5, 5, 5, 5, 5, 5, 5, 5))


const potencia = base => exp => Math.pow(base, exp)

console.log(potencia(2)(2))