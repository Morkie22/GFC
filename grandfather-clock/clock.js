const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');
const clock = document.querySelector('.clock');

function setClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setClock, 1000);

setClock();

function changeClockColor() {
    const colors = ['#333', '#4CAF50', '#FF5722', '#009688', '#3F51B5'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    clock.style.borderColor = randomColor;
    hourHand.style.backgroundColor = randomColor;
    minuteHand.style.backgroundColor = randomColor;
    secondHand.style.backgroundColor = randomColor === '#FF5722' ? '#E91E63' : randomColor;
}


