//Obtenemos un numero al azar
let numAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')




//esta accion se ejecuta cuando se toque el boton chequear

function checkresult(){
    let numeroIngresado= parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Ingrese un numero valido entre 1 y 100'
        mensaje.style.color = 'red'
        return
    }
    if(numeroIngresado === numAzar){
        mensaje.textContent = '¡Felicitaciones! acertaste el número'
        mensaje.style.color = 'green'
        numeroEntrada.Entrada.disabled = true;
    }else if(numeroIngresado < numAzar){
        mensaje.textContent = '¡Más alto! El número es mayor al que dijiste';
        mensaje.style.color = 'red';
    } else{
        mensaje.textContent = '¡Más bajo! El número es mayor al que dijiste';
        mensaje.style.color = 'red';
    }
}