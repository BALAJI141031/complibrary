// get elements here

let successBtn = document.getElementById("succuess");
let warnBtn = document.getElementById("warn");
let errorBtn = document.getElementById("error");

let successEl = document.getElementById("succuessToast");
// console.log(successEl);

let warnEl = document.getElementById("WarnToast");

let errorEl = document.getElementById("errorToast");

// event listens

const toast = (e) => {
  console.log(e.target.innerText);
  if (e.target.innerText === "success") {
    successEl.style.display = "block";
    setTimeout(() => {
      successEl.style.display = "none";
    }, 2000);
  } else if (e.target.innerText === "warn") {
    warnEl.style.display = "block";
    setTimeout(() => {
      warnEl.style.display = "none";
    }, 2000);
  } else {
    errorEl.style.display = "block";
    setTimeout(() => {
      errorEl.style.display = "none";
    }, 2000);
  }
};
successBtn.addEventListener("click", toast);
warnBtn.addEventListener("click", toast);
errorBtn.addEventListener("click", toast);
