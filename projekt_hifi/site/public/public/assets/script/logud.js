document.getElementById('logud').addEventListener('click', () => {
    if (confirm('vil du logge af?')) { // besked til brugeren om at han/hun vil logge af
        localStorage.clear(); 
        window.location.replace('login.html'); // når man logger af kommer man tilbage til login siden
    }
})