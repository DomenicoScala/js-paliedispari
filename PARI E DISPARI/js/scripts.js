const evenOddUtente = prompt('Scegli Pari o Dispari').toLowerCase();

if(evenOddUtente == 'pari'){
    console.log('pari');
}
else if(evenOddUtente == 'dispari'){
    console.log('dispari');
}
else{
    prompt('SCEGLI BENE');
}


const numUtente = parseInt(prompt('Scegli un numero tra 1 e 5'));

if(numUtente <= 5){
    console.log(numUtente);
}
else{
    prompt('SCEGLI BENE!');
}


const numeroRandomPc = getRndInteger(1, 5);
console.log(numeroRandomPc)


let risultatatoSomma = sommaTot(numUtente,numeroRandomPc);
console.log('risultatoSomma', risultatatoSomma, typeof risultatatoSomma);


let risultatatoFinale = isEven(risultatatoSomma);


const risultInPagina = document.querySelector('.risultato')

if(evenOddUtente == risultatatoFinale){
    risultInPagina.innerHTML = 'HAI VINTO!'
}
else{
    risultInPagina.innerHTML = 'HAI PERSO'
}



/* 

    FUNZIONI

*/



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function sommaTot (a, b){
    const sommaTot = a + b;
    return sommaTot
}


function isEven(result){
    if(result % 2 == 0){
        return "pari";
    }
    else{
        return "dispari";
    }
} 