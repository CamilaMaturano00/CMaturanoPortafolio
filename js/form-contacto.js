const $form = document.querySelector('#form');
const botonMailto = document.querySelector('#direccion-enviar')
var botonEnviar = document.querySelector(".boton-enviar");
$form.addEventListener("submit",handleSubmit)

function handleSubmit (event){
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('name'));
    botonMailto.setAttribute('href',`mailto:maturano4219@gmail.com?subject=${form.get('name')} ${form.get('email')}&body=${form.get('message')}`);
    botonMailto.click();
};