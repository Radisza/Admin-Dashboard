function addIcons(card) {
    const icons = [
        "mdi:star-plus-outline",
        "mdi:eye-plus-outline",
        "mdi:source-fork"
    ]

    for (icon of icons) {
        let elem = document.createElement('iconify-icon');
        elem.setAttribute("icon", icon);
        card.appendChild(elem);
    }
}

let cards = document.querySelectorAll(".icons");

for (card of cards) {
    addIcons(card);
}