const menuToggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.links')

menuToggle.addEventListener('click', () => {
    links.style.display = links.style.display === "flex" ? "none" : "flex" 
})