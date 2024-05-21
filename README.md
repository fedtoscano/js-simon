# js-simon

Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

loop - per 5 volte
    creo un numero casuale da 0 a 100
        lo visualizzo in pagina
        lo aggiungo ad un array numeriGenerati



set timeOut, dopo 30 secondi:
pulisci l'HTML
loop - per 5 volte
        faccio partire 5 prompt nei quali l'utente inserisce un numero
            aggiungo il numero ad un altro array numeriIndovinati
        
        confronto numeriGenerati con numeriIndovinati:
            per ogni elemento di numeriIndovinati, controllo se è incluso in numeriGenerati
            se è vero, l'utente ha vinto
