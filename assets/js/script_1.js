/** EJERCICIO 4*/
/** debemos seleccionar el id a llamar */
const colorBlue = document.getElementById("blue") 
const colorRed = document.getElementById("red") 
const colorGreen = document.getElementById("green") 
const colorYellow = document.getElementById("yellow") 

/**funcion que hará cambiar el color*/

function pintar(recuadro){
    recuadro.style.backgroundColor = "black"
    }

colorBlue.addEventListener("click",()=>{
    pintar(colorBlue)
})
colorRed.addEventListener("click",()=>{
    pintar(colorRed)
})
colorGreen.addEventListener("click",()=>{
    pintar(colorGreen)
})
colorYellow.addEventListener("click",()=>{
    pintar(colorYellow)
})
/** con esto asignamos el cambior de color con un click */