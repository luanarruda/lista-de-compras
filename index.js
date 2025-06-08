import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
const listaDeCompras = document.getElementById("lista-de-compras");



//captar o valor a partir de uma determinada ação
const botaoAdicionar = document.getElementById("adicionar-item");
botaoAdicionar.addEventListener("click", (evento) => {

	evento.preventDefault();
	const itemDaLista = criarItemDaLista();
	listaDeCompras.appendChild(itemDaLista);
	verificarListaVazia();

})

//verifica se a lista está vazia	
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");


function verificarListaVazia() {
	const itensDaLista = listaDeCompras.querySelectorAll("li");
	if (itensDaLista.length === 0) {
		//no momento ele coloca a msg para aparecer
		mensagemListaVazia.style.display = "block"
		mensagemListaVazia.style.backgroundColor = "#f8d7da";
	}
	//remvoe a mensagem se a lista não estiver vazia
	else {
		mensagemListaVazia.style.display = "none";
	}
}

verificarListaVazia();