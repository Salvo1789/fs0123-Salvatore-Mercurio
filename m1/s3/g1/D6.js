/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1,l2){
   return l1*l2;
}
console.log(area(2,4));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1,n2){
    if(n1==n2){
        return (n1+n2)*3;
    }
    else{
        return n1+n2;
    }
}

console.log(crazySum(6,8));
console.log(crazySum(5,5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero) {
    if (numero > 19) {
        return (numero - 19) * 3;
    } else {
        return 19 - numero;
    }
}
console.log(crazyDiff(20));
console.log(crazyDiff(11));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    if(n>20 && n<=100 || n==400){
        return true;
    }
    else{
        return false;
    }
}
console.log(boundary(38));
console.log(boundary(400));
console.log(boundary(175));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(word){
    if(word.startsWith("EPICODE")){
        return word;
    }
    else{
        return "EPICODE" + word;
    }
}
console.log(epify("EPICODE LOL"));
console.log(epify("Supercalifragilistichespiralidoso"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n){
    if(n > 0 && n % 3 == 0 || n % 7 == 0){
        return true
    }else{
        return false
    }
}

console.log(check3and7(15));
console.log(check3and7(28));
console.log(check3and7(22));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(word){
    let reverseWord =""
    for (i=1; i<=word.length; i++){
        reverseWord += word[word.length-i];
    }
    return reverseWord;
}

console.log(reverseString("stampante"));
console.log(reverseString("orchidea"));

//metodo alternativo
function reverseString(stringa){
    let string = stringa.split("")
    let reverse = string.reverse()
    let finalmente = reverse.join("")
    return finalmente
}

console.log(reverseString("EPICODE"));


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(word){
    let string = word.split("");
    for (i=0; i<string.length; i++){
        if(i==0 && string[i] == string[i].toLowerCase()){
            string[i] = string[i].toUpperCase();
        }
        if (i != 0 && string[i] == " "){
            string[i+1] = string[i+1].toUpperCase();
        }
    }
    newWord = string.join("");
    return newWord;
}

console.log(upperFirst("ti lancio una mega onda energetica"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa){
    return stringa.slice(1, -1)
}
console.log(cutString("funicolare"));


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n){
    return Math.floor(Math.random() * n)
}

console.log(giveMeRandom(11));

