const modal = document.querySelector("#modalID");
const modalIDContent = document.querySelector("#modalIDContent");

let form;

function findElements() {
  form = document.querySelector("form");
}

function showMessage(data) {
  modal.style.display = "block";
  modalIDContent.style.display = "block";
}

function onSuccess(data) {
  showMessage(data);
}

function onError(data) {
  console.error(data);
}

function collectData(currentForm) {
  return new FormData(currentForm);
}

function setOptions(currentForm) {
  return {
    method: "post",
    body: collectData(currentForm),
  };
}

function sendForm(currentForm) {
  return fetch(currentForm.action, setOptions(currentForm));
}

function onSubmit(event) {
  event.preventDefault();
  const { currentTarget } = event;
  sendForm(currentTarget)
    .then((response) => response.json())
    .then((data) => onSuccess(data, currentTarget))
    .catch(onError);
}

function subscribe() {
  form.addEventListener("submit", onSubmit);
}

function init() {
  findElements();
  subscribe();
}

function hideModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};

init();