const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(listaDeCompras) {
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

export default verificarListaVazia;