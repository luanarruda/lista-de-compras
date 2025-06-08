import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
const inputItem = document.getElementById("input-item")
let contador = 0;

export function criarItemDaLista() {

	//evento padrao é recarregar a pagina
	//por isso, vamos prevenir o evento padrão

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
	//estilo dinamico
	inputCheckbox.addEventListener("click", function () {
		if (inputCheckbox.checked) {
			nomeItem.style.textDecoration = "line-through";
		}
		else {
			nomeItem.style.textDecoration = "none";
		}
	});

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista)
    const dataCompleta = gerarDiaDaSemana()
   
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data")
    itemDaLista.appendChild(itemData)

   return itemDaLista;


}