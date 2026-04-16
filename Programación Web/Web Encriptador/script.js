const AreaTexto = document.querySelector(".AreaTexto");
const MensajeEncriptado = document.querySelector(".MensajeEncriptado");
const MensajeTexto = document.querySelector(".MensajeTexto");
const MensajeTexto2 = document.querySelector(".MensajeTexto2");
let CaracterEspecial = false;

// Mensajes iniciales
const mensajeInicial = "Ningún mensaje fue encontrado";
const mensajeRecomendaciones = "Por favor inserte un mensaje y precione en encriptar o desencriptar segun quiera";

function verificarTexto(texto) {
    // Expresión regular para verificar solo letras minúsculas sin acentos
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

function encriptar(TextoEncriptar) {
    if (!verificarTexto(TextoEncriptar)) {
        MensajeTexto.textContent = "El mensaje no se puede encriptar";
        MensajeTexto2.textContent = "Recuerde seguir las recomendaciones";
        MensajeTexto.style.display = "block";
        MensajeTexto2.style.display = "block";
        AreaTexto.value = "";
        MensajeEncriptado.value = ""; // Limpiar el área de texto encriptado
        MensajeEncriptado.style.backgroundImage = "url('Imagenes/Texto.png')"; // Mostrar imagen de fondo
        CaracterEspecial = true;
        return "";
    }
    let matrizEncriptar = [["e", "enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    TextoEncriptar = TextoEncriptar.toLowerCase();
    for(let x=0;x<matrizEncriptar.length;x++){
        if(TextoEncriptar.includes(matrizEncriptar[x][0])){
            TextoEncriptar = TextoEncriptar.replaceAll(matrizEncriptar[x][0],matrizEncriptar[x][1]);
        }
    }
    return TextoEncriptar;
}

function BotonEncriptar() {
    const TextoEncriptado = encriptar(AreaTexto.value);
    if (TextoEncriptado !== "") {
        MensajeEncriptado.value = TextoEncriptado;
        AreaTexto.value = "";
        MensajeEncriptado.style.backgroundImage = "none"; // Ocultar imagen de fondo
        MensajeTexto.style.display = "none";
        MensajeTexto2.style.display = "none";
    }else if(CaracterEspecial==false){
        mostrarMensajeSiVacio(); // Asegurarse de que se muestre el mensaje original
    }else if(CaracterEspecial==true){
        CaracterEspecial=false;
        MensajeTexto.style.display = "block";
        MensajeTexto2.style.display = "block";
        MensajeEncriptado.style.backgroundImage = "url('Imagenes/Texto.png')";
    }else {
        mostrarMensajeSiVacio();
    }
}

function desencriptar(TextoDesencriptar) {
    if (!verificarTexto(TextoDesencriptar)) {
        MensajeTexto.textContent = "El mensaje no se puede desencriptar";
        MensajeTexto2.textContent = "Recuerde seguir las recomendaciones";
        MensajeTexto.style.display = "block";
        MensajeTexto2.style.display = "block";
        AreaTexto.value = "";
        MensajeEncriptado.value = ""; // Limpiar el área de texto encriptado
        MensajeEncriptado.style.backgroundImage = "url('Imagenes/Texto.png')"; // Mostrar imagen de fondo
        CaracterEspecial = true;
        return "";
    }
    let matrizEncriptar = [["e", "enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    TextoDesencriptar = TextoDesencriptar.toLowerCase();
    for(let x=0;x<matrizEncriptar.length;x++){
        if(TextoDesencriptar.includes(matrizEncriptar[x][1])){
            TextoDesencriptar = TextoDesencriptar.replaceAll(matrizEncriptar[x][1],matrizEncriptar[x][0]);
        }
    }
    return TextoDesencriptar;
}

function BotonDesencriptar() {
    const TextoDesencriptado = desencriptar(AreaTexto.value);
    if (TextoDesencriptado !== "") {
        MensajeEncriptado.value = TextoDesencriptado;
        AreaTexto.value = "";
        MensajeEncriptado.style.backgroundImage = "none"; // Ocultar imagen de fondo
        MensajeTexto.style.display = "none";
        MensajeTexto2.style.display = "none";
    }else if(CaracterEspecial==false){
        mostrarMensajeSiVacio(); // Asegurarse de que se muestre el mensaje original
    }else if(CaracterEspecial==true){
        CaracterEspecial=false;
        MensajeTexto.style.display = "block";
        MensajeTexto2.style.display = "block";
        MensajeEncriptado.style.backgroundImage = "url('Imagenes/Texto.png')";
    }else {
        mostrarMensajeSiVacio();
    }
}

function copiar() {
    MensajeEncriptado.select();
    MensajeEncriptado.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
    mostrarMensajeSiVacio(); // Asegurarse de que se muestre el mensaje original
}

function mostrarMensajeSiVacio() {
    // Verifica si el valor de MensajeEncriptado está vacío o solo contiene espacios
    if (MensajeEncriptado.value.trim() === "") {
        MensajeTexto.textContent = mensajeInicial;
        MensajeTexto2.textContent = mensajeRecomendaciones;
        MensajeTexto.style.display = "block";
        MensajeTexto2.style.display = "block";
        MensajeEncriptado.style.backgroundImage = "url('Imagenes/Texto.png')"; // Mostrar imagen si el área de texto está vacía
    } else {
        MensajeTexto.style.display = "none";
        MensajeTexto2.style.display = "none";
    }
}

// Llama a la función para mostrar el mensaje inicial
mostrarMensajeSiVacio();
