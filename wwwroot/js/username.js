var input = document.getElementById('userNameInput')
var mainDiv = document.getElementById('main')
var binDiv = document.getElementById('bin');
var fallingDivs = []

input.addEventListener('input', () => {
    if (isOverflown(input)) {
        let fallingChar = input.value.substr(-1)
        input.value = input.value.slice(0, -1)

        let fallingDiv = document.createElement('div')
        fallingDiv.innerText = fallingChar

        fallingDiv.classList.add('fallingDiv')
        fallingDiv.style.top = input.getBoundingClientRect().top + 'px'
        fallingDiv.style.left = input.getBoundingClientRect().left + 'px'

        mainDiv.append(fallingDiv)
        fallingDivs.push(fallingDiv)
    }
})

function isOverflown(element) {
    return element.scrollWidth - 1 > element.clientWidth
}

setInterval(() => {
    fallingDivs.forEach((fallingDiv, index) => {
        let topPosition = Number(fallingDiv.style.top.slice(0, -2));
        let binTop = binDiv.getBoundingClientRect().top;

        if (topPosition + fallingDiv.clientHeight < binTop + 50) {
            fallingDiv.style.top = topPosition + 5 + 'px';

            let currentRotation = Number(fallingDiv.style.transform.replace(/[^0-9\-.,]/g, ''));
            fallingDiv.style.transform = 'rotate(' + (currentRotation + 5) + 'deg)';
        }
        else {
            mainDiv.removeChild(fallingDiv);
            fallingDivs.splice(index, 1);
        }
    });
}, 40);