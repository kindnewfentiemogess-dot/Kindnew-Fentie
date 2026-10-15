// 1. Select the car and button elements / 
const car = document.querySelector('.car');
const btn = document.getElementById('toggleBtn');

// 2. Variable to check the car state /  
let isRunning = true;

// 3. Add a click event to the button / 
btn.addEventListener('click', function() {
    if (isRunning) {
        // Pause the animation / 
        car.style.animationPlayState = 'paused';
        btn.textContent = 'Resume /  ';
        isRunning = false;
    } else {
        // Resume the animation /  
        car.style.animationPlayState = 'running';
        btn.textContent = 'Pause  ';
        isRunning = true;
    }
});
