function exec(fn, n1, n2) {
    return fn(n1, n2)
}

const somarNoTerminal = (n1, n2) => console.log(n1 + n2)
const subtrairNoTerminal = (n1, n2) => console.log(n1 - n2)
const subtrair = (n1, n2) => n1 - n2

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

const r = exec(subtrair, 50, 25)
console.log(r)

const cb = () => console.log('Exec...')
setInterval(cb, 1000)