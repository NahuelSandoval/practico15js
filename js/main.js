// ejemplo de cronometro
//se crea la funcion mostrarHora
function mostrarHora(){
    //variable reloj y se llama el div con id "reloj"
    let reloj = document.getElementById("reloj");
    //variable hora y se hace funcion constructora Date
    let hora =  new Date();
    //para visualizar la hora en el HTML y con el metodo toLocaleTimeString pasamos la hora a un string
    reloj.innerHTML = hora.toLocaleTimeString();
}
//creamos la variable cronometro y le aplicamos el metodo(funcion) setInterval a la funcion mostrarHora para actualizar la iteracion cada 1 segundo
let cronometro = setInterval(mostrarHora,1000)

//-----------manipulacion de DOM -----------

let titulo = document.getElementById ('titulo');
console.log(titulo)
console.log(titulo.innerHTML);
console.log(document.getElementById('titulo'))

titulo.innerText = 'Cambiaso de titulo'

//------------Ahora los parrafos

let parrafos = document.getElementsByClassName('parrafos')
console.log(parrafos);
console.log(parrafos[2].innerText);

//------------Ahora por tag

let parrafosTag =document.getElementsByTagName('p')
console.log(parrafosTag[1].innerHTML)
console.log(parrafos)

//-----------select de manera dinamica

const categorias = []

// solicitar entradas 

let entrada= prompt ('ingrese categorias \n (Escribir "ESC" para salir)')

while (entrada.toLocaleUpperCase() != "ESC"){

    categorias.push(entrada.toLocaleUpperCase())

    entrada=prompt ("Ingresar categoria \n (Escribir 'ESC' para salir")
    
}

//obtener el elemento

let miSelect = document.getElementById('select')

for (const categoria of categorias){
    miSelect.innerHTML += "<option>"+categoria+"</option>"
}




