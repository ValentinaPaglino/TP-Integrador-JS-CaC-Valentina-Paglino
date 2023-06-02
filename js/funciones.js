let precio_tot = 0; 

function Informar_Costo (evento) {
    evento.preventDefault();
    let canTickets = parseInt(document.getElementById('cantidad').value);
    precio_tot = canTickets * 200;
    
    let cateDesc = parseInt(document.getElementById('categoria').value);
    
    switch (cateDesc){
        case 1: precio_tot = precio_tot * 0.2;
        break;
        case 2: precio_tot = precio_tot * 0.5;
        break;
        case 3: precio_tot = precio_tot * 0.75;
        break;
    }

    display_total = document.getElementById('precioTotal');
    display_total.innerText = 'Total a Pagar: $' + precio_tot;
     
    if (isNaN(precio_tot)) {
        alert('Por favor ingrese una cantidad válida');
        display_total.innerText = 'Total a Pagar: $';
        
    } 
   
    
   
    
}

btn_resumen = document.getElementById('resumen')
btn_resumen.addEventListener('click', Informar_Costo)

function borrarTodo() {
    display_total = document.getElementById('precioTotal');
    display_total.innerText = 'Total a Pagar: $';

}

btn_borrar = document.getElementById('borrar')
btn_borrar.addEventListener('click', borrarTodo)
