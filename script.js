const img = document.getElementById("img");


/* vamos identificar o botão cloicado atravez do elemento PAI */
const buttons = document.getElementById ( "buttons" );

/* Criando a função "ControleDeTrafego" */
const ControleDeTrafego = (event) => {
    /* chamando a função, de acordo com o target do evento clicado, buscando o seu id */
    /* Lembranod que o ID possui o memso nome que a função, assim ao buscar o id pelo event.target ele pega o função correta
    e correspondente a cor da imagem */
    stopAutomatic();
    ligar[event.target.id]();
}

let colorindex = 0;


/* Função que é responsavel por adicionar um numero na variavel colorindex, que fusca a posição do Array */
const nextIndex = () =>{
    if (colorindex < 2){
        colorindex++;
    }else{
        colorindex = 0
    }
}

/* Criando agora a função que será chamada quando se clica no botão AUTOMAICO */
const trocaCor = () => {
    /* para ficar trocando de cor, vamos criar um Array de cores */
    const colors = ['vermelho', 'amarelo', 'verde'];
    /* Colorindex é a variavel que vai buscar a posição do elemento dentro do ARRAY (colors) */
    const color = colors[colorindex];
    ligar[color]();
    /* Abaixo criamos uma função para pegar o multiplicador do index */
    nextIndex();
}

let intervalId = null;

/* Criando função responsavel por parar a contagem automatica */
const stopAutomatic  = () => {
    clearInterval(intervalId);
}

/* Decobrindo o botão clicado, buscando o Evento (target.id) que identifica o ID do botão 
- console.log(event.target.id);*/
/* Criando abaixo um objeto que possui 3 funçoes */
const ligar = {
    'vermelho': () => img.src = "./img/vermelho.png",
    'amarelo': () => img.src = "./img/amarelo.png",
    'verde': () => img.src = "./img/verde.png",
    /* Agora vamos criar a função "automatico" que chama uma utra função */
    /* A função - setTimeout chama a função (trocaCor) APENAS 1X, após o intervalo colocado em ms */
    /*  A função - setInterval chama a função (trocaCro) SE REPETE dentro de um intervalo informado */
    'automatico': () => intervalId = setInterval(trocaCor, 1000)
}


/* Adicionando um evento ao clicar nos elementos dentro da DIV Buttons */
/* O evento é clicar e quando for executado chama a função "ControleDeTrafego" */
buttons.addEventListener("click" , ControleDeTrafego);

