const currentPage = location.href;
const menuItems = document.querySelectorAll("nav a");

for (item of menuItems) {
  console.log(currentPage == item.href ? item.classList.add("active") : "");
}
