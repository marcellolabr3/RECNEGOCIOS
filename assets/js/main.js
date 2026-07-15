const siteConfig = window.REC_SITE;
const grid = document.querySelector("#collaboratorGrid");
const dialog = document.querySelector("#leadDialog");
const dialogImage = document.querySelector("#dialogImage");
const dialogCategory = document.querySelector("#dialogCategory");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogDescription = document.querySelector("#dialogDescription");
const leadCollaborator = document.querySelector("#leadCollaborator");

function whatsappUrl(message) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function openLeadDialog(collaborator) {
  dialogImage.src = collaborator.image;
  dialogImage.alt = collaborator.name;
  dialogCategory.textContent = collaborator.category;
  dialogTitle.textContent = collaborator.name;
  dialogDescription.textContent = collaborator.description;
  leadCollaborator.value = collaborator.name;
  dialog.showModal();
}

function renderCollaborators() {
  grid.innerHTML = "";

  siteConfig.collaborators.forEach((collaborator) => {
    const article = document.createElement("article");
    article.className = "collaborator-card";
    article.innerHTML = `
      <img src="${collaborator.image}" alt="${collaborator.name}" loading="lazy">
      <div class="card-body">
        <div class="card-meta">
          <span class="pill">${collaborator.category}</span>
          <span class="pill">${collaborator.benefit}</span>
        </div>
        <h3>${collaborator.name}</h3>
        <p>${collaborator.location}</p>
        <div class="card-actions">
          ${
            collaborator.page
              ? `<a class="button secondary" href="${collaborator.page}">Abrir tela</a>`
              : ""
          }
          <button class="text-button" type="button" data-lead="${collaborator.id}">
            Pedir informacoes
          </button>
        </div>
      </div>
    `;

    grid.append(article);
  });
}

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lead]");
  if (!button) return;

  const collaborator = siteConfig.collaborators.find(
    (item) => item.id === button.dataset.lead
  );

  if (collaborator) {
    openLeadDialog(collaborator);
  }
});

document.querySelector(".dialog-close").addEventListener("click", () => {
  dialog.close();
});

document.querySelector("#leadForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = `Ola, sou ${form.get("nome")}. Tenho interesse em ${form.get(
    "collaborator"
  )}. Telefone: ${form.get("telefone")}. Mensagem: ${form.get("mensagem")}`;
  window.open(whatsappUrl(message), "_blank", "noopener");
});

document.querySelector("#mainContactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = `Ola, sou ${form.get("nome")}. Email: ${form.get(
    "email"
  )}. Telefone: ${form.get("telefone")}. Interesse: ${form.get("interesse")}`;
  window.open(whatsappUrl(message), "_blank", "noopener");
});

renderCollaborators();
