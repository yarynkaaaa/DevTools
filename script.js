const themeButton = document.getElementById("themeButton");
const themeIcon = document.getElementById("themeIcon"); // Змінна для іконки
let darkMode = false;

themeButton.addEventListener("click", () => {
    darkMode = !darkMode;

    // Зміна фону та кольору тексту
    document.body.style.background = darkMode ? "#222" : "#f4f4f4";
    document.body.style.color = darkMode ? "#fff" : "#000";

    // Зміна іконки на сонце або місяць
    if (darkMode) {
        themeIcon.src = "./icons/dark-theme.svg";
    } else {
        themeIcon.src = "./icons/light-theme.svg"; // Іконка для світлої теми
    }
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
