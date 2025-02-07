import {enqueue, dequeue, front, size, isEmpty, printQueue, rear, queue} from './Fila.js'


const botaoEnqueue = document.getElementById('botaoEnqueue')
const botaoDequeue = document.getElementById('botaoDequeue')
const botaoFront = document.getElementById('botaoFront')
const botaoSize = document.getElementById('botaoSize')
const botaoIsEmpty = document.getElementById('botaoIsEmpty')
const botaoRear = document.getElementById('botaoRear')
const botaoPrintQueue = document.getElementById('botaoPrintQueue')

const estadoFila = document.getElementById("estadoFila")

botaoEnqueue.addEventListener('click', () => adicionarElemento())
botaoDequeue.addEventListener('click', () => removerElemento())
botaoFront.addEventListener('click', () => mostrarFrente())
botaoSize.addEventListener('click', () => mostrarTamanho())
botaoIsEmpty.addEventListener('click', () => verificarFilaVazia())
botaoRear.addEventListener('click', () => mostrarUltimo())
botaoPrintQueue.addEventListener('click', () => imprimirFilaAtual())

function adicionarElemento() {
    const valor = document.getElementById('valor').value
    if (valor) {
        enqueue(valor)
        imprimirFilaAtual()
    } else {
        alert("Digite um valor para adicionar na fila.")
    }
}

function removerElemento() {
    if (!isEmpty()) {
        dequeue()
        imprimirFilaAtual()
    } else {
        alert("A fila está vazia.")
    }
}

function mostrarFrente() {
    estadoFila.innerHTML = `Frente: ${front()}`
}

function mostrarTamanho() {
    estadoFila.innerHTML = `Tamanho: ${size()}`
}

function verificarFilaVazia() {
    estadoFila.innerHTML = `Está vazia? ${isEmpty() ? "Sim" : "Não"}`
}

function imprimirFilaAtual() {
    estadoFila.innerHTML = `Fila: [${queue}]`
}

function mostrarUltimo() {
    estadoFila.innerHTML = `Último: ${rear()}`
}

