let infoButtonElement = document.querySelectorAll('.info');

infoButtonElement.forEach(infoButton => {

    infoButton.addEventListener('click', () => {
        infoButton.classList.toggle('active');
    })

      
});