url = "http://api.aladhan.com/v1/calendar/2024/4?latitude=24.774265&longitude=46.738586&"
let p = document.getElementsByClassName('prayTimeParagraph')
async function getData (){
    let res = await fetch(url)
    let json = await res.json()
    console.log(json);
    p[0].innerText=p[0].innerText+" "+json.data[0].hijri.date
    p[1].innerText=p[1].innerText+" "+json.data[0].date.gregorian.date
    p[2].innerText=p[2].innerText+" "+json.data[0].hijri.weekday.en
    p[3].innerText=p[3].innerText+" "+json.data[0].timings.Fajr
    p[3].innerText=p[4].innerText+" "+json.data[0].timings.Dhuhr
    p[3].innerText=p[5].innerText+" "+json.data[0].timings.Asr
    p[3].innerText=p[6].innerText+" "+json.data[0].timings.Maghrib
    p[3].innerText=p[7].innerText+" "+json.data[0].timings.Isha


    // p[4].innerText=p[4].innerText+" "+json.coord.lat
} getData()