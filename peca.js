var produto =  new Object ();       
    produto.Peca = String(window.prompt('Digite o nome da Peça'));
    produto.Peso =Number(window.prompt('Digite o peso da Peça'));
   
        for (var i = 0; i < produto.length; i++){
               
            if (produto.Peca.length <3){
                alert('Peça Não pode ser cadastrada');
            } 
            if (produto.Peso.length < 100);{
                alert('Peça Não pode ser cadastrada');
            }
            if (produto.length > 10) {
                alert('lista de peças cheia')
            } else{
                alert('Peça cadastrada')
            }
        }
        

        















   /*  if(produto.peca) {
        case produto.Peca:
            (produto.Peca <= 3);
            alert('peça invalida') ;           
       break;
        case produto.Peso:
            (produto.peso <= 99);
            alert('peça invalida');
        default:
            alert('peça cadastrada');
            produto.Peça = String(window.prompt('Digite o nome da Peça'));
            produto.Peso = Number(window.prompt('Digite o peso da Peça'));
            break;
        
             }
       do {
        console.log('Peça',produto);
        produto++;
    } while (produto.id < 10 ); {
        alert('lista de peças cheia');
        console.log(produto);
    }

 */