let day,month,year;

day=document.querySelector(".day").value;
month=document.querySelector(".month").value;
year=document.querySelector(".year").value;
submit=document.querySelector(".imgg");

const currDay= new Date();
function getDay(){
    document.querySelector(".currday").innerHTML=currDay.getDate()-day;
}
function getMonth(){
    document.querySelector(".currmonth").innerHTML=currDay.getMonth()-month+1;
}
function getYear(){
    document.querySelector(".curryear").innerHTML=currDay.getFullYear()-year;
}

submit.addEventListener("click", getDay);
submit.addEventListener("click", getMonth);
submit.addEventListener("click", getYear);
