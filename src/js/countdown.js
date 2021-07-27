/*----------INICIO DEL cont DE TIEMPO QUE LE QUEDA A LAS REBAJAS------------------*/
let days = document.querySelector("#days")
let hours = document.querySelector("#hours")
let minutes = document.querySelector("#minutes")
let seconds = document.querySelector("#seconds")
let cont = 60
let contMin = 60
let contHr = 24
let contDay = 2  /*aqui se define la duracion de la oferta en days y minimo lo tenemos que dejar en 1 aunque quisieramos hacer una oferta de unas pocas hours */

function countdown() {
  if(cont < 0) {
    contMin--
    if(contMin < 0) {
      contMin = 60
      contHr--
      if(contHr < 0) {
        contHr = 24
        contDay--
      }
      if (contDay == 0){
        return( alert("La oferta a expirado"))
      }
    }
    cont = 60
  }
  if (cont < 10){
    seconds.innerHTML = `0${cont}`  /* El simbolo ${} dentro de balstic (tecla alt 96)  */
  }
  else {
    seconds.innerHTML = `${cont}`
  }
  if (contMin < 10) {
    minutes.innerHTML = `0${contMin}` /*Se pone 0 en 0${} para los menores de 10 me los devuelva en 0 y un número de 1 a 9, por ejemplo: 08 ó 09*/
  }
  else {
    minutes.innerHTML = `${contMin}`
  }
  if (contHr < 10) {
    hours.innerHTML=`0${contHr}`
  }
  else {
    hours.innerHTML=`${contHr}`
  }
  days.innerHTML = `${contDay}`
  cont--;
  setTimeout("countdown()",1000)
}



