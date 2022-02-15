

function quandoAbrirAPage(){
    document.getElementsByClassName('subMenu')[0].style.display = 'none';
    document.getElementsByClassName('subMenu')[1].style.display = 'none'; //QUANDO CARREGAR A PÁGINA, QUERO QUE ESCONDA OS MENUS
    document.getElementsByClassName('subMenu')[2].style.display = 'none';
    document.getElementsByClassName('subMenu')[3].style.display = 'none';
    document.getElementsByClassName('subMenu')[4].style.display = 'none';

    
}
function aparecerMenu(){
    
    document.getElementsByClassName('subMenu')[0].style.display = 'block'; //QUANDO CLICAR NO MENU, QUERO QUE ELE VOLTE A SER O QUE ERA ANTES
    document.getElementsByClassName('subMenu')[1].style.display = 'block';
    document.getElementsByClassName('subMenu')[2].style.display = 'block'; 
    document.getElementsByClassName('subMenu')[3].style.display = 'block';
    document.getElementsByClassName('subMenu')[4].style.display = 'block';
}

function decisaoInicial(){
    document.getElementsByClassName('subMenu2')[0].style.display = 'none';
    document.getElementsByClassName('subMenu2')[1].style.display = 'none'; //QUANDO CARREGAR A PÁGINA, QUERO QUE ESCONDA OS MENUS
    document.getElementsByClassName('subMenu2')[2].style.display = 'none';
    document.getElementsByClassName('subMenu2')[3].style.display = 'none';
    document.getElementsByClassName('subMenu2')[4].style.display = 'none';
}

function decisao(){
    if(document.getElementsByClassName('subMenu2')[0].style.display == 'none'){
        document.getElementsByClassName('subMenu2')[0].style.display = 'block'; 
        document.getElementsByClassName('subMenu2')[1].style.display = 'block';
        document.getElementsByClassName('subMenu2')[2].style.display = 'block'; 
        document.getElementsByClassName('subMenu2')[3].style.display = 'block';
        document.getElementsByClassName('subMenu2')[4].style.display = 'block';
    } else{
        document.getElementsByClassName('subMenu2')[0].style.display = 'none'; 
        document.getElementsByClassName('subMenu2')[1].style.display = 'none';
        document.getElementsByClassName('subMenu2')[2].style.display = 'none'; 
        document.getElementsByClassName('subMenu2')[3].style.display = 'none';
        document.getElementsByClassName('subMenu2')[4].style.display = 'none';
    }
}


//ESTRUTURA DE REPETIÇÃO

function decisao2(){
    if(document.getElementsByClassName('subMenu3')[0].style.display == 'none'){ //SE (document.....)[array].estilo.display é none
        for ( let index = 0; index <= 5; index++ ) {                             //PARA deixar indexar=0 sendo index menor ou igual a 5, adicionar mais 1 ao index
            document.getElementsByClassName('subMenu3')[index].style.display = 'block'; //document...indexado.estilo.display="block"
        }
 }  else{ //CASO CONTRARIO
        for ( let index = 0; index <= 5; index++ ) { //PARA deixar indexar =0 sendo index menor ou igual a 5, adicionar mais 1 ao index
            document.getElementsByClassName('subMenu3')[index].style.display = 'none'; //document...indexado.estilo.display="none"
        }
     
    }
}

//RECEBENDO VALORES
function validadarInformacoes(){

    var idadeUsuario = document.getElementById('idade').value;
    
    
    
    if(document.getElementById('idade').value == '' ){
        document.getElementById('idade').style.border = "solid 1px red";
        alert('preencha todos os campos')
    }
     
        if(idadeUsuario >= 18){
            document.getElementById('idade').style.border = "solid 1px green";
            alert('pode entrar');
    }
        else{
            alert('não pode entrar')
            
    }


    if(document.getElementById('nome').value == '' ){
        document.getElementById('nome').style.border = "solid 1px red";
        alert('preencha todos os campos')
    }
     
        if(idadeUsuario >= 18){
            document.getElementById('nome').style.border = "solid 1px green";
            alert('pode entrar');
    }
        else{
            alert('não pode entrar')
            
    }
   
    if(document.getElementById('email').value == '' ){
        document.getElementById('email').style.border = "solid 1px red";
        alert('preencha todos os campos')
    }
     
        if(idadeUsuario >= 18){
            document.getElementById('email').style.border = "solid 1px green";
            alert('pode entrar');
    }
        else{
            alert('não pode entrar')
            
    }
    
}
/*

VARIÁVEIS E CONSTANTES
    .VAR ----> Variável global
    .LET ----> Variável de bloco
    .CONST --> Nunca muda  
    
    .TIPOS DE VARIÁVEIS
        .int --------> inteiro
        .number -----> números
        .boolean ----> sim ou não
        .string -----> texto
        .array ------> listas
        .objeto

*/

/*
OPERADORES ARITMÉTICOS
    .SÃO OS OPERADORES BÁSICOS A SER USADO NA PROGRAMAÇÃO DE ALTO NÍVEL (PROGRAMAÇÃO WEB)
        . + ---> adição
        . - ---> subtração
        . / ---> divisão
        . * ---> multiplicação
    
    .OPERADORES DE INCREMENTAÇÃO:
        .++ ----> pega o valor atual e acrencenta mais 1 (ex: 5++ = 6)
        .-- ----> pega o valor atual e retira 1 (ex: 5-- = 4)

*/

/*


ESTRUTURA DE DECISÃO
    .IF ---> Apenas quando eu tenho duas alternativas para escolher
    .ELSE IF 
    .SWITCH / CASE ---> quando eu tiver várias alternativas e vários caminhos
*/

var idade = 20;
function estruturaDecisao(){
    
    if(idade > 18){ //se isso for verdade
        console.log('maior de idade'); //imprima isso
    } else{ //se não for verdade
        console.log('menor de idade'); //imprima isso
    }
}


var time = "corinthians";
var sexo = 'Masculino';

function estruturaDeDecisao2(){
    if(idade < 18){  //se menor de idade
        console.log('maior de idade'); //imprima isso
    } else if(sexo == 'masculino'){ //caso seja masculino
        console.log('menor de idade que gosta de brinquedos'); //imprima isso
    } else{ //se não
        console.log('menor de idade que não gosta de brinquedos'); //imprima isso
    }
    switch(time){ //pular para time

        case "corinthians": //caso escolha 'corinthians'
            console.log('ele é Corintianos!') //imprima isso
            break; //pare por aqui

        case "São Paulo": //caso seja São Paulo
            console.log('ele é São Paulino'); //imprima isso
            break;//pare por aqui

        case "Palmeiras":// caso seja Palmeiras
            console.log('ele nunca vai ter mundial!')//imprima isso
            break;//pare por aqui
        
            default://sem resposta do valor esperado
            break; //pare por aqui
    }
}




/*

ESTRUTURA DE REPETIÇÃO
    .FOR  -----> pra fazer repetição.
    .FOR IN ---> mostra indices array.
    .FOR OF ---> mostra os valores de um array.
    .WHILE ----> ele só para quando alguma coisa for true, caso contrario, vai ficar repetindo infinitamente.

*/
for (let index = 0;                index < array.length;           index++) {
    //condição de onde eu to       //condição até onde vai        //aumenta 1 
    
    
}
for (let index = 0; index < 75; index++) {
    console.log('volta de número: '+index)
}

var times = ['santos','coritiba','sao paulo', 'psg'];
for ( x in times) {
   console.log(x);
}

var volta = 0;
while(volta <= 75){
    volta++;
    console.log('volta de número: '+volta);
}

