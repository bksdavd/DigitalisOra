const ora = document.getElementById('ora');
const perc = document.getElementById('perc');
const mperc = document.getElementById('mperc');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    ora.textContent = hr;
    perc.textContent = min;
    mperc.textContent = s;


})