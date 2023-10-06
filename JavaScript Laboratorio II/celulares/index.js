function cotizar() {
    var cantidad = document.getElementById("cantidad").value;
    var capacidad = document.getElementById("capacidad").value;
    var color = document.getElementById("color").value;
    var precio = 0;
    const capacidad128 = 150000;
    const capacidad256 = 165000;
    const capacidad512 = 180000;


    switch(color){
        case "grafito":
            document.getElementById("imagen").src = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-max-graphite-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202942000" 
            break;
        case "sierra":
            document.getElementById("imagen").src = "https://www.mink.com.ar/qloud/ryr/fotos/22241-0.jpg"
            break;
        case "silver":
            document.getElementById("imagen").src = "https://itechstore.com.ar/wp-content/uploads/2023/01/Apple-iPhone-12-Pro-256GB-Silver.jpeg"
            break;
        case "gold":
            document.getElementById("imagen").src = "https://acdn.mitiendanube.com/stores/001/116/601/products/refurb-iphone-11-pro-gold-20191-ead7180a946aba6a6416741582055958-640-0.jpg"
    }
    
    if (capacidad == 128) {
        precio = capacidad128 * cantidad;
    }
    else if (capacidad == 256) {
        precio = capacidad256 * cantidad;
    }
    else {
        precio = capacidad512 * cantidad;
    }

    let resultadoTextElement = document.getElementById('result');

    if (precio == 0) {
        resultadoTextElement.innerText = `Error debe seleccionar una capacidad e ingresar la cantidad`;
    }else{
        resultadoTextElement.innerText = `Precio total ${precio}`;
    }
    
    
    
}


    
    
