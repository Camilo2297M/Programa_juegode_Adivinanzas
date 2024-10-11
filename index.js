const numeroaleatorio = Math.floor(Math.random()*100)+1
const numeroEntrada = document.getElementById(`validador`)
const menasaje = document.getElementById(`respuesta`)
const intento = document.getElementById(`intentos`)
intentos = 0


function aganar() {
let numeroIngreso = parseInt(numeroEntrada.value)

intentos ++
intento.textContent = intentos


if (numeroIngreso <1 || numeroIngreso >100 || isNaN(numeroIngreso)) {
   menasaje.textContent = `Ingresa un numero valido de 1 a 100`
   return
}
if (numeroIngreso === numeroaleatorio) {
    menasaje.textContent = `!Felicitaciones Ganaste!!`
    
}else if( numeroIngreso < numeroaleatorio){
    menasaje.textContent = `Mas Alto ! el numero que ingresaste es muy bajo!`
}else {
    menasaje.textContent = `Mas Bajo ! el numero que ingresaste es mayor!`

}
}

function eliminar() {
    document.getElementById(`validador`).value = ``
    
}

function refrecar() {
    document.getElementById(`refrecar`).value =   location.reload();
    
}