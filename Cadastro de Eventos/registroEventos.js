var nomeEvento, dataNasc, dataEvento, nomeParticipante, dataAtual, idade, 

//Dados Do Sistema
l
dataAtual = 2021
let mesAtual = 10
//Dados so Usuario
let usuario = window.prompt('Seja Bem vindo')
for (var i=0; i< 10; i++){
    nomeParticipante = window.prompt('Ola' " " + usuario);
    dataNasc = window.prompt('ano de nascimento');

    //Processamento de dados 
 idade = dataAtual - dataNasc
 idade = dataAtual - dataNasc

 if (idade >18 ) {
     dataEvento = window.prompt('Digite a mes do evento')
        if (dataEvento > mesAtual ) {
           // entrada de dados
            nomeEvento = window.prompt('Digite um nome para seu evento: ');
            // saída de dados
            window.alert(nomeParticipante + ', o evento ' + nomeEvento + ' foi cadastrado com sucesso!');
        } else {
           alert('Evento não pode ser cadastrado por data invalida')
        } 
    
    }
}