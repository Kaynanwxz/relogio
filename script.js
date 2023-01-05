var digital = document.querySelector('.digital')
var ph = document.querySelector('.p_h')
var pm = document.querySelector('.p_m')
var ps = document.querySelector('.p_s')

setInterval((shora,sminutos,ssegundos) => {
    let now = new Date
    let hora = now.getHours()
    let minutos = now.getMinutes()
    let segundos = now.getSeconds()
    
    console.log(segundos);


    if (hora.toString().length < 2) {
        shora = `0${hora}` 
    }else { shora = hora}

    if (minutos.toString().length < 2) {
        sminutos = `0${minutos}` 
    }else { sminutos = minutos}

    if (segundos.toString().length < 2) {
        ssegundos = `0${segundos}` 
    } else { ssegundos = segundos}

    phora = hora*30-90;
    pmin = minutos*6-90;
    pseg = segundos*6-90;

    ph.style.transform = `rotate(${phora}deg)`
    pm.style.transform = `rotate(${pmin}deg)`
    ps.style.transform = `rotate(${pseg}deg)`

    digital.innerHTML = `${shora}:${sminutos}:${ssegundos}`
}, 1000);
