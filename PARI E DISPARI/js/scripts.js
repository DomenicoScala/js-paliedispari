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



function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const numeroRandomPc = getRndInteger(1, 5);
console.log(numeroRandomPc)


function sommaTot (a, b){
    const sommaTot = a + b;
    return sommaTot
}

let risultatatoSomma = sommaTot(numUtente,numeroRandomPc);
console.log('risultatoSomma', risultatatoSomma, typeof risultatatoSomma)



function isEven(result){
    if(result % 2 == 0){
        return "pari";
    }
    else{
        return "dispari";
    }
} 

let risultatatoFinale = isEven(risultatatoSomma)


if(evenOddUtente == risultatatoFinale){
    console.log('hai vinto');
}
else{
    console.log('hai perso');
}

