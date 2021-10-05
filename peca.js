var produto = new Object()
    produto.id = []
    produto.peca = produto.peca
    produto.peso = produto.peso
for (produto.id; (produto.id < 10); [produto.id++]) {
  produto.peca =(window.prompt('Digite o nome da Peça'));
  if (produto.peca.length > 3){
     produto.peso =parseFloat(window.prompt('Digite o peso da Peça'));
     if(produto.peso > 100){
       if(produto.id < 10 ) {
         alert('peça Cadastrada')
       } else{
         alert('Lista de Peças cheia')
       }
      } else{
       alert('Peso de Peça Invalido')
     }
    }else{
      alert('Nome de Peça Invalido')
  }
}
console.log(produto)
        
    