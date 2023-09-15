/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20;
console.log(sum);


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21); 
console.log( random);


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: "Federico",
  surname: "Capizzi",
  age: 21
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["JavaScript"];
console.log(me);


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push('New Element')
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop()
console.log(me)
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice (){
  let random = Math.floor(Math.random() * 5 +1); 
  console.log( random);
}
dice()

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger (x,y){
if (x>y){return x;}else {return y}
}
const inv_funz =whoIsBigger(100,97)
console.log('il numero più grande è:',inv_funz);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array 
  contenente ogni parola della stringa.
  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe (stringa){
 const ann_spaz = stringa.split(' ')
 return ann_spaz
}

const input_stringa = 'Sto seguendo il corso epicode'
const risultato_array = splitMe(input_stringa)
console.log(risultato_array)


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(str, bool) {
  if (bool) {
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
}
// esmpio booleano vero 
const string1 = "Esempio";
let bool = true;
const risultato1 = deleteOne(string1, bool);
console.log( 'Primo risultato:',risultato1);

// esmpio booleano falso
const string2 = "Esempio";
bool = false;
const risultato2 = deleteOne(string2, bool);
console.log( 'Secondo risultato:',risultato2);



/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che 
  riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.
  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(str) {
  return str.replace(/\d/g, '');
}
const inputString = "Mancano 5 mesi alla fine del corso";
const resultString = onlyLetters(inputString);
console.log(resultString);  


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(str) {
  const parts = str.split('@');
  if (parts.length !== 2) {
    return false;
  }
  const localPart = parts[0];
  if (localPart.length === 0 ) {
    return false;  
  }
 
  return true;
}
console.log(isThisAnEmail("federico@email.com"));  
console.log(isThisAnEmail("non è un email"));    

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  const daysOfWeek = ["Domenica", "Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato"];
  const today = new Date().getDay();
  return daysOfWeek[today];
}
const day = whatDayIsIt();
console.log("Oggi è:", day);


/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(numRolls) {
  const values = [];
  let sum = 0;
  for (let i = 0; i < numRolls; i++) {
    const rollResult = dice();
    values.push(rollResult);
    sum += rollResult;
  }
  return {
    sum: sum,
    values: values
  };
}
const result = rollTheDices(6);
console.log(result); 



/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(dateStr) {
  const inputDate = new Date(dateStr);
  const birth_day = new Date('2002-03-27');
  const millisecondi_differenza = inputDate - birth_day;
  const differenza_giorni = Math.floor(millisecondi_differenza / (1000 * 60 * 60 * 24));
  return differenza_giorni;
}
const inputDateStr = '2023-09-15';
const giorni_tras_dal_comp = howManyDays(inputDateStr);
console.log(`Sono trascorsi dal mio compleanno ${giorni_tras_dal_comp} giorni.`);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday() {
  const oggi = new Date();
  const compleanno = new Date(oggi.getFullYear(), 2, 27); 
  const stessoMese = oggi.getMonth() === compleanno.getMonth();
  const stessoGiorno = oggi.getDate() === compleanno.getDate();
  return stessoMese && stessoGiorno;
}
const compleannoOggi = isTodayMyBirthday();
if (compleannoOggi) {
  console.log('Oggi è il mio compleanno! Auguri!');
} else {
  console.log('Oggi non è il mio compleanno.');
}
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; 
  deve ritornare l'oggetto fornito dopo aver eliminato in esso la proprietà chiamata come la 
  stringa passata come secondo parametro.
*/
function deleteProp(obj, propToDelete) {
  if (obj.hasOwnProperty(propToDelete)) {
    delete obj[propToDelete];
  }
  return obj;
}
const seleziona_oggetto = {
  nome: 'Jim Morrison',
  età: 27,
  indirizzo: 'Piazza duomo'
};
console.log('Oggetto originale:', seleziona_oggetto);
const propToDelete = 'età';
deleteProp(seleziona_oggetto, propToDelete);
console.log('Oggetto dopo aver eliminato la proprietà:', seleziona_oggetto);

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(movies) {
  let newestYear = 0;
  let newestMovie = null;
  for (const movie of movies) {
      const year = parseInt(movie.Year);
      if (year > newestYear) {
          newestYear = year;
          newestMovie = movie;
      }
  }
  return newestMovie;
}
const newest = newestMovie(movies);
console.log('Il film più recente è:', newest.Title, 'anno:', newest.Year);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = (movies) => {
  return movies.length;
};

const numMovies = countMovies(movies);
console.log('Il numero di film è:', numMovies); 

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = (movies) => {
  return movies.map(movie => movie.Year);
};
const yearsArray = onlyTheYears(movies);
console.log('Anni di uscita dei film:', yearsArray); 

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = (movies) => {
  return movies.filter(movie => parseInt(movie.Year) < 2000);
};
const lastMillenniumMovies = onlyInLastMillennium(movies);
console.log(lastMillenniumMovies);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = (movies) => {
  let totalYears = 0;
  movies.forEach(movie => {
    totalYears += parseInt(movie.Year);
  });
  return totalYears;
};
const totalYears = sumAllTheYears(movies);
console.log('Somma degli anni:', totalYears); 


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = (stringaa, movies) => {
  return movies.filter(movie => movie.Title.toLowerCase().includes(stringaa.toLowerCase()));
};
const searchTerm = 'Ring';
const moviesWithSearchTerm = searchByTitle(searchTerm, movies);
console.log('I film che contengono "' + searchTerm + '" nel titolo:', moviesWithSearchTerm);


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/



/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
// function selezionaElementoContainer() {
//   const elementoContainer = document.getElementById('container');
//   } 
// selezionaElementoContainer();

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
// function selezionaTuttiTD() {
//   const celleTD = document.querySelectorAll('td');}
//   selezionaTuttiTD()

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
// function stampaTestoCelleTD() {
//   const celleTD = document.querySelectorAll('td');
//   if (celleTD.length > 0) {
//     console.log('Testo contenuto nelle celle <td>:');
//     celleTD.forEach((cella, indice) => {
//       console.log(`Contenuto cella ${indice + 1}:`, cella.textContent);
//     });
//   } else {
//     console.log('Nessuna cella <td> trovata.');
//   }
// }
// stampaTestoCelleTD();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
// function aggiungiElemento() {
//   const nuovoElemento = document.createElement('li');
//   const testoElemento = document.createTextNode('Nuovo elemento');
//   nuovoElemento.appendChild(testoElemento);
//   const lista = document.getElementById('myList');
//   lista.appendChild(nuovoElemento);
// }
// aggiungiElemento();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
