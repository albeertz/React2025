//VANILLA JS------------------------------

// recuperamos el boton
const button = document.querySelector('button');

// al hacer click en el boton, tenems que ejecutar una function
button.addEventListener('click',function () {

// recuperar la id del elemento HTMLAllCollection
const id = button.getAttribute('data-id');

// llamar a un servicio para actualizar si me gusta 
// ejemplo togglelike(id)

if (button.classList.contains('liked')) {
    button.classList.remove('liked')
    button.innerText = 'Me gusta'
} else {
    button.classList.add('liked')
    button.innerText = 'Quitar me gusta'
}});

// REACT------------------------------

const appDomElement = document.getElementById('app');

