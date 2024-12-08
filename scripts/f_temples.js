// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const resGrid = document.querySelector(".res-grid");

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

// Display the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Display the last modified date of the document
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Guatemala City Guatemala",
        location: "Guatemala City, Guatemala",
        dedicated: "1984, December, 16",
        area: 11610,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/guatemala-city-guatemala-temple/guatemala-city-guatemala-temple-6407.jpg"
    },
    {
        templeName: "Salt Lake City, Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-4937.jpg"
    },
    {
        templeName: "Quetzaltenango, Guatemala",
        location: "Quetzaltenango, Guatemala",
        dedicated: "2011, December, 11",
        area: 21085,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/quetzaltenango-guatemala-temple/quetzaltenango-guatemala-temple-3959.jpg"
    },
]

function createTempleCard(filteredTemples) {
    resGrid.innerHTML = ""; // Clean the content
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}</br>`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        // append cards
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);
        resGrid.appendChild(card);
    });
}

// Filter
function filterOldTemples() {
    return temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
}

function filterNewTemples() {
    return temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
}

function filterLargeTemples() {
    return temples.filter(temple => temple.area > 90000);
}

function filterSmallTemples() {
    return temples.filter(temple => temple.area < 10000);
}

// Menú links
document.querySelector("#home").addEventListener("click", () => createTempleCard(temples)); // Home
document.querySelector("#new").addEventListener("click", () => createTempleCard(filterNewTemples())); // New
document.querySelector("#old").addEventListener("click", () => createTempleCard(filterOldTemples())); // Old
document.querySelector("#large").addEventListener("click", () => createTempleCard(filterLargeTemples())); // Large
document.querySelector("#small").addEventListener("click", () => createTempleCard(filterSmallTemples())); // Small

// Load the cards
createTempleCard(temples);