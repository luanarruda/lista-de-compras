const listaDeCompras = document.getElementById("lista-de-compras");
const inputItem = document.getElementById("input-item")
//diferenca de let e const = let pode ser alterado, const não
//const é uma constante, ou seja, não pode ser alterada
let contador = 0;

//captar o valor a partir de uma determinada ação
const botaoAdicionar = document.getElementById("adicionar-item");
botaoAdicionar.addEventListener("click", (evento) => {

	//evento padrao é recarregar a pagina
	//por isso, vamos prevenir o evento padrão
	evento.preventDefault();
	if (inputItem.value === "") {
		alert("Digite um item para adicionar");
		return;
	}

	//criar um elemento li
	const itemDaLista = document.createElement("li");
	const containerItemDaLista = document.createElement("div");
	//criar/puxar a classe do container
	containerItemDaLista.classList.add("lista-item-container");
	//checkbox é um atributo, tipo do input
	const inputCheckbox = document.createElement("input");
	inputCheckbox.type = "checkbox";
	//adicionar o id dinamico
	inputCheckbox.id = "checkbox-" + contador++;
	//adicionar o paragrafo
	const nomeItem = document.createElement("p");
	//nessa variavel vem o q digitamos no input
	nomeItem.innerText = inputItem.value;

	containerItemDaLista.appendChild(inputCheckbox);
	containerItemDaLista.appendChild(nomeItem);

	itemDaLista.appendChild(containerItemDaLista);
	listaDeCompras.appendChild(itemDaLista);

	//adicionar o dia da semana
	const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
		weekday: "long"
	});
	const data = new Date().toLocaleDateString("pt-BR");

	const dataCompleta = `${diaDaSemana} (${data})`;
	console.log(dataCompleta);
})
