const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (nom!='' && prenom!='' && email!='' && message!=''){
    alert(`Merci ${prenom}  ${nom} de nous avoir contacté,nous allons vous revenir plus tard.`);
    form.reset();
  } else {
    alert("Veuillez remplir tous les champs.");
  }
});
