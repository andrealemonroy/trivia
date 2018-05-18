// Mandamos a llamar a los elmentos del HTML que se van a manipular
var saludarUsario = document.getElementById('bienvenida'); 
var mostrarResultados = document.getElementById('contenedorPrincipal');
var respuestasCorrectas = document.getElementById('respuestasCorrectas');
var respuestasIncorrectas= document.getElementById('respuestasIncorrectas');


var nombreUsuario = prompt("Ingresa tu nombre:");
saludarUsario.innerHTML = "😊 Bienvenid@ " + nombreUsuario + " 😊" ;
respuestasCorrectas.innerHTML = "<h4> Preguntas correctas </h4>";
respuestasIncorrectas.innerHTML = "<h4> Preguntas incorrectas </h4>";  
respuestasCorrectas.style.display="none";
respuestasIncorrectas.style.display="none";

function start(){
  var primeraPregunta = parseInt(prompt("1.¿Cuál es la bebida preferida de Gonzalo? \n 1. Agua \n 2. Cerveza \n 3. Vino"));
  if (primeraPregunta == 2) {
    respuestasCorrectas.innerHTML += "1.¿Cuál es la bebida preferida de Gonzalo? <br> <strong>Respuesta correcta:</strong> 🍺 La cerveza 🍺";
  } else {
    respuestasIncorrectas.innerHTML += "1.¿Cuál es la bebida preferida de Gonzalo? <br> <strong>La respuesta correcta era:</strong> 🍺 La cerveza 🍺";
  }

  var segundaPregunta = prompt("2.¿Qué es lo que más le gusta hacer a Lulú? \n A. Cantar \n B. Dibujar \n C. Programar");
  if (segundaPregunta == "A") { 
      respuestasCorrectas.innerHTML = respuestasCorrectas.innerHTML + "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
  } else {
    respuestasIncorrectas.innerHTML += "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
    respuestasCorrectas.style.display="block";
    respuestasIncorrectas.style.display="block";
}
}

