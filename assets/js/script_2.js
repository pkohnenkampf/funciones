const div1=document.getElementById("key")
const div2=document.getElementById("key2")

let color

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = "pink"
        div1.style.backgroundColor = color
    /* Cambiar a color 1 */
    } else if (event.key === 's') {
        color = "orange"
        div1.style.backgroundColor = color
    }   else if (event.key === 'd') {
        color = "lightblue"
        div1.style.backgroundColor = color
    }   else if (event.key === 'q') {
        color = "purple"
        div2.style.backgroundColor = color
    }   else if (event.key === 'w') {
        color = "gray"
        div2.style.backgroundColor = color
    }   else if (event.key === 'e') {
        color = "brown"
        div2.style.backgroundColor = color
    }
    })