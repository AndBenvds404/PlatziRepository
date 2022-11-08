
//hacemos referencia a los tags,id,clases para poderlos usar
const titulo = document.querySelector('h1'); //tags
const input1 = document.querySelector('#c1'); //id
const form = document.querySelector('#form');
const input2 = document.querySelector('#c2');
const boton = document.querySelector('#btCalcular');
const pResultado = document.querySelector('.resultado'); //clases

//tag,id,class html y añade un evento y llama a funcion btn1Click
//boton.addEventListener("click", btn1Click);

//llamamos a los inputs que ingrese el usuario y manipulamos los datos
//function btn1Click(){
  //  var suma = Number(input1.value) + Number (input2.value);
    //pResultado.innerText = "Resultado: " + suma;
//}


///FORM///////
//form.addEventListener("submit", sumarInputform);

//function sumarInputform(event){
  //  var suma = Number(input1.value) + Number (input2.value);
   // event.preventDefault();
   // pResultado.innerText = "Resultado: " + suma;
//}


boton.addEventListener("click", sumarInputform);

function sumarInputform(event){
    var suma = Number(input1.value) + Number (input2.value);
    event.preventDefault();
    pResultado.innerText = "Resultado: " + suma;
}