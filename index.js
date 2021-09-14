let precioApss = [
    {
        name: 'amazon',
        price: 14900,
    },

    {
        name: 'hbo',
        price: 19900,
    },
    
    {
        name: 'netflix',
        price: 32900,
    },

    {
        name: 'disney',
        price: 23900,
    },
];
const precioCine = 5800;
let numeroPeliculas;
let contador;
let resultado;

function calcular() {
    contador = 0;
    if(document.getElementById("netflix").checked){ 
        contador += precioApss[2].price;
    }
    if(document.getElementById("prime").checked){
         contador += precioApss[0].price;       
    }
    if(document.getElementById("disney").checked){
         contador += precioApss[3].price;       
    }
    if(document.getElementById("hbo").checked){
         contador += precioApss[1].price;       
    }
    console.log(contador);
    unselect();
    comparar(contador);
}


function unselect() {
    document.querySelectorAll('[type=radio]').forEach((x) => x.checked = false);
}

const comparar = function(contador){
    numeroPeliculas = document.getElementById("numeroPeliculas").value * precioCine;
    resultado = document.getElementById("resultado");
    console.log(numeroPeliculas);
    if(contador > 0 || numeroPeliculas >0){
        if(contador > numeroPeliculas){
            console.log(`Es mejor verlas en el Cine, $ ${numeroPeliculas}, con apps de sreaming costaria $ ${contador}`); 
            resultado.innerHTML = `Es mejor verlas en el Cine, $ ${numeroPeliculas}, con apps de sreaming costaria $ ${contador}`        
        }else{
            console.log(`Paga la suscripción a tus Apps favoritas, $ ${contador}, en el cine te costaria $ ${numeroPeliculas}`);
            resultado.innerHTML = `Paga la suscripción a tus Apps favoritas, $ ${contador}, en el cine te costaria $ ${numeroPeliculas}`
        }
    }
};




