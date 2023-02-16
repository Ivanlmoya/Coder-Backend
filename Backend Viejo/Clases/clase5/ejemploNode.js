const personas = [
    {
        nombre:'alex',
        edad:27
    },
    {
        nombre:'juan',
        edad:24
    },
    {
        nombre:'facundo',
        edad:18
    }
]
const regresarNombre = (persona) => {
    return persona.nombre;
}

const nombreDePersona = persona.map(regresarNombre)
console.log(nombreDePersona);