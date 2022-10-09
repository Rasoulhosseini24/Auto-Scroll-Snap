const container = document.querySelector('.containerr')
const scrollSnapp = container.querySelector('.scroll-snap')
const cont = scrollSnapp.querySelectorAll('.sec')
const roww = container.querySelector('.roww')

let goDown;


Array.from(cont).forEach(e => {

    e.addEventListener('mouseenter', () => {
        clearInterval(goDown);
        goDown = setInterval(() => scrollSnapp.scrollTop += 1, 10);
    })

    e.addEventListener('mouseleave', () => {

        clearInterval(goDown);
        goDown = setInterval(() => scrollSnapp.scrollTop -= 10, 10);

    });


})
