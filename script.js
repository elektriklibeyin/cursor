document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.querySelector('.no-btn');
    const yesBtn = document.querySelector('.yes-btn');
    
    yesBtn.addEventListener('click', () => {
        alert('Ben de seni özledim papatyam! ❤️');
    });

    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('click', moveButton);

    const animations = [
        { transform: 'rotate(360deg) scale(0.8)', transition: 'all 0.4s ease' },
        { transform: 'translateY(-20px) scale(1.1)', transition: 'all 0.3s ease-out' },
        { transform: 'skew(10deg) scale(0.9)', transition: 'all 0.5s ease-in' },
        { transform: 'rotate(-180deg) translateX(30px)', transition: 'all 0.4s ease-in-out' }
    ];

    function moveButton() {
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];

        noBtn.style.position = 'fixed';
        noBtn.style.transform = 'none';
        noBtn.style.transition = randomAnimation.transition;
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        
        setTimeout(() => {
            noBtn.style.transform = randomAnimation.transform;
        }, 50);
    }
}); 