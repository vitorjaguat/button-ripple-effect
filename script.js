const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX;
        const y = e.clientY;
        //these are the coordinates for the mouse pointer on the entire window

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;
        //these tell the position of the button itself (not where I click)

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;
        //these tell the absolute position of the click inside of the button

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 600)
    })
})