//capturando dados do formulário.
const form = document.getElementById("buy-list");
const input = document.getElementById("add-item");

const button = document.getElementById("submitForm");
const removeAlert = document.getElementById("remove-alert");
const closeAlert = document.querySelector(".closeAlert");

const reloadPage = document.querySelector("#back");

//SELECIONANDO A UL
const items = document.querySelector("#itemsList");

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
  //CRIANDO ELEMENTOS
  const newItemAdd = document.createElement("li");

  const newChecked = document.createElement("input");
  newChecked.type = "checkbox";

  const newItemName = document.createElement("p");
  const binBtn = document.createElement("button");
  const binImg = document.createElement("img");

  binImg.src = "./assets/icons/bin.svg";
  newItemAdd.classList.add("item-style");
  newItemName.textContent = input.value;

  binBtn.classList.add("remove");

  binBtn.addEventListener("click", () => {
    newItemAdd.style.display = "none";

    removeAlert.classList.remove("hide");
  });

  newItemAdd.append(newChecked, newItemName, binBtn);
  binBtn.append(binImg);
  items.append(newItemAdd);
}

closeAlert.onclick = () => {
  removeAlert.classList.add("hide");
};

button.onclick = (event) => {
  event.preventDefault();
  createNewItem();
  form.reset();
};

reloadPage.addEventListener("click", (e) => {
  e.preventDefault
  reloadPage.loca
})