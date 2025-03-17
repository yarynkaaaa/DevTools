const themeButton = document.getElementById("themeButton");
const themeIcon = document.getElementById("themeIcon"); // Змінна для іконки
const heading = document.querySelector(".resource-title"); // Заголовок, який треба змінювати
const icons = [
    { selector: "#editors-icon", light: "icons/computer-grey.svg", dark: "icons/computer.svg" },
    { selector: "#courses-icon", light: "icons/document-grey.svg", dark: "icons/document.svg" },
    { selector: "#plugins-icon", light: "icons/code-grey.svg", dark: "icons/code.svg" },
    { selector: "#productivity-icon", light: "icons/bolt-grey.svg", dark: "icons/bolt.svg" },
];

let darkMode = false;

themeButton.addEventListener("click", () => {
    darkMode = !darkMode;

    // Зміна фону та кольору тексту
    document.body.style.background = darkMode ? "#222" : "#f4f4f4";
    document.body.style.color = darkMode ? "#fff" : "#000";

    // Зміна кольору заголовка
    heading.style.color = darkMode ? "#c9c9c9" : "#2f4f2f";

    // Зміна іконки теми (сонце/місяць)
    themeIcon.src = darkMode ? "./icons/dark-theme.svg" : "./icons/light-theme.svg";

    // Зміна іконок у блоках
    icons.forEach((icon) => {
        const element = document.querySelector(icon.selector);
        if (element) {
            element.src = darkMode ? icon.dark : icon.light;
        }
    });
});
// Фільтр пошуку
// Показуємо або ховаємо поле пошуку при натисканні на іконку
document.getElementById("searchIcon").addEventListener("click", function (event) {
    var searchInput = document.getElementById("searchInput");
    searchInput.classList.toggle("active"); // Додає/знімає клас для показу/приховування
    searchInput.focus(); // Фокусується на полі вводу після натискання іконки
    event.stopPropagation(); // Зупиняє поширення події, щоб клік по іконці не призвів до приховання поля
});

// Закриваємо поле пошуку при натисканні в будь-яке інше місце на сторінці
document.addEventListener("click", function (event) {
    var searchContainer = document.querySelector(".search-container");
    var searchInput = document.getElementById("searchInput");

    // Перевірка, чи клікнув користувач в межах контейнера пошуку, але не на іконці
    if (
        !searchContainer.contains(event.target) ||
        event.target === document.getElementById("searchIcon")
    ) {
        searchInput.classList.remove("active"); // Ховаємо поле пошуку
    }
});
// Отримуємо кнопку
const scrollToTopButton = document.getElementById("scrollToTop");

// Функція для прокрутки наверх
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Плавна прокрутка
    });
}

// Показуємо/ховаємо кнопку в залежності від прокрутки сторінки
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block"; // Показуємо кнопку
    } else {
        scrollToTopButton.style.display = "none"; // Ховаємо кнопку
    }
};

// Додаємо подію на клік кнопки
scrollToTopButton.addEventListener("click", scrollToTop);
