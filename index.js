
const inputItem = document.getElementById("input-item")


//captar o valor a partir de uma determinada ação
const botaoAdicionar = document.getElementById("adicionar-item");
botaoAdicionar.addEventListener("click", (evento) => {

//evento padrao é recarregar a pagina
//por isso, vamos prevenir o evento padrão
	evento.preventDefault();
	if(inputItem.value === "") {
		alert("Digite um item para adicionar");
		return;
	}
	
	//criar um elemento li
	const itemDaLista = document.createElement("li");
	const containerItemDaLista = document.createElement("div"); 
	//criar/puxar a classe do container
	containerItemDaLista.classList.add("lista-item-container");

})
