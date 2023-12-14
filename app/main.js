
//Carousell imágenes
// Fallo cuando hago click en una miniatura me salta 2 imagenes y va a la que se encuentra en 3ª posición, pero luego va normal
// No he conseguido hacer destacar las miniaturas =)    
let imgActual = 0;
let miniaturas = document.querySelectorAll('.mini');

miniaturas.forEach(item => {
    item.addEventListener('click', () => {
        imgActual = item.dataset.num;
        cambioimagen(miniaturas[imgActual]);
    })
})

let cambioimagen = (item) => {
    let imagengrande = document.querySelector("#caja");
    imagengrande.src = item.src;
    imagengrande.alt = item.alt;
};

let btnizq = document.querySelector("#izquierda");
btnizq.addEventListener("click", () => {

    if (imgActual == 0) {
        imgActual = 7
    } else {
        imgActual--;
    }
    cambioimagen(miniaturas[imgActual]);
})

let btnDerch = document.querySelector("#derecha");
btnDerch.addEventListener("click", () => {
    if (imgActual == 7) {
        imgActual = 0

    } else {
        imgActual++;
    }
    cambioimagen(miniaturas[imgActual]);
})






// abrir lista compra

/*...$(document).ready(() => {
    $(".carro_btn").click(() =>{
        $(".carro_lista").toggleClass("opened");
    });

    $(".carro_lista .close").click(() =>{
        $(".carro_lista").removeClass("opened");
    });
});

hecho con jQuery (me parece más facil este modo pero no se si se puede)

*/

document.addEventListener("DOMContentLoaded", () => {
    const toggleCarroLista = () => document.querySelector(".carro_lista").classList.toggle("opened");

    document.querySelector(".carro_btn").addEventListener("click", toggleCarroLista);

    document.querySelector(".carro_lista .close").addEventListener("click", () => {
        document.querySelector(".carro_lista").classList.remove("opened");
    });
});

// abrir card detalle

/*..document.addEventListener("DOMContentLoaded", () => {
    const toggleCarroLista = () => document.querySelector(".detalle_card").classList.toggle("opened");
    
    document.querySelector(".tarjeta").addEventListener("click",toggleCarroLista);

    document.querySelector(".detalle_card .close_detail").addEventListener("click", () => {
        document.querySelector(".detalle_card").classList.remove("opened");
    });
}); */

/*...for (let i = 0; i < array.length; i++) {
    const card = cards[i];      
    
} esto es lo mismo que  lo que hay debajo*/

const mostrarDetalle = (numSerie) => {

    let detail = getDetail(numSerie);
    console.log(detail)

    const detalleCard = document.getElementById(`detalleCard`);
    const detalleCardInfo = document.getElementById(`detalleCardInfo`);
    const detalleCardImage = document.getElementById(`detalleCardImage`);
    const NumeroSerie = document.getElementById(`NumeroSerie`);

    NumeroSerie.setAttribute('value', detail.NumeroSerie);
    detalleCardImage.setAttribute('src', detail.Imagen);

    detalleCardInfo.innerHTML =
        //`<img class="img_detalle" src="/assets/images/img14.png" alt=""></img>
        `<h2 class="nombre_producto"> ${detail.Nombre}</h2>
			<h4 class="serie">Nº${detail.NumeroSerie}</h4>
			<p class="desc_prod">${detail.Description}</p>
			<h1 class="price"> ${detail.Price}€</h1>
			<button class="cart"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/></svg></button>
		</div>`
    //<button class="close_detail"><i class="fa-solid fa-xmark"></i></button>`;
    //document.querySelector()   
    detalleCard.classList.add(`opened`);
};

const addToCart = (numSerie) => {
    let detail = getDetail(numSerie);
    console.log(detail)

    const CartProdName = document.getElementById(`CartProdName`);
    const CartNumeSerie = document.getElementById(`CartNumeSerie`);

    CartProdName.innerHTML = detail.Nombre;
    CartNumeSerie.innerHTML = `Nº ${detail.NumeroSerie}`;

};

document.querySelectorAll(`.tarjeta`).forEach((tarjeta) => {
    tarjeta.addEventListener(`click`, () => {
        const numSerie = tarjeta.getAttribute('data-id');
        mostrarDetalle(numSerie);
    });
});

document.querySelector(".detalle_card .close_detail").addEventListener("click", () => {
    document.querySelector(".detalle_card").classList.remove("opened");
});

function getDetail(numero_serie) {
    switch (numero_serie) {
        case "239934":
            return {
                Imagen: '/assets/images/img14.png',
                Nombre: 'Woman 3d Face',
                Price: 637,
                Description: `27 26 12 21 19 16 14 9 3 22 20 5 20 22 14 1 1 13 1 12 7 1 13 1 4 5 5 6 9 3 9 5 14 3 9 1
            3 9 2 5 19 14é21 9 3 1 26 17 16 5 20í1 3ó20 13 9 3 1, 4 5 20 1 6 9 1 14 4 16 12 1 20 5 25 17 5 3 21 1 21
            9 23 1 20 1 12 6 22 20 9 16 14 1 19 12 1 12ó7 9 3 1 4 5 12 1 20 13á18 22 9 14 1 20 3 16 14 12 1 2 5 12
            12 5 27 1 4 5 12 16 9 14 5 25 17 12 16 19 1 4 16. 5 14 3 1 4 1 9 14 21 5 19 1 3 3 9ó14, 4 5 10 1 22 14 1
            5 20 21 5 12 1 4 5 3 22 19 9 16 20 9 4 1 4 26 1 20 16 13 2 19 16, 3 16 13 16 22 14 1 22 21ó13 1 21 1 18
            22 5 8 1 4 5 20 3 22 2 9 5 19 21 16 5 12 1 19 21 5 4 5 12 1 3 16 14 5 25 9ó14 5 14 22 14 22 14 9 23 5 19
            20 16 4 5 17 16     20 9 2 9 12 9 4 1 4 5 20 9 14 6 9 14 9 21 1 20.`,
                NumeroSerie: 239934
            };
        case "857634":
            return {
                Imagen: '/assets/images/img1.png',
                Nombre: 'Human 3d Porfile',
                Price: 637,
                Description: `27 26 12 21 19 16 14 9 3 22 20 5 20 22 14 1 1 13 1 12 7 1 13 1 4 5 5 6 9 3 9 5 14 3 9 1
                3 9 2 5 19 14é21 9 3 1 26 17 16 5 20í1 3ó20 13 9 3 1, 4 5 20 1 6 9 1 14 4 16 12 1 20 5 25 17 5 3 21 1 21
                9 23 1 20 1 12 6 22 20 9 16 14 1 19 12 1 12ó7 9 3 1 4 5 12 1 20 13á18 22 9 14 1 20 3 16 14 12 1 2 5 12
                12 5 27 1 4 5 12 16 9 14 5 25 17 12 16 19 1 4 16. 5 14 3 1 4 1 9 14 21 5 19 1 3 3 9ó14, 4 5 10 1 22 14 1
                5 20 21 5 12 1 4 5 3 22 19 9 16 20 9 4 1 4 26 1 20 16 13 2 19 16, 3 16 13 16 22 14 1 22 21ó13 1 21 1 18
                22 5 8 1 4 5 20 3 22 2 9 5 19 21 16 5 12 1 19 21 5 4 5 12 1 3 16 14 5 25 9ó14 5 14 22 14 22 14 9 23 5 19
                20 16 4 5 17 16     20 9 2 9 12 9 4 1 4 5 20 9 14 6 9 14 9 21 1 20.`,
                NumeroSerie: 239934
            };



        default:
            alert('Numero serio not found!!!!!!');
            break;
    }



}






// add to cart

document.addEventListener("DOMContentLoaded", () => {
    const toggleCarroLista = () => {
        const NumeroSerie = document.getElementById(`NumeroSerie`);

        addToCart(NumeroSerie.getAttribute('value'))
        document.querySelector(".addToCart").classList.toggle("opened")
    };

    document.querySelector(".cart").addEventListener("click", toggleCarroLista);

    document.querySelector(".addToCart .close_add").addEventListener("click", () => {
        document.querySelector(".addToCart").classList.remove("opened");
    });
});

