import verificarListaVazia from "./scripts/verificarListaVazia.js";
import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
const listaDeCompras = document.getElementById("lista-de-compras");
//captar o valor a partir de uma determinada ação
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {

	evento.preventDefault();
	const itemDaLista = criarItemDaLista();
	listaDeCompras.appendChild(itemDaLista);
	verificarListaVazia(listaDeCompras);

})

verificarListaVazia(listaDeCompras);