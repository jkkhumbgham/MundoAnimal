class Animal {
  constructor(id, nombre, tipo,sexo, foto) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.sexo = sexo;
    this.foto = foto;
  }
}

// Base de datos en memoria
let animalesRepo = [
  new Animal(1, "Max", "Perro", "Macho","../IMG/Max.jpg"),
  new Animal(2, "Misu", "Gato","Hembra", "../IMG/nemo.jpeg"),
  new Animal(3, "Nemo", "Gato","Macho", "../IMG/misu.jpeg"),
  new Animal(4, "Mari","Perro","Hembra","../IMG/Mari.jpeg"),
  new Animal(5, "Ralf","Perro","Macho","../IMG/Ralf.jpeg"),
  new Animal(6,"Estela","Perro","Hembra","../IMG/Estela.jpeg")
];

// tbody de la tabla
const tabla = document.querySelector("#animales_tabla tbody");

// Cada animal como fila
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
