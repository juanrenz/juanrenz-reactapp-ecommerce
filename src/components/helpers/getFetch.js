import { items } from "../../data/productos";

export const getFetch = new Promise((aceptado, rechazada)=>{
    //Acciones todo ok 
    setTimeout(() => {
        aceptado(items)        
    }, 3000);
    //rechazada('400 not found')
})
