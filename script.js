// MENU TOGGLE
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

toggle.onclick = () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
};

// DARK MODE
const darkBtn = document.getElementById("darkMode");

darkBtn.onclick = () => {
    document.body.classList.toggle("dark");
};

// LANGUAGE TOGGLE
const langBtn = document.getElementById("langToggle");

langBtn.onclick = () => {
    if (langBtn.innerText === "मराठी") {
        langBtn.innerText = "English";
    } else {
        langBtn.innerText = "मराठी";
    }
};
// IMAGE POPUP
const images = document.querySelectorAll(".gallery-grid img");

images.forEach(img => {
    img.addEventListener("click", () => {
        const popup = document.createElement("div");
        popup.classList.add("popup");

        const popupImg = document.createElement("img");
        popupImg.src = img.src;

        popup.appendChild(popupImg);
        document.body.appendChild(popup);

        popup.onclick = () => popup.remove();
    });
});