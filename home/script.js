// Example to simulate globe zoom
const globe = document.querySelector('.globe');
const zoomSlider = document.querySelector('.zoom-slider');

zoomSlider.addEventListener('input', (event) => {
    const zoomValue = event.target.value / 100;
    globe.style.transform = `translate(-50%, -50%) scale(${zoomValue})`;
});

// Add more functionality for controls, projects, and map interactions