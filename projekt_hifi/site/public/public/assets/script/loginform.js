
// Login 

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelector('.loginForm');

        form.onsubmit = () => {
            const data = JSON.stringify({
                'username': form.username.value,
                'password': form.password.value
            });

            fetch('http://188.226.158.18:3001/login', { // API’et med route, /login er routenavnet, fetch udskriver API'et
                'method': 'POST', // API'et/routet indeholder post metoden
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Content-Length': data.length
                },
                'mode': 'cors',
                'cache': 'default',
                'body': data
            })
                .then((result) => result.json())
                .then((data) => {
                    localStorage.setItem('token', data.AccessToken);
                    localStorage.setItem('userid', data.ID);
                    document.getElementById('status').innerHTML = "Du er logget ind"; // kan også hentes fra localStorage
                    window.location.replace('admin.html'); // når man logger på kommer man til admin siden
                })
                .catch((err) => {
                     console.log(err);
                });

            return false;
        };
    });
})();

document.getElementById('logud').addEventListener('click', () => { // log af 
    if (confirm('vil du logge af?')) { // besked til brugeren om at han/hun vil logge af
        localStorage.clear(); 
        window.location.replace('login.html'); // når man logger af kommer man tilbage til login siden
    }
})

