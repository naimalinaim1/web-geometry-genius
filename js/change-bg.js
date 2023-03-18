const calculateItems = document.querySelectorAll('#area-calculation-items > div.card')
calculateItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        item.style.background = '#'+randomColor;
    })
});