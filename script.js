const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  let data = {
    name,
    email,
  };

  let collectData = JSON.stringify(data);
  localStorage.setItem("lead", collectData);

  let sendForm = document.getElementById("sendForm");

  let loading = `
  <p>Estamos salvando seus dados.</p>
  <p>Por favor aguarde.</P>
  `;

  let isDone = `
  <img src="./assets/celebrate.gif" width="100%">
  <P> PARABÉNS!!!</P>
  <P> Cadrastro realizado com sucesso!!!</P>
  `;

  sendForm.innerHTML = loading;

  setTimeout(() => {
    sendForm.innerHTML = isDone;
  }, 3000);
});
