
/*
O QUE É JAVASCRIPT? 
    .Javascript vai ser o cerébro ao site, ele da a vida ao site.
    .ele vai funcionar no navegador do usuário
*/

/*
COMO EU INCLUO O JAVASCRIPT? 
    .ele vai funcionar da mesma forma do CSS, ou seja:
        .Inline
        .embarcado
        .externo
*/

function exibirAlerta2(){
    alert('vindo de um arquivo externo')
}

/*
COMANDOS BÁSICOS / OUTPUT
    .innerHTML
    .Alert
    .Console.log
    .Confirm
    .Document.write
*/

function comandosOutput(){
    alert('vai trabalhar seu vagabundo'); //vai dar um alerta na tela
}

function pegarElementoPeloID(){
    document.getElementById('boxVermelho').innerHTML = 'texto vindo de uma função'; //o innerHTML vai alterar o conteúdo vindo de um html
}   //documento.pegarElementoCujoId('boxVermelho'). alterarHTML para 'texto vindo de uma função';

function consoleLog(){
    console.log('primeira mensagem no console');//serve para visualizar o resultado do meu código, é a melhor opção, deve ser visto no console do inspecionar. Famoso "de-bug"
}
function documentWrite(){
    document.write('aqui é um texto que vem do javascript')// serve para adicionar um texto no html atraves do javascript
}

function confirme(){
    confirm('você concorda com isso?'); //serve para o usuário confirmar uma determinada requisição, pode ser cookies por exemplo.
}

/*
SELETORES
    .Podemos selecionar pelas classes, pelo ID e pelas TAGS

    .Alterando o CSS de um elemento:
        .Podemos utilizar os seguintes parâmentros:
        
            document.getElementByID('seuElemento').style.fontSize="35px";
             (documento.pegarElementoPeloID('seuELemento').style.TamanhoFont="35px" )

            ou

            document.getElementeByClassName('nomeDaClasse')[0].style.color="blue";
            (documento.pegarElementoPeloNomeClasse('nomeDaClasse')[selecionar o elemtento do array].estilo.cor="azul";)
*/

function funcaoSeletor(){
    document.getElementById('boxVermelho5').style.backgroundColor ='black' ; //podemos colocar vários parâmetros de CSS.
    document.getElementsByClassName('box5')[0].style.backgroundColor = 'pink'; //ele devolve um array (lista de elementos)
}
function funcaoSeletor2(){
    document.getElementById('boxVermelho6').style.backgroundColor ='black' ; //podemos colocar vários parâmetros de CSS.
    document.getElementsByClassName('paragrafo')[0].style.backgroundColor = 'pink';//ele devolve um array (lista de elementos)
    document.getElementsByClassName('paragrafo')[1].style.backgroundColor = 'green';
    document.getElementsByClassName('paragrafo')[2].style.backgroundColor = 'purple'; 
}




/*
EVENTOS DO JAVASCRIPT
    .onchange -------> quando carregar muda a função (serve para validar campos)
    .onclick --------> quando clicar
    .onmouseover ----> com o mouse por cima chamar a função
    .onmouseout -----> com o mouse pra fora chamar a função
    .onkeydown ------> disparado quando a tecla é apertada
    .onkeyup --------> quando o usuário libera uma tecla
*/

function validarCPF(){
    alert('campo CPF mudado com sucesso!')
}

/*
OCULTANDO E EXIBINDO ELEMENTO
    
*/
function inicial(){
    
}


