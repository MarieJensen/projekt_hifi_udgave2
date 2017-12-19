

// Login

(() => {
    document.addEventListener('DOMContentLoaded', event => {
        if (localStorage.getItem('token') === null) {
            window.location.assign('login.html');
        } else {
            const template = document.querySelector('template');
            const userElem = template.content.querySelector('.userInfo');
            console.log(localStorage.getItem('token'));
            fetch('http://188.226.158.18:3001/users', { // API’et med route, /users er routenavnet, fetch udskriver API'et
                'method': 'GET', // API'et/routet har get metoden
                'headers': {
                    'Authorization': localStorage.getItem('token'), // sikkerhed, så at det kun er butikkens administrator(er) der har adgang til admin siden. 
                    'userID': localStorage.getItem('userid') // sikkerhed, så at det kun er butikkens administrator(er) der har adgang til admin siden. 
                },
                'mode': 'cors',
                'cache': 'default'
            })
                .then((result) => result.json())
                .then((users) => {
                    users.forEach(function (user) {
                        userElem.textContent = `Brugernavn: ${user.username}`;
                        document.querySelector('main').appendChild(document.importNode(template.content, true));
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    });
})();