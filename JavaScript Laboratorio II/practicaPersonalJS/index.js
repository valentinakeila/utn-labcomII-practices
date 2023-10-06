function agregarMoneda()
{
    //Agregar nombre de la moneda

    var nombreIngresado = document.getElementById("formulario").value
    document.getElementById("nuevo").innerHTML = "<input>"
    newContent = document.createTextNode(nombreIngresado)
    

    newOption.appendChild(newContent);

    document.getElementById("moneda").appendChild(newOption)

    
}