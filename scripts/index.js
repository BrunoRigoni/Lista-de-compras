//capturando dados do formulário.
const form = document.getElementById("buy-list");
const input = document.getElementById("add-item");
const button = document.getElementById("submitForm");

//manipulando os dados do input para receber apenas strings.
input.addEventListener("input", (e) => {
  console.log(input.value);
  let regex = /\d+$/;

  input.value = input.value.replace(regex, "");
});

//criando evento para garantir que a página não atualize ao enviar o formulário.
form.onsubmit = (event) => {
  event.preventDefault();

  addToList();
};
