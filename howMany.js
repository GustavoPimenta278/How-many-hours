// pegando as horas e minutos
const d = new Date()
const horas = d.getHours()
const minutes = d.getMinutes()
const seconds = d.getSeconds()
const hour = `${horas}:${minutes}:${seconds}`

function teste (){
    const main = document.getElementById('hours')
    main.innerHTML = hour
}

