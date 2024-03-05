Alert=("Bienvenid@ a Scarlet Cosmetics")
Alert=("Crea una cuanta para acceder a la tienda online")

while (username ===" "){
    username = prompt ("Elige un nombre de usuario:");
}
 while (password === " " || password.length < 6 ||password.length >15){
    password= prompt (" Ingresa una contraseña entre 6 y 15 caracteres:")
 }

alert("Ya eres parte de Scarlet Cosmetics" + username);

console.log("Guarda esta información en un lugar seguro para tus futuras compras.\nNombre de usuario: " + username + "\n" + "Contraseña: " + password) + "\n";

const searchProducts = [
    {
        name: "labial",
        price: 1500
    },
    {
        name: "sombras de ojos",
        price: 10000
    },
    {
        name: "protector solar",
        price: 15000
    },
    {
        name: "esmalte de uñas",
        price: 2500
    },
    {
        name: "rubor",
        price: 2500
    },
    {
        name: "body shimmer",
        price: 5000
    },
    {
        name: "delineador cat-eye",
        price: 7000
    },
    {
        name: "máscara para cejas",
        price: 3500
    },
    {
        name: "máscara para pestañas",
        price: 3500
    },
    {
        name: "gloss",
        price: 3000
    },
];

const names = searchProducts.map(product => product.name);
const list = names.join('\n');

let chosenProd = prompt(`Ingresa el producto que desees: \n${list}`);
console.log(searchProducts.filter((elem) => elem.name.includes(chosenProd)));

let stockProd = prompt(`Ingresa el producto que te interese consultar su stock:\n${list}`);
let found = searchProducts.some((elem) => elem.name === stockProd);

if (found) {
    alert("Hay stock del producto ingresado.");
} else {
    alert("El producto ingresado no se encuentra disponible.");
    found = false;
}

console.log(found);

let products = [
    {
        name: "sombra de ojos",
        price: 10000
    },
    { 
        name: "delineador cat-eye",
        price: 7000
    },
    { 
        name: "máscara para pestañas",
        price: 3500
    },
    { 
        name: "esmalte de uñas",
        price: 2500
    },
    { 
        name: "body shimmer",
        price: 5000
    },
];


function showProducts() {
    console.log("--- LISTA DE PRODUCTOS ---");
    for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1}. ${products[i].name} - S/ ${products[i].price}`);
        }
}

    function buyProducts() {
        let cart = [];
        let option;
    
        while (option !== "0") {
        showProducts();
        console.log("0. Terminar compra");
        option = prompt("Selecciona un número (del 1 al 6) para comprar (0 para terminar)\nMira la lista desde la consola.");
    
        if (option !== "0") {
            let productIndex = Number(option) - 1;
    
            if (productIndex >= 0 && productIndex < products.length) {
            let quantity = Number(prompt(`¿Cuántos ${products[productIndex].name} quieres comprar?`));
            let product = {
                ...products[productIndex],
                quantity: quantity
            };
            cart.push(product);
            alert(`Producto añadido al carrito: ${product.name}`);
            console.log(`Producto añadido al carrito: ${product.name}`);
    
            alert(`La cantidad que compraste: ${product.quantity}`);
            console.log(`La cantidad que compraste: ${product.quantity}`);
            } else {
            alert("Esa opción no es válida. Inténtalo nuevamente.")
            }
        }
        }


        console.log("--- RESUMEN DE COMPRA ---");
        let total = 0;

        for (let i = 0; i < cart.length; i++) {
        let product = cart[i];
        total += product.price * product.quantity;
        }

        let igv = total * 0.18;
        let subtotal = total - igv;

        alert(`Subtotal: S/ ${subtotal.toFixed(2)}`);
        console.log(`Subtotal: S/ ${subtotal.toFixed(2)}`);
        alert(`IGV (18%): S/ ${igv.toFixed(2)}`);
        console.log(`IGV (18%): S/ ${igv.toFixed(2)}`);
        alert(`Total a pagar : S/ ${total.toFixed(2)}`);
        console.log(`Total a pagar : S/ ${total.toFixed(2)}`);
    }

    buyProducts();


while(true){
    let colour = prompt("Elige un color (negro, azul, guinda y blanco)").toString().toUpperCase();

    switch (colour) {
        case "NEGRO":
            alert(`Has elegido el color ${colour}`);
            break;
        case "AZUL":
            alert(`Has elegido el color ${colour}`);
            break;
        case "ROJO":
            alert(`Has elegido el color ${colour}`);
            break;
        case "ROSA":
            alert(`Has elegido el color ${colour}`);
            break;
        default:
            alert("Ingresaste un color no válido");
        continue;
    }
    break;
}

alert ("Agredecemos tu preferencia. \nEsperamos verte de nuevo pronto.")