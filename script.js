const h1 = document.querySelector('h1');
const form= document.querySelector('#form');
const pResult = document.querySelector('#result');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event){
    // console.log(event);
    // event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = 'Resultado: ' + sumaInputs;
};

/*form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    console.log(event);
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = 'Resultado: ' + sumaInputs;
};*/

/*console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

//h1.innerText = 'Patito <br> Feo'; 
//h1.innerHTML = 'Patito <br> Feo';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo'); 

h1.classList.add('platzisony');
h1.classList.remove('platzilg');
//la propiedad toggle es muy buena con eventos en JS
//dependiendo si ya tiene la calse se puede remover o añadir cuando se ejecute el toggle 
//h1.classList.toggle('platzilg');
//me devuelve true or false si esa etiqueta tiene la calse
//que le estoy evaluando con (contains)
console.log(h1.classList.contains('platzisony'));


//input.value = '456';

const img = document.createElement('img');
img.setAttribute('src', 'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/OEGSX3VVV5CFZHKGUQQA5NVYVQ.jpg');
console.log(img);
//pid.innerHTML = '';
//pid.appendChild (img);
*/
