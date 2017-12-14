

// Visning af alle produkter på admin siden

(() => {
    document.addEventListener('DOMContentLoaded', () => { // hele html siden får en eventlistner som gør at når siden er loaded vises alle produkterne.
        henteData(0); // funktionen hentData bliver kaldt her
    });
})();
// Funktion som henter data til visning i content
// Funktionen har en parameter - hvis tallet nul hentes alt indhold, og hvis større end nul hentes kun denne ene kategori
function henteData(type = 0) {
    fetch('http://188.226.158.18:3001/produkter', {  // API'et/routet, fetch udskriver API'et
        'method': 'GET', // fetch har get metoden
        'mode': 'cors',
        'cache': 'default'
    })
        .then((response) => {
            // grib svarets indhold (body) og send det som et json objekt til næste .then()
            return response.json();
        })
        .then((data) => {
            // nu er json objektet lagt ind i data variablen, udskriv data
            console.log(data);
            var type = '';
            document.getElementById('content2').innerHTML = ""; // tager fat i id'et content2 som er på html siden og gør at det vises i content2 på html siden
            data.forEach(function (item) { // forEach indeholder det som skal vises på siden. forEach kalder en funktion som har parametret item.
                if (type != item.type) {
                    document.getElementById('content2').innerHTML += `<h2 class="adminh3"><b>${item.type}</b></h2><br>`; // tager fat i id'et content2 som er på html siden
                    type = item.type;
                }
                // tager fat i det element som har id'et content2 i html, her vises produkterne i en tabel (se nedenunder).
                document.getElementById('content2').innerHTML += ` 

        <div>
                <h3 class="adminh3">${item.navn}</h3>

                <table style="width:100%"> 
                
                  <tr>
                    <th>Pris</th>
                    <th>Kategori</th> 
                    <th>Producent</th>
                    <th>Billede</th>
                    <td> <button  class="opdaterknap" onclick="henteprodukt(${item.ID})">Opdater</button></td>
                    <td> <button  class="sletknap" onclick="sletprodukt(${item.ID})">Slet</button></td>
                  </tr>
                 
                  <tr>
                    <td>${item.pris}</td>
                    <td>${item.type}</td>
                    <td>${item.producent}</td>
                    <td><img src="http://188.226.158.18:3001/images/${item.billede}"></td>
                  </tr>
                  
                </table>
              <hr class="hrsort">
                <br>
                
        </div>

                        `;
            })
        })
        .catch(err => {
            console.log(err);
        })
}


//________________________________________________________________________________________________________________________________


// Visning af et produkt med opdatering af eksisterende produkter på admin siden

function henteprodukt(id) {
    let url = 'http://188.226.158.18:3001/produkt'; // API'et/routet
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
            document.getElementById('content2').innerHTML = ""; // tager fat i id'et content2 som er på html siden og gør at det vises i content2 på html siden
            data.forEach(function (item) { // forEach indeholder det som skal vises på siden
                if (type != item.type) {
                    document.getElementById('content2'); // tager fat i id'et content2 som er på html siden
                    type = item.type;
                }
                // tager fat i det element som har id'et content2 i html, her vises et produkt
                document.getElementById('content2').innerHTML += `
                <div><h3>${item.navn}</h3>
                <div><img src="http://188.226.158.18:3001/images/${item.billede}"></div>
                <p>Pris: ${item.pris} kr.</p>
                <p>Beskrivelse: ${item.beskrivelse}</p>
                </div><hr>

        <div class="col-md-6 col-md-offset-3 col-xs-12">
                <h3>Opdatering af produkter </h3>
                <form>
                      <input class="col-md-12" name="navn" type="name" id="opdaternavn" placeholder="Produkt Navn" value="${item.navn}" >
                      <input class="col-md-12" name="pris" type="pris" id="opdaterpris" placeholder="Vælg Pris" value="${item.pris}">
                      <textarea class="col-md-12 ryk" name="beskrivelse" type="beskrivelse" id="opdaterbeskrivelse" placeholder="Beskrivelse">${item.beskrivelse}</textarea>

        <select name="kategori_id" id="opdaterkategori_id">
            <option>Vælg kategori</option>
                <option value="1">CD afspillere</option>
                <option value="2">DVD afspillere</option>
                <option value="3">Effektforstærkere</option>
                <option value="4">Forforstærkere</option>
                <option value="5">Højtalere</option>
                <option value="6">Int. Forstærkere</option>
                <option value="7">Pladespillere</option>
                <option value="8">Rørforstærkere</option>
        </select>
                      <br><br>

                      <select name="producent_id" id="opdaterproducent_id">
                <option>Vælg producent</option>
                    <option value="1">Creek Audio Ltd</option>
                    <option value="2">Exposure</option>
                    <option value="3">Parasound</option>
                    <option value="4">Manley</option>
                    <option value="5">Pro-ject Audio systems</option>
                    <option value="6">Bösendorfer</option>
                    <option value="7">Epos Ltd</option>
                    <option value="8">HArbeth Loudspeakers</option>
                    <option value="9">Jolida</option>
                
        </select>
                      <br><br>
                      <input class="col-md-12 ryknedd indsendknap" type="submit" id="gemmmm">
                </form> 
          </div>
                      `;

                // Opdatering af eksisterende produkter

                document.querySelector('#gemmmm').addEventListener('click', (event3) => { // .querySelector tager fat i id'et gemmmm på html siden. addEventListener gør at man kan klikke på gemmmm også sker der et event.
                    console.log('event ok');
                    event3.preventDefault();
                    let navn = document.querySelector('#opdaternavn').value; // .querySelector tager fat i id'et opdaternavn på html siden.
                    let pris = document.querySelector('#opdaterpris').value; // .querySelector tager fat i id'et  opdaterpris på html siden.
                    let beskrivelse = document.querySelector('#opdaterbeskrivelse').value; // .querySelector tager fat i id'et  opdaterbeskrivelse på html siden.
                    let kategori_id = document.querySelector('#opdaterkategori_id').value; // .querySelector tager fat i id'et  opdaterkategori_id på html siden.
                    let producent_id = document.querySelector('#opdaterproducent_id').value; // .querySelector tager fat i id'et  opdaterproducent_id på html siden.
                    
                    // validering af opdater produkter
                    if (navn == "") {
                        alert("Angiv navn");
                    } else if (pris == "") {
                        alert("Angiv en pris");
                    } else if (beskrivelse == "") {
                        alert("Angiv en beskrivelse");
                    } else if (kategori_id == "") {
                        alert('Angiv en kategori');
                    } else if (producent_id == "") {
                        alert("Angiv en producent");
                    } else {
                        let init = { // variabel som indeholder en put metode
                            method: 'PUT',
                            headers: {
                                'Authorization': localStorage.getItem('token'), // sikkerhed, så at det kun er butikkens administrator(er) der har adgang til admin siden. 
                                'userID': localStorage.getItem('userid'), 'Content-Type': 'application/json'// sikkerhed, så at det kun er butikkens administrator(er) der har adgang til admin siden. 
                            },
                            body: `{"navn":"${navn}","pris":${pris},"beskrivelse":"${beskrivelse}","kategori_id":"${kategori_id}", 
                        "producent_id":"${producent_id}"}`, // selve det som vises på siden
                            cache: 'default',
                            mode: 'cors'
                        };
                        console.log('hejhejhej');
                        let request = new Request('http://188.226.158.18:3001/produkt/' + id, init); // API'et/routet, init er variablen fra ovenover. 
                        console.log('hhhhhh');
                        fetch(request) // fetch udskriver API'et
                            .then(response => { console.log(response) }).catch(err => { console.log(err) }); 
                        console.log('ooooo');
                    }
                });
            })
        })
}

//__________________________________________________________________________________________________________________________________


// Oprettelse af produkt/produkter på admin siden

document.querySelector('#gemm').addEventListener('click', (event2) => { // .querySelector tager fat i id'et gemm på html siden. addEventListener gør at man kan klikke på gemm også sker der et event.
    console.log('event ok');
    event2.preventDefault();
    let navn = document.querySelector('#navn').value; // .querySelector tager fat i id'et navn på html siden.
    let pris = document.querySelector('#pris').value; // .querySelector tager fat i id'et pris på html siden.
    let beskrivelse = document.querySelector('#beskrivelse').value; // .querySelector tager fat i id'et beskrivelse på html siden.
    let kategori_id = document.querySelector('#kategori_id').value; // .querySelector tager fat i id'et kategori_id på html siden.
    let producent_id = document.querySelector('#producent_id').value; // .querySelector tager fat i id'et producent_id på html siden.

    // validering af oprettelse af produkter
    if (navn == "") {
        alert("Angiv navn");
    } else if (pris == "") {
        alert("Angiv en pris");
    } else if (beskrivelse == "") {
        alert("Angiv en beskrivelse");
    } else if (kategori_id == "") {
        alert('Angiv en kategori');
    } else if (producent_id == "") {
        alert("Angiv en producent");
    } else {
        let url = `http://188.226.158.18:3001/produkt`;
        let form = document.querySelector('#produktform form');
        let data = new FormData(form);

        let init = {
            'method': 'post',
            'headers': {
                'Authorization': localStorage.getItem('token'),
                'userID': localStorage.getItem('userid')
            },
            'body': data,
            'cache': 'no-cache'
        };
        let request = new Request(url, init); 
        console.log('hhhhhh');
        fetch(request) // fetch udskriver API'et
            .then(response => { window.location.replace('admin.html');
            console.log(response) }).catch(err => { console.log(err) });
        console.log('ooooo');
    }
});

//_______________________________________________________________________________________________________________________________

// Oprettelse af kategori på admin siden

document.querySelector('#gemmm').addEventListener('click', (event2) => { // .querySelector tager fat i id'et gemmm på html siden. addEventListener gør at man kan klikke på gemmm også sker der et event.
    console.log('event ok');
    event2.preventDefault();
    let kategori = document.querySelector('#kategori').value; // .querySelector tager fat i id'et kategori på html siden.
    if (kategori == "") {
        alert("Angiv navn");
    } else {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let init = { // variabel som indeholder en post metode. Det bliver postet til databasen.
            method: 'POST', // variablen indeholder en post metode
            headers: {
                'Authorization': localStorage.getItem('token'),// sikkerhed, så at det kun er butikkens administrator(er) der har adgang til admin siden. 
                'Content-Type': 'application/json',// sikkerhed, så at det kun er butikkens administrator(er) der har adgang til admin siden. 
                'userID': localStorage.getItem('userid')// sikkerhed, så at det kun er butikkens administrator(er) der har adgang til admin siden. 
            },
            body: `{"kategori":"${kategori}"}`,
            cache: 'no-cache', // browserens lager
            mode: 'cors'
        };
        console.log('hejhejhej');
        let request = new Request('http://188.226.158.18:3001/opretkategori', init); // API'et/routet, init er variablen fra ovenover.
        console.log('hhhhhh');
        fetch(request) // fetch udskriver API'et
            .then(response => { console.log(response) }).catch(err => { console.log(err) });
        console.log('ooooo');
    }
});


//________________________________________________________________________________________________________________________________


// Slet produkt/produkter på admin siden

function sletprodukt(id) {
    if (confirm('Er du sikker på at du vil slette?')) { // besked til brugeren

        let url = 'http://188.226.158.18:3001/produkt'; // API'et/routet
        if (id != undefined) {
            url += '/' + id;
        }
        console.log(url);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let init = { // variabel som indeholder en delete metode. 
            method: 'DELETE', // variablen indeholder en delete metode
            headers: {
                'Authorization': localStorage.getItem('token'), // sikkerhed, så at det kun er butikkens administrator(er) der har adgang til admin siden. 
                'Content-Type': 'application/json', // sikkerhed, så at det kun er butikkens administrator(er) der har adgang til admin siden. 
                'userID': localStorage.getItem('userid') // sikkerhed, så at det kun er butikkens administrator(er) der har adgang til admin siden. 
            },
            cache: 'no-cache', // browserens lager
            mode: 'cors'
        };

        let request = new Request(url, init);
        fetch(request) // fetch udskriver API'et
            .then((response) => {
                // grib svarets indhold (body) og send det som et json objekt til næste .then()
                return response.json();
            })
            .then((data) => {
                // nu er json objektet lagt ind i data variablen, udskriv data
                console.log(data);

            })
            .catch(err => { console.log(err); });
    }
}

//__________________________________________________________________________________________________________________________________