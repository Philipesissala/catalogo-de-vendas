const currentPage = location.pathname;
const formDelete = document.querySelector(".form-delete");
const menuItems = document.querySelectorAll("header nav a");

for (item of menuItems) {
  if (currentPage == item.getAttribute("href")) {
    item.classList.add("active");
  }
}
formDelete.addEventListener("submit", (event) => {
  event.preventDefault();
  let decision = confirm("Você tem a certeza que deseja Eliminar?");
  if (decision) {
    formDelete.submit();
  }
});
