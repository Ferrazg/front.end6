//Dados Do Sistema
var data = new Date()
var dataAtual = (data.getFullYear()+ '-' + (data.getMonth()+1)+ '-' + data.getDate()).replaceAll("/"); 
var qtsParts; 
// entrada de dados no  sistema
for ([qtsParts =0]; (qtsParts < 100); qtsParts++){
var nomeParticipante = window.prompt('digite seu nome');
   alert('Seja Bem vindo')
  var dataNasc = window.prompt('Digite sua data de nascimento');
// Manipulando data de Nascimento para declarar idade de participante   
    var d1 = dataNasc.substr(4,4)
    var d2 = dataNasc.substr(2,2)
    var d3 = dataNasc.substr(0,2)
    var dN = d1 + '-' + d2 + '-' + d3
    var d4 = data.getFullYear()
    //Processamento de dados 
  var idade = d4 - d1
    if (idade >18 ) {
  var dataEvento = window.prompt('Digite a data do seu evento');
//manipulando data do evento para poder processar cadastro do evento 
    var d5 = dataEvento.substr(4,4)
    var d6 = dataEvento.substr(2,2)
    var d7 = dataEvento.substr(0,2)
    var dE =  d5 +  d6  + d7
    var d8 = (data.getFullYear()+ '-' + (data.getMonth()+1)+ '-' + data.getDate());
//processamento de condição para liberação do cadastro do evento   
    if (dE > d8 ) {
// entrada de dados para cadastro do evento
  var nomeEvento = window.prompt('Digite um nome para seu evento: ');
//processamento de todas condição para liberação do cadastro do evento 
    if (idade >18 && qtsParts < 100 && dE > d8) {
      window.alert(nomeParticipante + ', o evento ' + nomeEvento + ' ' +' foi cadastrado com sucesso!');
       } else {
          alert('Lista de Participantes cheia')
      }     
    } else {
        alert('Evento não pode ser cadastrado por data invalida')
      }
  } else {
      alert ("Idade minima nao atingida")
    }
}