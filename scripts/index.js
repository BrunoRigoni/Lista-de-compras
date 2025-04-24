//capturando dados do formulário.
const form = document.getElementById("buy-list");
const input = document.getElementById("add-item");
const button = document.getElementById("submitForm");

//manipulando os dados do input para receber apenas strings.
input.addEventListener("input", () => {
  let regex = /\d+$/;
  input.value = input.value.replace(regex, "");
});

//criando evento para garantir que a página não atualize ao enviar o formulário.
form.onsubmit = (event) => {
  event.preventDefault();

};




function createNewItem() {

//SELECIONANDO A UL
const items = document.querySelector("ul");

//CRIANDO ELEMENTOS
const newItemAdd = document.createElement("li");
const newChecked = document.createElement("input");
const newLabel = document.createElement("label");
const newCheckbox = document.createElement("span");
const newItemName = document.createElement("p");
const btn = document.createElement("button");
const binImg = document.createElement("img");

binImg.src = "./assets/icons/bin.svg";
newItemAdd.classList.add("item-style");
newItemName.textContent = "Bolo";


newChecked.type = "checkbox";
newLabel.classList.add("name-item");

newCheckbox.classList.add("checkbox-icon");
btn.classList.add("remove");


newLabel.append(newCheckbox, newItemName);
newItemAdd.append(newChecked, newLabel, btn)
btn.append(binImg)

console.log(newItemAdd);


items.append(newItemAdd);
}


button.onclick = (event) => {
  createNewItem()
}



button.onsubmit = (event) => {
    event.preventDefault();

  createNewItem()
}
