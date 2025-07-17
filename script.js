document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.querySelector('.no-btn');
    const yesBtn = document.querySelector('.yes-btn');
    
    yesBtn.addEventListener('click', () => {
        alert('Ben de seni özledim papatyam! ❤️');
    });

    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('click', moveButton);

    function moveButton() {
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.position = 'fixed';
        noBtn.style.transition = 'all 0.3s ease';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    }
}); 