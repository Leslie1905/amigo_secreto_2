// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAgregado = document.getElementById("amigo");
    let nombre = nombreAgregado.value.trim();
    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    nombreAgregado.value = '';
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


function sortearAmigo() {
    let listaNombres = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[listaNombres];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;

    if (amigos.length === 0) {
           alert('No hay amigos en la lista para realizar el sorteo.');
           
       }     
          return;
   }

