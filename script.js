let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
// console.log(CountDownDate);
let counter = setInterval(() => {
    // Get Date Now 
    let dateNow = new Date().getTime();
    // find the date difference between now and countdown date
    let dateDiff = countDownDate - dateNow;
    // Get Time units
    let days = Math.floor(dateDiff / (1000 * 60 *60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 *60*24))/(1000*60*60));
    let minuts = Math.floor((dateDiff % (1000 * 60 *60))/(1000*60));
    let seconds = Math.floor((dateDiff % (1000 * 60))/(1000));

    document.querySelector(".days").innerHTML = days
    document.querySelector(".hours").innerHTML = hours
    document.querySelector(".minuts").innerHTML = minuts
    document.querySelector(".seconds").innerHTML = seconds
    if (dateDiff <= 0){
        clearInterval(counter)
    }
}, 1000);