let toggleBtn = document.querySelector(".dark-light-btn");
const userMode = localStorage.getItem("mode");
if (userMode === null) {
  localStorage.setItem("mode", "Light");
} else {
  if (userMode === "Dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleBtn.innerHTML = `<i class="fas fa-adjust header-icons header-icons-m-lr">Light</i>`;
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    toggleBtn.innerHTML = `<i class="fas fa-moon header-icons header-icons-m-lr">Dark</i>`;
  }
}

toggleBtn.addEventListener("click", () => {
  if (toggleBtn.innerText === "Dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleBtn.innerHTML = `<i class="fas fa-adjust header-icons header-icons-m-lr">Light</i>`;
    localStorage.setItem("mode", "Dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    toggleBtn.innerHTML = `<i class="fas fa-moon header-icons header-icons-m-lr">Dark</i>`;
    localStorage.setItem("mode", "Light");
  }
});

// dynamic nav-bar

const burgerBtn = document.querySelector(".burger-button");
const sidebar = document.getElementById("sidebarDiv");

console.log(sidebar, "button");
let flag = false;
const toggleNavbar = () => {
  if (!flag) {
    sidebar.classList.remove("sidebar");
    sidebar.classList.add("mobile-sidebar");
  } else {
    sidebar.classList.remove("mobile-sidebar");
    sidebar.classList.add("sidebar");
  }

  flag = !flag;
};

burgerBtn.addEventListener("click", toggleNavbar);
