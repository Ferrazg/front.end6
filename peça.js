const produto = new Object();
        
    produto.Peça = String(window.prompt('Digite o nome da Peça'));
    produto.Peso =Number(window.prompt('Digite o peso da Peça'));
    produto.id = 0;

        
    switch (produto) {
        case produto.Peça:
            (produto.Peça <= 3);
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
