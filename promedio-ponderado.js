const notas = [
    {
        curso:"Educación Física",
        nota: 10,
        credito: 2,
    },
    {
        curso:"Programación",
        nota: 8,
        credito: 5,
    },
    {
        curso:"Finanzas Personales",
        nota: 7,
        credito: 5,
    },
    {
        curso:"Finanzas Personales",
        nota: 3,
        credito: 7,
    },
    {
        curso:"Finanzas Personales",
        nota: 9,
        credito: 3,
    },
];

const notasConCredito = notas.map(
    function (notaObjeto){
        return notaObjeto.nota * notaObjeto.credito;
    }
);

const sumaDeNotasConCredito = notasConCredito.reduce(
    function (suma = 0, nuevoValor){
        return suma + nuevoValor;
    }
);

const creditos = notas.map(
    function (notaObjeto){
        return notaObjeto.credito;
    }
);

const sumaDeCreditos = creditos.reduce(
    function (suma = 0, nuevoValor){
        return suma + nuevoValor;
    }
);

const promedioPonderado = sumaDeNotasConCredito / sumaDeCreditos;
