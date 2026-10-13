// 1. Select the car and button elements / መኪናውን እና ቁልፉን ከ HTML ውስጥ መምረጥ
const car = document.querySelector('.car');
const btn = document.getElementById('toggleBtn');

// 2. Variable to check the car state / መኪናው መንቀሳቀሱን ወይም አለመንቀሳቀሱን መከታተያ
let isRunning = true;

// 3. Add a click event to the button / በቁልፉ ላይ ክሊክ ሲደረግ የሚሰራ ኮድ
btn.addEventListener('click', function() {
    if (isRunning) {
        // Pause the animation / አኒሜሽኑን ማቆም
        car.style.animationPlayState = 'paused';
        btn.textContent = 'Resume / ቀጥል';
        isRunning = false;
    } else {
        // Resume the animation / አኒሜሽኑን መቀጠል
        car.style.animationPlayState = 'running';
        btn.textContent = 'Pause / ለአፍታ አቁም';
        isRunning = true;
    }
});