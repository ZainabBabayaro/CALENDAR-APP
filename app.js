
let fullDate = document.querySelector('.full-date')
let displayMonth = document.querySelector('.months')
let day = document.querySelector('.days-of-the-month')
let displayYear = document.querySelector('.year')
const setDate = document.querySelector('.set-date-button')
let cancel = document.querySelector('.cancel-button')


let selectedDay = ''
let selectedMonth = ''
let selectedYear = ''




displayMonth.addEventListener("click", myMonthDisplay);
function myMonthDisplay(selectMonth) {
    //    fullDate.innerHTML = displayMonth.innerHTML; 
    selectedMonth = selectMonth.target.textContent
};


displayYear.addEventListener("click", myYearDisplay);
function myYearDisplay(selectYear) {
    //   fullDate.innerHTML = displayYear.innerHTML; 
    selectedYear = selectYear.target.textContent
}


day.addEventListener("click", myDayDisplay);
function myDayDisplay(selectDay) {
    // fullDate.innerHTML = day.innerHTML; 
    selectedDay = selectDay.target.textContent
}


setDate.addEventListener("click", selectedDate);
function selectedDate() {
    fullDate.innerHTML = `<div class="full-date"> ${selectedMonth} ${selectedDay}, ${selectedYear} </div>`
}


 

cancel.addEventListener("click", cancelDate);
function cancelDate() {
cancel = fullDate.remove()
  }
//   function removeEvent(){
//     cancel.removeEventListener("click", cancelDate);
//    }
