
// Lige høje kolonner

var equalColumns = function () {
    var columns = document.getElementsByClassName('lige_kolonner');

    var length = columns.length;
    var height = 0;

    for (var i = 0; i < length; i++) {
        columns[i].style.height = "auto";
    }

    for (var i = 0; i < length; i++) {
        if (columns[i].clientHeight > height) {
            height = columns[i].clientHeight;
        }
    }
    for (var i = 0; i < length; i++) {
        columns[i].style.height = height + "px";
    }
}
equalColumns();
window.addEventListener("resize", equalColumns, true);


//______________________________________________________________________________________________

// Visning af alle produkter på produkt siden

(() => {
    document.addEventListener('DOMContentLoaded', () => { // hele html siden får en eventlistner som gør at når siden er loaded vises alle produkterne.
        hentData(0); // funktionen hentData bliver kaldt her
    });
})();
// Funktion som henter data til visning i content
// Funktionen har en parameter - hvis tallet nul hentes alt indhold, og hvis større end nul hentes kun denne ene kategori
function hentData(type = 0) {
    let url = 'http://188.226.158.18:3001/produkter'; // API’et med route, /produkter er routenavnet  
    if (type > 0) url += '/' + type;
    fetch(url) // fetch udskriver API'et
        .then((response) => {
            // grib svarets indhold (body) og send det som et json objekt til næste .then()
            return response.json();
        })
        .then((data) => {
            // nu er json objektet lagt ind i data variablen, udskriv data
            console.log(data);
            var type = '';
            document.getElementById('content').innerHTML = ""; // tager fat i id'et content som er på html siden og gør at det vises i content på html siden
            data.forEach(function (item) { // forEach indeholder det som skal vises på siden. forEach kalder en funktion som har parametret item.
                if (type != item.type) {
                    document.getElementById('content').innerHTML += `<h2 class="col-md-12 ryk2">${item.type}</h2><br>`; // tager fat i id'et content som er på html siden
                    type = item.type;
                }
                // tager fat i det element som har id'et content i html
                document.getElementById('content').innerHTML += ` 
                    <div class="col-md-3"><h3>${item.navn}</h3>
                    <div><img src="http://188.226.158.18:3001/images/${item.billede}"></div>
                    <p>Pris: ${item.pris} kr.</p>
                    <p>Kategori: ${item.type}</p>
                    <p>Producent: ${item.producent}</p>
                    <p><a onclick="hentprodukt(${item.ID})">Læs mere</a><br><br><br></p>

                    </div>
                            `;

            })
        })
}
document.querySelector('#selecttype').addEventListener('change', (event) => { // tager fat i id'et selecttype i html. addeventlistner bruges når man skal kunne klikke på noget i html, altså når der skal ske et event, i dette tilfælde er der nogle valgmuligheder man kan klikke på i html.
    let obj = document.querySelector('#selecttype'); // tager fat i id'et selecttype i html
    hentData(obj.value); // funktionen hentData bliver kaldt, her bliver de forskellige produkter indenfor en bestemt kategori vist. 
})

//______________________________________________________________________________________________


// Visning af produkter vha. søgning på produkt siden

document.querySelector('#soge').addEventListener('input', (event) => { // tager fat i id'et soge i html. addeventlistner bruges når man skal kunne klikke på noget i html, altså når der skal ske et event, i dette tilfælde skal man kunne klikke inde i søgefeltet også skal der ske et event altså blive vist nogle produkter.
    let obj = document.querySelector('#soge'); // tager fat i id'et soge i html
    sogebar(obj.value); // funktionen sogebar bliver kaldt her
})

function sogebar(type) {
    let url = 'http://188.226.158.18:3001/produkter/sog'; // API’et med route, /produkter/sog er routenavnet  
    url += '/' + type;
    fetch(url) // fetch udskriver API'et
        .then((response) => {
            // grib svarets indhold (body) og send det som et json objekt til næste .then()
            return response.json();
        })
        .then((data) => {
            // nu er json objektet lagt ind i data variablen, udskriv data
            console.log(data);
            // var type = '';
            document.getElementById('content').innerHTML = ""; // tager fat i id'et content som er på html siden og gør at det vises i content på html siden
            data.forEach(function (item) { // forEach indeholder det som skal vises på siden
                // tager fat i det element som har id'et content i html
                document.getElementById('content').innerHTML += `
                    <div><h3>${item.navn}</h3>
                    <div><img src="http://188.226.158.18:3001/images/${item.billede}"></div>
                    <p>Pris: ${item.pris} kr.</p>
                    <p>Kategori: ${item.kategori}</p>
                    <p><a onclick="hentprodukt(${item.ID})"> Læs mere</a><br><br><br></p>
                    </div><hr>
                            `;
            })
        })
}



//______________________________________________________________________________________________

// Visning af et produkt på produkt siden

function hentprodukt(id) {
    let url = 'http://188.226.158.18:3001/produkt'; // API’et med route, /produkt er routenavnet  
    if (id != undefined) {
        url += '/' + id;
    }
    fetch(url) // fetch udskriver API'et
        .then((response) => {
            // grib svarets indhold (body) og send det som et json objekt til næste .then()
            return response.json();
        })
        .then((data) => {
            // nu er json objektet lagt ind i data variablen, udskriv data
            console.log(data);
            var type = '';
            document.getElementById('content').innerHTML = ""; // tager fat i id'et content som er på html siden og gør at det vises i content på html siden
            data.forEach(function (item) { // forEach indeholder det som skal vises på siden
                if (type != item.type) {
                    document.getElementById('content'); // tager fat i id'et content som er på html siden
                    type = item.type;
                }
                // tager fat i det element som har id'et content i html
                document.getElementById('content').innerHTML += `
                <div><h3>${item.navn}</h3>
                <div><img src="http://188.226.158.18:3001/images/${item.billede}"></div>
                <p>Pris: ${item.pris} kr.</p>
                <p>Beskrivelse: ${item.beskrivelse}</p>
                </div><hr>
                        `;
            })
        })
}

//______________________________________________________________________________________________

