document.addEventListener('DOMContentLoaded', () => {
    const colors = document.querySelector('.colors');
    const colorPalette = ['#FF1744', '#2979FF', '#00E676', '#FFEA00', '#FF9100', '#D500F9'];

    function createColorDot() {
        const dot = document.createElement('span');
        dot.className = 'color-dot';
        dot.style.setProperty('--color', colorPalette[Math.floor(Math.random() * colorPalette.length)]);
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        dot.style.setProperty('--tx', (Math.random() * 200 - 100) + 'px');
        dot.style.setProperty('--ty', (Math.random() * 200 - 100) + 'px');
        colors.appendChild(dot);

        setTimeout(() => {
            dot.remove();
        }, 6000);
    }

    // Create initial color dots
    setInterval(createColorDot, 300);

    // Add interactive elements
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.9) {
            const dot = document.createElement('span');
            dot.className = 'color-dot';
            dot.style.setProperty('--color', colorPalette[Math.floor(Math.random() * colorPalette.length)]);
            dot.style.left = e.clientX + 'px';
            dot.style.top = e.clientY + 'px';
            dot.style.setProperty('--tx', (Math.random() * 100 - 50) + 'px');
            dot.style.setProperty('--ty', (Math.random() * 100 - 50) + 'px');
            colors.appendChild(dot);

            setTimeout(() => {
                dot.remove();
            }, 6000);
        }
    });

    // Add touch support for mobile devices
    document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        if (Math.random() > 0.5) {
            const dot = document.createElement('span');
            dot.className = 'color-dot';
            dot.style.setProperty('--color', colorPalette[Math.floor(Math.random() * colorPalette.length)]);
            dot.style.left = touch.clientX + 'px';
            dot.style.top = touch.clientY + 'px';
            dot.style.setProperty('--tx', (Math.random() * 100 - 50) + 'px');
            dot.style.setProperty('--ty', (Math.random() * 100 - 50) + 'px');
            colors.appendChild(dot);

            setTimeout(() => {
                dot.remove();
            }, 6000);
        }
    });
}); 