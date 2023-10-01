const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const submit = document.querySelector(".imgg");
const currDay = new Date().getDate();
const currMonth = new Date().getMonth()+1;
const currYear = new Date().getFullYear();

function findAge(current_date, current_month, current_year, birth_date, birth_month, birth_year) {
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (birth_date > current_date) {
    current_date = current_date + months[birth_month - 1];
    current_month = current_month - 1;
  }

  if (birth_month > current_month) {
    current_year = current_year - 1;
    current_month = current_month + 12;
  }

  const calculated_date = current_date - birth_date;
  const calculated_month = current_month - birth_month;
  const calculated_year = current_year - birth_year;

  document.querySelector(".currday").innerHTML = calculated_date;
  document.querySelector(".currmonth").innerHTML = calculated_month;
  document.querySelector(".curryear").innerHTML = calculated_year;
}

submit.addEventListener("click", function () {
  const birthDay = parseInt(day.value, 10);
  const birthMonth = parseInt(month.value, 10); 
  const birthYear = parseInt(year.value, 10);
  findAge(currDay, currMonth, currYear, birthDay, birthMonth, birthYear);


  if (isNaN(birthDay) || isNaN(birthMonth) || isNaN(birthYear)){
  day.style.border="solid red";
  day.placeholder="Empty";
  month.style.border="solid red";
  month.placeholder="Empty";
  year.style.border="solid red";
  year.placeholder="Empty";

  document.querySelector(".currday").innerHTML="Error";
  document.querySelector(".currmonth").innerHTML ="Error";
  document.querySelector(".curryear").innerHTML = "Error";

  return;

  }
  
});

day.style.border="none";
month.style.border="none";
year.style.border="none";
