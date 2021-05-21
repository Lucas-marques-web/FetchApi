window.onload = function(){
  
}
function preencherDados(dados){
//document.getElementById('usuario').innerHTML = dados.message
document.getElementById('foto').innerHTML = "<img src='"+dados.message+"'>";
}
function pegarDados(){
    
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(dados => preencherDados(dados))
}
