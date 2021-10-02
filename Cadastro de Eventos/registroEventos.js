var nomeEvento, dataNasc, dataEvento, nomeParticipante, dataAtual, idade 

//Dados Do Sistema
var data = new Date()
 var dataAtual = (data.getFullYear()+ '-' (data.getMonth()+1)+ '-' + data.getDate()).replaceAll("/");
//Dados so Usuario
let usuario = alert('Seja Bem vindo')
    nomeParticipante = window.prompt('digite seu nome');
    dataNasc = window.prompt('data de nascimento');

    //Processamento de dados 
 var idade = dataAtual - dataNasc
  console.log(dataAtual)
  console.log(dataNasc)  
   
 if (idade >18 ) {
     dataEvento = window.prompt('Digite a mes do evento')
        if (dataEvento > dataAtual ) {
           // entrada de dados
            nomeEvento = window.prompt('Digite um nome para seu evento: ');
            // saída de dados
            window.alert(nomeParticipante + ', o evento ' + nomeEvento + ' foi cadastrado com sucesso!');
        } else {
           alert('Evento não pode ser cadastrado por data invalida')
        } 
    
    }
