function cambiarColorFondo(){
    var body = document.getElementById("body");
    var indice = Math.floor(Math.random() * 3) + 0; // math floor para que redondee hacia abajo
    // el math random da numero entre 0 y 1 en decimales  y lo multiplicas por lo del array y usas el math floor para que lo rendondee y le ponemos + cero para que arranque desde la primera posicion del array
    var colores = ["#8D73BA","#EF8580","#E7AF35"];
    body.style.backgroundColor = colores[indice];
}

setInterval(cambiarColorFondo ,30000) //no va el parentisis en el set interval cunado llamas la funcion en este caso no va