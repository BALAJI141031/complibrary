// get modal element

let modalEl = document.getElementById("modal-Container");
let modalBtn = document.getElementById("modalBtn");
let closeBtn = document.getElementById("closeBtn");

// event listener for click

const openModal = (event) => (modalEl.style.display = "block");
modalBtn.addEventListener("click", openModal);

const closeModal = (event) => (modalEl.style.display = "none");
closeBtn.addEventListener("click", closeModal);
