# HIFI Projekt

# Del 1

## Hvad har jeg lavet i løbet af projekt-HIFI første uge:

### Mandag
Jeg læste opgaven igennem grundigt. Derefter lavede jeg Wireframes i PS. Derefter lavede jeg mine HTML sider, i første omgang bare med rå HTML.

### Tirsdag
Jeg lavede mine HTML sider færdige med CSS og Bootsstrap. Derefter lavede jeg et ER-diagram i word med relationer. Så oprettede jeg en database med tabeller og indhold, også lavede jeg ralationer. 

### Onsdag
Jeg programmerede modules til dataudtræk også oprettede jeg routes også fik jeg min data fra databasen vist i localhost.  

### Torsdag
Jeg arbejdede med at få min hjemmeside vist i localhost og da det virkede, fik jeg også produkter vist på produkt siden, altså data fra databasen vist på min produkt side i localhost. Jeg fik på min produkt side vist alle produkter med en overskrift(kategori). 

### Fredag
Jeg prøvede det meste af dagen at få visning af ét produkt ved klik på et produkt fra listen til at virke. Jeg prøvede også at få visning af produkter efter søgning til at virke og formular til at virke. Jeg blev ikke færdig med noget af det..

### Weekenden
Jeg vil prøve at få det ovenover til at virke. 

## Hvad har jeg lavet i løbet af projekt-HIFI uge 2:

### Mandag 
Jeg var syg mandag.

### Tirsdag
Jeg fik visning af alle produkter inden for en bestemt kategori til at virke også fik jeg visning af produkter efter søgning til at virke.

### Onsdag
Jeg prøvede at få visning af et produkt til at virke. 

### Torsdag
Jeg fik visning af et produkt til at virke. 

### Fredag
Jeg gik igang med komtaktsiden. Jeg fik validering af formularen til at virke.  

## Hvad har jeg lavet i løbet af projekt-HIFI uge 3:

### Mandag 
Jeg arbejdede med kontaktformularen. Jeg oprettede en ny tabel i min database. Derefter lavede jeg et nyt route og i forntend lavede jeg et nyt script til formularen. 


### Tirsdag
Jeg fik formulardata indsat i databasen via et API til at virke og en besked til brugeren om at formularen er sendt og modtaget virkede også.   

### Onsdag
Jeg arbejdede med at få opret produkter og opret kategori til at virke. 

### Torsdag
Jeg fik opret produkter og opret kategori til at virke på min admin side. 

### Fredag
Jeg arbejdede med login.

# Status

## Hvad jeg har lavet:
* Jeg har lavet wireframes af mine html sider både i mobil og destop visning i photoshop. De ligger i min work mappe. 

* Jeg har designet en database i et E/R diagram som også ligger i work mappen. 

* Jeg har oprettet en database som hedder HiFi som har 6 tabeller ialt. 

* Jeg har programmeret modules til dataudtræk og opsat
server og routes. Jeg har en del routes fordi jeg har lavet et nyt route til hvert formål, altså et route til formular, et til loging, et til alle produkter og et til ét produkt, et til kategori osv. Jeg kunne godt have samlet alt det som har med produkter at gøre i et route.   

* Forsiden: 
Jeg har lavet en forside som indeholder forsidetekst og billeder af flere udvalgte produkter.


* Produktsiden:
Min produktside viser alle produkter inden for en bestemt kategori. Man kan klikke på læs mere for at få vist ét produkt fra listen. Jeg har lavet et søgefelt så man kan søge efter produkterne. 
Alle produkter hentes via et API og udskrives med fetch, det samme gør sig gældende med visning af ét produkt, kategori og søgning. 

* Om os siden:
Om os siden indeholder informationer om HI-FI butikken.

* Kontaktsiden: 
Kontaktsiden indeholder en kontaktformular. 
Formulardata indsættes i databasen via et API. 
Formularfelter valideres og der kommer en 
besked til brugeren om at formularen er sendt. 

* Login siden:
Jeg har lavet en login side som ikke virker helt. 

* Admin siden:
Jeg har lavet en side hvor man kan oprette produkter og kategorier til databasen. 
Opret produkt/produkter og opret kategori hentes via et API og udskrives med fetch.  


## Hvad jeg mangler:
* Jeg magler at løse et lille problem med mit søgefelt. Den viser ikke det rigtige produkt når man vil have vist ét produkt ved klik på et produkt fra listen. Men ellers fungerer søgefeltet med visning af alle produkter.

* Jeg mangler at få min loginside til at virke så der sendes noget data til databasen.




# Del 2

## Uge 1:

### Mandag
Jeg læste opgaven igennem grundigt. Derefter lavede jeg min admin side også prøvede jeg at få opdatering af produkter til at virke. 

### Tirsdag
Jeg fik opdatering af produkter til at virke. Jeg lavede et nyt route som har metoden put. Produkterne hentes via et API og udskrives med fetch.  

### Onsdag
Jeg var syg.
  
### Torsdag
Jeg vil gå igang med at få fjernelse af produkter i systemet til at virke. 
 
### Fredag
Jeg fik oprettelse af nye produkter, opdatering af eksisterende produkter og fjernelse af produkter i systemet, til at virke. 

## Uge 2:

### Mandag
Jeg arbejdede med login.  

### Tirsdag
Jeg var syg.

### Onsdag
Jeg fik login til at virke sådan at min admin side er beskyttet af et login-system, så kun butikkens administrator(er) har adgang til siden, hvor man kan oprette, opdaterer og slette produkter.

### Torsdag
Jeg prøvede at få uploade af billeder til at virke på min admin side, men uden held...

### Fredag
Jeg lavede evalueringsskema og rettede de sidste fejl på mit hifi projekt også afleverede jeg. 


# Status på del 2

## Hvad jeg har lavet:

* Jeg har samlet alt det som har med produkter at gøre i en fil på API delen, som hedder produkter.js. 
Produkter.js indeholder forskellige routes som indeholder visning af produkter, visning af et produkt, oprettelse at produkter, oprettelse af et produkt, oprettelse af ny kategori, opdatering af produkter og fjernelse af produkter.   

* Login siden:
Jeg har lavet en login side som virker med security dvs. at min admin side er beskyttet af et login-system, så kun butikkens administrator(er) har adgang til siden, hvor man kan oprette, opdaterer og slette produkter. Mit login system hentes via et API og udskrives med fetch. 

* Admin siden:
Jeg har lavet en side hvor man kan oprette, opdatere og slette produkter og kategorier til databasen. Alle produkter hentes via et API og udskrives med fetch, det samme gør sig gældende med visning af ét produkt, kategori, søgning, oprettelse, opdatering og sletning af produkter. 

## Hvad jeg mangler:
Jeg mangler at få upload af billeder til at virke. 


























