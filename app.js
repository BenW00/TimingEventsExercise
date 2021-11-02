// Question 1
setTimeout(() => {
    const hi = document.createElement(`p`);
    hi.innerText = `Hi`
    document.querySelector(`#first`).append(`hi`)
}, 1000);

// Question 2
setTimeout(() => {
    const One = document.createElement(`p`)
    document.querySelector(`#timeout-nesting`).append(`One`)

    setTimeout(() => {
        const Two = document.createElement(`p`)
        document.querySelector(`#timeout-nesting`).append(`Two`)
    }, 1000);

}, 2000);

// Question 3A
let q3Count = 1;
let q3a = setInterval(() => {
  console.log(q3Count);
  q3Count++;
}, 1000);

// Question 3B
const button = document.querySelector(`button`)

button.addEventListener(`click`, () => {
    clearInterval(q3a);
  });

//   BONUS

// Question 4A
const countdownD = document.querySelector(`#countdown`)
let seconds = 0
let minutes = 2

let countdown = setInterval(() => {
    let countClock = document.createElement(`p`);
    countdownD.append(countClock)

    if (minutes == 0 && seconds == 0) {
        clearInterval(countdown)
        countClock.innerText = (minutes) + ":" + "00"
    }

    else if (seconds == 60) {
        countClock.innerText = (minutes + 1) + ":" + "00"

    }

    else if (seconds == 0) {
        countClock.innerText = minutes + ":" + "00"
        minutes-- 
        seconds += 60
    }

    else if ((seconds.toString()).length == 1) {
        countClock.innerText = minutes + ":" + "0" + seconds
    }

    else {
        countClock.innerText = minutes + ":" + seconds
    }

    seconds--
}, 100);