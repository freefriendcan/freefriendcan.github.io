
function callName() {
    var name = prompt("Adınız nedir?");
    let namex =  document.querySelector(`#myName`);
    namex.innerHTML = name;

}


let clockDOM  = document.querySelector(`#myClock`)
let yazi = document.querySelector("text2 text-center")

function currentTime(){
let time = new Date()

let hour = time.getHours()
hour = hour < 10 ? "0" + hour : hour;
let minute =  time.getMinutes();
minute = minute < 10 ? "0" + minute : minute;
let second =  time.getSeconds();
second = second<10 ? "0"+ second : second
;


function nameDay(){
    let day = time.getDay()
switch(day){
    case 1 :
    return "Pazartesi";
    case 2 :
        return "Salı";
    
  case 3 :
    return "Çarşamba";
    
    case 4 :
        return "Perşembe";

    case 5 :
        return "Cuma";
        
     case 6 :
        return "Cumartesi";
        
    default :
    return "Pazar" 

}
}
let day = nameDay()

let date = `${hour}:${minute}:${second}-${day}`
clockDOM.innerHTML= date

return date;

}

setInterval(currentTime,1000)
currentTime();