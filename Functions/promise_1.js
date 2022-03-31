let p = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Gui', 'Rafa', 'Leo'])
})

const primeiroElemento = array => array[0]
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()
const mostrarElemento = elemento => console.log(elemento)

p
    // O resultado de um método then é passado para o próximo then
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(mostrarElemento)