

var textoPronto = [];
var alfabeto =  "abcdefghijklmnopqrstuvwxyz";
var espaco = " ";
var receber1 = document.querySelector('#escolha1');
var receber2 = document.querySelector ('#escolha2');






var funcs_btn1 = {
    
  func1: function codificar( ) {
 
  
  var texto = document.querySelector('#text');
  var chave = document.querySelector ('#chave');
  var palavras = texto.value;
  var x = parseInt(chave.value);
  var texto2 = document.querySelector("#text2");
  

  for (var i = 0; i < palavras.length; i++)
    {
       
       
       var indiceAlfabeto = alfabeto.indexOf(palavras[i])
       var soma = indiceAlfabeto + x 
       console.log(soma)
       
       
       if( soma > 25 ) {
         texto2.textContent += alfabeto[soma-26]
          
       } else{
       texto2.textContent += alfabeto[soma]
       }
    
      }   

    
  
      func2: function codificar() {
      
      
      var texto = document.querySelector ('#text');
      var resultado = document.querySelector ('#text2');
     
       var texto = texto.value;
       var b64 = btoa (teste);
       resultado.textContent = b64;
    }
  
   }
  
  }

   var funcs_btn2 ={
  
  
  func1: function Decodificar( ) {
 
  
  var texto = document.querySelector('#text');
  var chave = document.querySelector ('#chave');
  var palavras = texto.value;
  var x = parseInt(chave.value);
  var texto2 = document.querySelector("#text2");
  
    for (var i = 0; i < palavras.length; i++)
    {
       
       
       var indiceAlfabeto = alfabeto.indexOf(palavras[i])
       var soma = indiceAlfabeto - x 
       console.log(alfabeto[soma])
       
       if( soma < 0 ) {
         texto2.textContent += alfabeto[soma+26]
          
       } else{
       texto2.textContent += alfabeto[soma]
       }
    }

     func2:  function  Decodificar( ) {
     
     var texto = texto.value; 
     var base = btoa (teste);
     resultado.textContent = base;
    
   
    } 
    
   }
    


}

