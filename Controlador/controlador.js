//CONTROLADOR

import { animalesRepo } from "../Modelo/script.js";

document.addEventListener("DOMContentLoaded", () => {
  const tabla = document.querySelector("#animales_tabla tbody");

  animalesRepo.forEach(animal => {
    let fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${animal.id}</td>
      <td>${animal.nombre}</td>
      <td>${animal.tipo}</td>
      <td>${animal.sexo}</td>
      <td><img src="${animal.foto}" alt="Foto de ${animal.nombre}" width="250"></td>
    `;
    tabla.appendChild(fila);
  });
});
