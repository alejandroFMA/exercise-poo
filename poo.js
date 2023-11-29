// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.
// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.
// Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía de clases.


class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    obtDetalles() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}`;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }

    registrar() {
        return `Estudiante: ${this.obtDetalles()}, Curso: ${this.curso}, Grupo: ${this.grupo}`;
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    asignar() {
        return `Profesor: ${this.obtDetalles()}, Asignatura: ${this.asignatura}, Nivel: ${this.nivel}`;
    }
}

// Creando objetos y casos de prueba
let persona1 = new Persona("Ana", 30, "Femenino");
let estudiante1 = new Estudiante("Juan", 20, "Masculino", "Matemáticas", "A");
let profesor1 = new Profesor("Carlos", 45, "Masculino", "Física", "Universitario");

// Mostrando detalles
console.log(persona1.obtDetalles());
console.log(estudiante1.registrar());
console.log(profesor1.asignar());
