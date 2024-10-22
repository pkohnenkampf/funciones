/** EJERCICIO 3 */
const ele = document.getElementById("ele1") 
/**llamar el id del html*/
function pintar(objeto,color="green"){
    objeto.style.backgroundColor= color
} /**le asginamos el color inicial que seria verde */
pintar(ele);


ele.addEventListener("click",()=>{
    pintar(ele,"yellow")
})
/** con esto asignamos el cambior de color con un click */



