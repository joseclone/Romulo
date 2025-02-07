import { Queue } from './Fila.js';

const minhaFila = new Queue();

let botaoAdicionar = document.getElementById('botaoAdicionar');
let botaoRemover = document.getElementById('botaoRemover');
let botaoFrente = document.getElementById('botaoFrente');
let botaoTamanho = document.getElementById('botaoTamanho');
let botaoVazia = document.getElementById('botaoVazia');
let botaoFinal = document.getElementById('botaoFinal');
let botaoLimpar = document.getElementById('botaoLimpar');
let botaoImprimirFila = document.getElementById('botaoImprimirFila');

let exibirFila = document.getElementById("minhaFila");

botaoAdicionar.addEventListener('click', () => funcAdicionar());
botaoRemover.addEventListener('click', () => funcRemover());
botaoFrente.addEventListener('click', () => funcFrente());
botaoTamanho.addEventListener('click', () => funcTamanho());
botaoVazia.addEventListener('click', () => funcVazia());
botaoFinal.addEventListener('click', () => funcFinal());
botaoLimpar.addEventListener('click', () => funcLimpar());
botaoImprimirFila.addEventListener('click', () => funcImprimirFila());

function funcAdicionar(){ 
    const texto = document.querySelector('#elemento').value;
    minhaFila.enqueue(texto);
    exibirFila.innerHTML = `Fila: ${minhaFila.items}`;
}

function funcRemover(){
    const texto = document.querySelector('#elemento').value;
    const valorRemovido = minhaFila.dequeue();
    exibirFila.innerHTML = `Fila: ${minhaFila.items}`;
}

function funcFrente(){
    const valorFrente = minhaFila.front();
    exibirFila.innerHTML = `Frente: ${valorFrente}`;
}

function funcTamanho(){
    const tamanhoFila = minhaFila.size();
    exibirFila.innerHTML = `Tamanho da fila: ${tamanhoFila}`;
}

function funcVazia(){
    const filaVazia = minhaFila.isEmpty() ? 'Sim' : 'Não';
    exibirFila.innerHTML = `A fila está vazia? ${filaVazia}`;
}

function funcImprimirFila(){
    exibirFila.innerHTML = `Fila: ${minhaFila.items}`;
}

function funcFinal(){
    const valorFinal = minhaFila.rear();
    exibirFila.innerHTML = `Final: ${valorFinal}`;
}

function funcLimpar(){
    minhaFila.clear();
    exibirFila.innerHTML = `Fila limpa: ${minhaFila.items}`;
}
