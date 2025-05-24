
const inputItem = document.getElementById("input-item")


//captar o valor a partir de uma determinada ação
const botaoAdicionar = document.getElementById("adicionar-item");
botaoAdicionar.addEventListener("click", (evento) => {

//evento padrao é recarregar a pagina
//por isso, vamos prevenir o evento padrão
	evento.preventDefault();
//captar o valor do input
	console.log(inputItem.value);
})
