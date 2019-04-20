var
    criptograma = criptograma || {},
    document = document || {},
    console = console || {},
    window = window || {};

criptograma.armar = function (contenedor) {
    criptograma.contenedor = contenedor;

    function inicio() {
        if (typeof criptograma.contenedor === "string") {
            criptograma.contenedor = document.getElementById(criptograma.contenedor);
        }
        var tSection = document.createElement("section");

        tSection.classList.add("botonera");
        criptograma.contenedor.appendChild(tSection);
        criptograma.generarBotonera(tSection);
        criptograma.asignarSimbolo(tSection); //cambiar a seccion "juego/mostrar"
    }

    window.addEventListener("DOMContentLoaded", inicio);

};

criptograma.generarBotonera = function (contenedor) {
    var boton, i, txt;

    for (i = 0; i < 5; i ++) {

        boton = document.createElement("button");
        boton.classList.add("boton");
        boton.addEventListener("click", function () {
            window.alert("boton " + i)
        });
        boton.setAttribute("id", "boton" + i);
        txt = document.createTextNode("Frase " + i);
        boton.appendChild(txt);
        contenedor.appendChild(boton);

    }


}

criptograma.asignarSimbolo = function (contenedor) {
    var abc = criptograma.abecedario,
        num = criptograma.numeros,
        abc2 = criptograma.letras,
        i, j = 0,
        frase = "FRASE DE PRUEBA",
        aux = "",
        bandera = false,
        cuadro = document.createElement("blockquote"), parrafo,nodoT ;

    abc2.sort(function () {
        return Math.random() - 0.5
    });
    
    for (i = 0; i < abc.length; i++) {
        abc[i].simbolo = abc2[i];
    }
    
    for (i = 0; i < frase.length; i++) {
        while ((j < abc.length) && (!bandera)) {
            
            if (frase[i] == " ") {
                aux =aux + frase[i];
                bandera=true;
            } else {
                if (frase[i] == abc[j].letra) {
                    aux = aux + abc[j].simbolo;
                    console.log(frase[i]);
                    console.log(abc[j].simbolo);
                    bandera = true;
                }
            }
            j = j + 1;
        }
        j=0;
        bandera=false;
    }
    
    console.log(aux);
    nodoT = document.createTextNode(aux);
    parrafo = document.createElement("p");
    parrafo.appendChild(nodoT);
    cuadro.appendChild(parrafo);
    contenedor.appendChild(cuadro);
}
