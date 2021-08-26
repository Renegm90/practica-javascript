//Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 

// console.log("El perímetro del cuadrado es: " + perimetroCuadrado +"cm");

function areaCuadrado(lado){
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado +"cm^2");
console.groupEnd();

//Código del triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del tri+angulo miden: " 
// + ladoTriangulo1 
// + "cm, " 
// + ladoTriangulo2 
// + "cm, " 
// + baseTriangulo 
// + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
// console.log("El perímetro del triángulo es de: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura)/2;
}
// console.log("El área del triángulo es de: " + areaTriangulo + "cm^2");

console.groupEnd();

//Código del Círculo
console.group("Círculos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es de: " + radioCirculo + "cm");

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
}
// console.log("El diámetro del círculo es de: " + diametroCirculo + "cm");

//PI
// const PI = Math.PI;
// console.log("PI es: " + PI );

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
} 
// console.log("El perímetro del círculo es de: " + perimetroCirculo + "cm");

//Área
function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}
// console.log("El área del círculo es de: " + areaCirculo + "cm^2");

console.groupEnd();


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function alturaTrianguloIsoceles(lado1,lado2, base){
    if (lado1 !=lado2) {
        console.error ("Los lados 1 y 2 no son iguales");
    } else {
        return Math.sqrt((lado1 * lado2)- (base * base)/4);
    }
}