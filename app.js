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
let count = 1;
let q3a = setInterval(() => {
  console.log(count);
  count++;
}, 1000);

// Question 3B
const button = document.querySelector(`button`)

button.addEventListener(`click`, () => {
    clearInterval(q3a);
  });