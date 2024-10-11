const numeroaleatorio = Math.floor(Math.random()*100)+1
const numeroEntrada = document.getElementById(`validador`)
const menasaje = document.getElementById(`respuesta`)

function aganar() {
let numeroIngreso = parseInt(numeroEntrada.value)


if (numeroIngreso <1 || numeroIngreso >100 || isNaN(numeroIngreso)) {
   menasaje.textContent = `Ingresa un numero valido de 1 a 100`
   return
}
if (numeroIngreso === numeroaleatorio) {
    menasaje.textContent = `!Felicitaciones Ganaste!!`
}else if( numeroIngreso < numeroaleatorio){
    menasaje.textContent = `Mas Alto ! el numero que ingresaste es alto!`
}else {
    menasaje.textContent = `Mas Bajo ! el numero que ingresaste es menor!`

}
}
