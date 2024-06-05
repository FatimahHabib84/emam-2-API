url = "https://api.openweathermap.org/data/2.5/weather?lat=24.774265&lon=46.738586&appid=06ef55c80d9701369941f1465f3e4827"
// let btn = document.getElementById('prayerTime')

let p = document.getElementsByClassName('prayTimeParagraph')
async function getData (){
    let res = await fetch(url)
    let json = await res.json()
    p[0].innerText=p[0].innerText+" "+json.name
    p[1].innerText=p[1].innerText+" "+json.main.temp
    p[2].innerText=p[2].innerText+" "+json.main.humidity
    p[3].innerText=p[3].innerText+" "+json.coord.lon
    p[4].innerText=p[4].innerText+" "+json.coord.lat
} getData()