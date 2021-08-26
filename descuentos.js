// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento, descuento2){
    const porcentajePrecioConDescuento = 100 - descuento - descuento2;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/ 100;

    return precioConDescuento;
}


// ARRAY PARA LA SOLUCION 1 Y 2
// const cupons = [
//     "cupon1",
//     "cupon2",
//     "cupon3",
// ];


const cupons = [
    {
        name: "cupon1",
        discount: 15,
    },
    {
        name: "cupon2",
        discount: 30,
    },
    {
        name: "cupon3",
        discount: 25,
    },
]


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;


    const isCuponValueValid = function(cupon) {
        return cupon.name === cuponValue;
    };

    const userCupon = cupons.find(isCuponValueValid);

    if (!userCupon){
        alert ("El cupón " + cuponValue + " no es válido");
    }else {
        const descuento = userCupon.discount;
        
    
    // let descuento;


    // SOLUCION #1
    // switch(cuponValue){
    //     case "cupon1" :
    //         descuento = 15;
    //     break;
    //     case "cupon2" :
    //         descuento = 30;
    //     break;
    //     case "cupon3" :
    //         descuento = 25;
    //     break;
    // }

    // SOLUCION #2
    // if (!cupons.includes(cuponValue)){
    //     alert("El cupón " + cuponValue + " no es válido"); 
    // } else if (cuponValue === "cupon1"){
    //     descuento = 15;
    // } else if (cuponValue === "cupon2"){
    //     descuento =30;
    // } else if (cuponValue === "cupon3"){
    //     descuento = 25;
    // }

       const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue, descuento);

       const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son :$" + precioConDescuento;
    }
}



//console.log("El precio original es " + precioOriginal);  es una forma de utilizar el console.log

// tambien se le puede enviar un objeto el cual queremos que nos imprima , es de la siguiente manera:
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });