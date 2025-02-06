import { useEffect } from 'react';
import './styles/rain.css';

function RainComponent() {
    useEffect(() => {
        const rainContainer = document.querySelector('.rain') as HTMLElement;

        function createRainDrop() {
            const drop = document.createElement('div');
            drop.classList.add('drop');

            // Use the width of the container instead of window.innerWidth
            const containerWidth = rainContainer.offsetWidth;
            drop.style.left = Math.random() * containerWidth + 'px';
            drop.style.animationDuration = Math.random() * 1 + 0.5 + 's';

            rainContainer.appendChild(drop);

            drop.addEventListener('animationend', () => {
                drop.remove();
            });
        }

        // Create a raindrop every 100ms
        const intervalId = setInterval(createRainDrop, 100);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="rain"></div>
    );
}

export default RainComponent;