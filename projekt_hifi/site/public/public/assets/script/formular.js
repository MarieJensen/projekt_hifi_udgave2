

// Kontaktformular + validering

document.querySelector('#gem').addEventListener('click', (event) => { // .querySelector tager fat i id'et gem på html siden. addEventListener gør at man kan klikke på gem også sker der et event.  
    console.log('event ok');
    event.preventDefault();
    let navn = document.querySelector('#navn').value; // .querySelector tager fat i id'et navn på html siden.
    let email = document.querySelector('#email').value; // .querySelector tager fat i id'et email på html siden.
    let besked = document.querySelector('#besked').value; // .querySelector tager fat i id'et besked på html siden.


    // Validering til komtaktformular
    let dotpos = email.lastIndexOf(".");
    let atpos = email.indexOf("@");

    if (navn == "") {
        alert("Angiv navn");
    } else if (email == "") {
        alert("Angiv en gyldig email");
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        alert("Angiv en gyldig email");
    } else if (besked == "") {
        alert("Du mangler at skrive en besked");
    } else {

        alert('Beskeden er sendt'); // Besked til brugeren om at beskeden er sendt

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log('kjjjj');
        let init = { // Variabel som indeholder en post metode. Det bliver postet til databasen.
            method: 'POST',
            headers: headers,
            body: `{"navn":"${navn}","email":"${email}","besked":"${besked}" }`,
            cache: 'no-cache',
            mode: 'no-cors'
        };
        console.log('hejhejhej');
        let request = new Request('http://188.226.158.18:3001/create', init); // API'et/routet, init er variablen fra ovenover.
        console.log('hhhhhh');
        fetch(request) // fetch udskriver API'et
            .then(response => { console.log(response) }).catch(err => { console.log(err) });
        console.log('ooooo');
    }
});

