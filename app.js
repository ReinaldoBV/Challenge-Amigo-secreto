// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array to store the names of the participants
let participantes = [];

// Function to add a participant's name
function agregarAmigo() {
  // Get the name from the input field
  const nombre = document.getElementById("amigo").value;

  // Check if the name is empty or already exists
  if (nombre.trim() === "" || participantes.includes(nombre)) {
    alert("¡Error! Debes ingresar un nombre válido y que no se haya agregado previamente.");
    return;
  }

  // Add the name to the participants array and clear the input field
  participantes.push(nombre);
  document.getElementById("amigo").value = "";

  // Update the list of participants
  actualizarListaParticipantes();
}

// Function to update the list of participants in the HTML
function actualizarListaParticipantes() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Clear the existing list

  // Create and append list items for each participant
  participantes.forEach((participante) => {
    const listaItem = document.createElement("li");
    listaItem.textContent = participante;
    listaAmigos.appendChild(listaItem);
  });
}

// Function to randomly select a secret friend (excluding the current participant)
function sortearAmigo() {
  // Check if there are at least two participants
  if (participantes.length < 2) {
    alert("¡Necesitas al menos dos participantes para jugar!");
    return;
  }

  // Get a random index excluding the current participant's index
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * participantes.length);
  } while (randomIndex === participantes.indexOf(document.getElementById("amigo").value));

  // Get the name of the selected secret friend
  const amigoSecreto = participantes[randomIndex];

  // Display the secret friend in the result list
  const resultado = document.getElementById("resultado");
  resultado.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
}
