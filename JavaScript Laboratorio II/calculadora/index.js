function cotizar() {
    var zona = document.getElementById("zona").value;
    var cantidad = document.getElementById("cantidad").value;
    usuario = 0
    costoServicio= 102;
var getSelectedValue= document.querySelector('input[name="tipoUsuario"]:checked');

if(getSelectedValue == null) {   
    alert("Debe seleccionar una opcion de usuario");
    
}else {  
  usuario = getSelectedValue.value
 }

if (zona == null) {
    alert("Debe seleccionar una opcion de zona");
}else{
    costoSegunZona = zona
}

if (cantidad < 1) {
    alert("El numero ingresado no es válido");
} else {
     
    cantKwh = cantidad
    
}    

total = costoServicio + (cantKwh * costoSegunZona) * usuario

if (getSelectedValue != null && zona != null && cantidad > 0) {
    document.write(total) 
}  
    
}
