class Usuario {
    constructor(nombre,apellido,libros,mascota ){
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = libros,
        this.mascota = mascota
    }



    getFullName () {
       console.log(`${this.nombre} ${this.apellido}`)
    }

    
}

const user = new Usuario("Martin","Lutter King", "Historias inconcientes", "Romualdo")

user.addMascotas()
console.log(userMascotas)