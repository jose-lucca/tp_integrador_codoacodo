let cantidad = document.querySelector("#cantidadCompra");
let categoria = document.querySelector("#categoria");
let btn = document.querySelector("#boton");
let pagoTotal = document.querySelector("#pagoTicket");
let valorticket = 200;
//console.log (cantidad);
//console.log (categoria);
//console.log (btn);


btn.addEventListener('click', calcular);

function calcular (){
let cant = parseFloat(cantidad.value);
let valorCategoria = parseFloat(categoria.value);
let sindescuento;
let descuento, totalAPagar;

if (!isNaN(cant) && cant>0){
sindescuento = cant * valorticket;
descuento = (sindescuento * valorCategoria)/100;
totalAPagar = sindescuento - descuento
pagoTotal.value = "Total a Pagar: $ " + totalAPagar

} else {
    alert ("ingrese una cantidad mayor a 0");
}

}


