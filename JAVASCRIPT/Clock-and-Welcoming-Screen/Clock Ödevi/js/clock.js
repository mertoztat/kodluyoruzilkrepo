let userName = document.getElementById("myName")
let clock = document.getElementById("myClock")
let weekDay = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]

userName = prompt("Adınız nedir?")


function showTime(){
    const today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    let d = weekDay[today.getDay()] 


    myName.innerHTML = `Hoşgeldin ${userName}`
    clock.innerHTML = h + ":" + m + ":" + s + " " + d

setTimeout(showTime, 1000)    
}

showTime()

