document.addEventListener('DOMContentLoaded', () => {
    const colors = document.querySelector('.colors');
    const colorPalette = ['#FF1744', '#2979FF', '#00E676', '#FFEA00', '#FF9100', '#D500F9'];
    const waterDrops = document.querySelector('.water-drops');

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

    function createWaterDrop() {
        const drop = document.createElement('div');
        drop.className = 'water-drop';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animationDuration = (Math.random() * 1 + 1) + 's';
        waterDrops.appendChild(drop);

        setTimeout(() => {
            drop.remove();
        }, 2000);
    }

    // Create initial color dots
    setInterval(createColorDot, 300);
    setInterval(createWaterDrop, 500);

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

    // Add parallax effect to floating icons
    document.addEventListener('mousemove', (e) => {
        const icons = document.querySelectorAll('.floating-icon');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        icons.forEach((icon, index) => {
            const speed = 0.1 + (index * 0.05);
            const x = (mouseX - 0.5) * 50 * speed;
            const y = (mouseY - 0.5) * 50 * speed;
            icon.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}); 