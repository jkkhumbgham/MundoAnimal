
//MODELO 

export class Animal {
  constructor(id, nombre, tipo, sexo, foto) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.sexo = sexo;
    this.foto = foto;
  }
}

// Falsa base de datos
export let animalesRepo = [
  new Animal(1, "Max", "Perro", "Macho","../IMG/Max.jpg"),
  new Animal(2, "Misu", "Gato","Hembra", "../IMG/misu.jpeg"),
  new Animal(3, "Nemo", "Gato","Macho", "../IMG/nemo.jpeg"),
  new Animal(4, "Mari","Perro","Hembra","../IMG/Mari.jpeg"),
  new Animal(5, "Ralf","Perro","Macho","../IMG/Ralf.jpeg"),
  new Animal(6,"Estela","Perro","Hembra","../IMG/Estela.jpeg")
];
