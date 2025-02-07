import { LinkedQueue } from './Fila.js';

const minhaFila = new LinkedQueue();

let botaoEnqueue = document.getElementById('botaoEnqueue');
let botaoDequeue = document.getElementById('botaoDequeue');
let botaoFront = document.getElementById('botaoFront');
let botaoTamanho = document.getElementById('botaoTamanho');
let botaoVazia = document.getElementById('botaoVazia');
let botaoTail = document.getElementById('botaoTail');
let botaoPrintFila = document.getElementById('botaoPrintFila');

let exibirFila = document.getElementById("minhaFila");

botaoEnqueue.addEventListener('click', () => funcEnqueue());
botaoDequeue.addEventListener('click', () => funcDequeue());
botaoFront.addEventListener('click', () => funcFront());
botaoTamanho.addEventListener('click', () => funcTamanho());
botaoVazia.addEventListener('click', () => funcVazia());
botaoTail.addEventListener('click', () => funcTail());
botaoPrintFila.addEventListener('click', () => funcPrintFila());

function funcEnqueue(){ 
    const texto = document.querySelector('#elemento').value;
    minhaFila.enqueue(texto);
    exibirFila.innerHTML = `Fila: ${minhaFila.print()}`;
}

function funcDequeue(){
    const texto = document.querySelector('#elemento').value;
    const valorRemovido = minhaFila.dequeue();
    exibirFila.innerHTML = `Fila: ${minhaFila.print()}`;
}

function funcFront(){
    const valorFront = minhaFila.front();
    exibirFila.innerHTML = `Front: ${valorFront}`;
}

function funcTamanho(){
    const tamanhoFila = minhaFila.size();
    exibirFila.innerHTML = `Tamanho da fila: ${tamanhoFila}`;
}

function funcVazia(){
    const filaVazia = minhaFila.isEmpty() ? 'Sim' : 'Não';
    exibirFila.innerHTML = `A fila está vazia? ${filaVazia}`;
}

function funcPrintFila(){
    exibirFila.innerHTML = `Fila: ${minhaFila.print()}`;
}

function funcTail(){
    const valorTail = minhaFila.tail();
    exibirFila.innerHTML = `Tail: ${valorTail}`;
}
