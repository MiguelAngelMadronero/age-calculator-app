// const dayButton = document.querySelector('#day');
// const month = document.querySelector('#month');
// const year = document.querySelector('#year');





// botones.forEach(boton => {
//     boton.addEventListener('click', (e) => {
//         let valor = e.target.value;
//         console.log(`el numero es ${valor}`);
//     });
// });


//   



let fechaActual = new Date();
console.log(fechaActual);

function obtenerInformacion(){
    let inputs =document.querySelectorAll('.section__input');
    let valores=[];
    for(let i=0; i<inputs.length; i++){
        valores.push(inputs[i].value)

    }
    console.log(valores);

    let date = valores.join('/');
    return date;
}

let f = Date.now();
console.log(f);

let hoy = new Date(f);
console.log(hoy.toLocaleDateString());