function cotizar() {
    var monedita = document.getElementById("moneda").value;
    var cantidad = document.getElementById("cantidad").value;
    total = 0;
if (monedita == null) {
    alert("Ingrese el tipo de cambio")
} 
if (cantidad <= 0) {
    alert("Ingrese la cantidad de pesos")
}

if (monedita != null && cantidad > 0 ) {
    total = cantidad / monedita;
    let resultadoTextElement = document.getElementById('result');
    resultadoTextElement.innerText = `Precio total ${total}`;
}

}


function agregarMoneda()
{
    //Agregar nombre de la moneda

    var nombreIngresado = document.getElementById("nueva").value
    newOption = document.createElement("option");
    newContent = document.createTextNode(nombreIngresado)
    

    newOption.appendChild(newContent);

    document.getElementById("moneda").appendChild(newOption)

    //Agregar valor de la moneda

    var conversion = document.getElementById("valor").value
    newOption.setAttribute("value", conversion)
    

    
}