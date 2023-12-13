const utenteWord = prompt('Inserisci una parola');
console.log('utenteWord', utenteWord, typeof utenteWord);

isPalindromo(utenteWord);



function isPalindromo(parola) {
    let reversedWord = '';
    for(let i = parola.length - 1; i >= 0 ; i--){
        console.log(parola[i]);

        reversedWord += parola[i];
    }

    console.log('reversedWord', reversedWord, typeof reversedWord)

    if(parola === reversedWord){
        alert(parola +  'è una parola palindroma')
        return true;
    }
    else{
        alert(parola + 'NON è una parola palindroma')
        return false
    }
}