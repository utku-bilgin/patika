//kullanıcı
let userName = prompt("Adınızı Giriniz").toUpperCase();
let visiter = document.querySelector('#visiter');
visiter.innerHTML=userName;

//saat-gün bilgisi
function clock(){
let hours = document.querySelector("#hours")
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let days = document.querySelector("#days");
let d=new Date()
   
    //saat
h = d.getHours();
m = d.getMinutes();
s = d.getSeconds();

h = (h < 10) ? "0" + h : h
m = (m < 10) ? "0" + m : m
s = (s < 10) ? "0" + s : s

hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;
   
    //gün

day = d.getDay
if(day=0){
    dy = "Pazartesi"
}else if(day=1) {
    dy="Salı";
}else if(day=2) {
    dy="Çarşamba";
}else if(day=3) {
    dy="Perşembe";
}else if(day=4) {
    dy="Cuma";
}else if(day=5) {
    dy="Cumartesi";
}else if(day=6) {
    dy="Pazar";
}
days.innerHTML = dy;

}
var interval = setInterval(clock, 1000);