





// botones.forEach(boton => {
//     boton.addEventListener('click', (e) => {
//         let valor = e.target.value;
//         console.log(`el numero es ${valor}`);
//     });
// });


//   



// let fechaActual = new Date();
// console.log(fechaActual);

// function obtenerInformacion(){
//     let inputs =document.querySelectorAll('.section__input');
//     let valores=[];
//     for(let i=0; i<inputs.length; i++){
//         valores.push(inputs[i].value)

//     }
//     console.log(valores);

//     let date = valores.join('/');
//     return date;
// }

// let f = Date.now();
// console.log(f);

// let hoy = new Date(f);
// console.log(hoy.toLocaleDateString());

//INPUT
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');


const dayOutput= document.querySelector("#day__output");
const monthOutput= document.querySelector("#month__output");
const yearOutput= document.querySelector("#year__output");

const buttonSubmit = document.querySelector(".section__submit");

const date = new Date();

const currentYear = date.getFullYear();

const currentMonth= date.getMonth() + 1;

const currentDay = date.getDate();
const inputs = document.querySelectorAll(".section__input");
const spanError = document.querySelectorAll(".span__error")
buttonSubmit.addEventListener("click", (e)=>{
    e.preventDefault();

  


    const userYears=parseInt(yearInput.value)

    let ageInYears= currentYear- userYears;


    const userMonths= parseInt(monthInput.value);
    //validación año
    if(userYears>currentYear){
        
    }

    const monthsRange = currentMonth-userMonths;
    

    let ageInMonths;

    if(monthsRange<0){
        ageInYears--;
         ageInMonths= 12+monthsRange;
    }
    else{
        ageInMonths= monthsRange;

    }
    
   
   

    const userDay=parseInt(dayInput.value);


    const dayRange= currentDay-userDay;
    let ageInDays;
    if(dayRange<0){
        ageInMonths--;
        ageInDays= getDaysInMonth(userYears, userMonths) + dayRange ;

    }else{
        ageInDays= dayRange;
    }

    if(ageInMonths<0){
        ageInMonths=11;
        ageInYears--;
    }
    
   

    dayOutput.textContent=ageInDays;
    yearOutput.textContent=ageInYears;
    
    monthOutput.textContent=ageInMonths;

    validateForm(userYears, userMonths, userDay);
   
    

    
})





function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}


function validateForm(userYears, userMonths, userDay){
    inputs.forEach(i=>{
        const previousSibling = i.previousElementSibling;
        const sibling = i.nextElementSibling; 
        if(!i.value){
            sibling.classList.add("span__error--active");
            sibling.textContent="This field is required";
            previousSibling.classList.add("label__colorError");
            i.classList.add("input__colorError")
            dayOutput.textContent="--";
            yearOutput.textContent="--";  
            monthOutput.textContent="--";
        }else if(userYears>currentYear && i.id=="year"){
            sibling.classList.add("span__error--active");
            sibling.textContent="Must be in the past";
            previousSibling.classList.add("label__colorError");
            i.classList.add("input__colorError")
            dayOutput.textContent="--";
            yearOutput.textContent="--";  
            monthOutput.textContent="--";
            
        }else if(userMonths>12 && i.id=="month"){
            sibling.classList.add("span__error--active");
            sibling.textContent="Must be a valid month";
            previousSibling.classList.add("label__colorError");
            i.classList.add("input__colorError")
            dayOutput.textContent="--";
            yearOutput.textContent="--";  
            monthOutput.textContent="--";
        }else if(userDay>getDaysInMonth(userYears, userMonths) && i.id=="day" ){
            sibling.classList.add("span__error--active");
            sibling.textContent="Must be a valid day";
            previousSibling.classList.add("label__colorError");
            i.classList.add("input__colorError")
            dayOutput.textContent="--";
            yearOutput.textContent="--";  
            monthOutput.textContent="--";
        }else{
            sibling.classList.remove("span__error--active");
            previousSibling.classList.remove("label__colorError");
            i.classList.remove("input__colorError")
            
        }
        
    })

}
