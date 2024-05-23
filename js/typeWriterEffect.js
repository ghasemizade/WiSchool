const divElem = document.querySelector('#text')

const text = "choose wise, learn wise...!"
let i = 0
let isDeleting = false

const typeWriter = () => {
    if (!isDeleting && i < text.length) {
        divElem.textContent += text[i]
        i++
        setTimeout(() => {
            requestAnimationFrame(typeWriter)
        }, 100);
    } else if (isDeleting && i >= 0) {
        divElem.textContent = text.substring(0, i-1)
        i--
        setTimeout(() => {
            requestAnimationFrame(typeWriter)
        }, 100);
    }

    if (i === text.length) {
        setTimeout(() => {
            isDeleting = true
        }, 1000);
    } else if (i === 0) {
        isDeleting = false
    } 
}
setInterval(() => {
    typeWriter()
}, 4000);

typeWriter() 