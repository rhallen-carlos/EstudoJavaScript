let msg ='Bem vindo!';
let original= 'Texto Original!';
let substituto = 'Texto Substituto';

window.alert(msg);

function trocaTexto(){

  document.getElementById('troca').innerHTML = substituto;

}
function voltaTexto(){

  document.getElementById('troca').innerHTML = original;

}

function printar(){
  window.print();
}