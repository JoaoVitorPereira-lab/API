export function somar (a, b){
    return a + b;
}

/* somar */

export function dobro (numero){
    return numero * 2;
}

/* dobro */

export function temperatura (temp){
    let a = false
    if(temp > 38){
        a = true
    }

    return a;
}

/* temp */

export function tabuada (num) {
    let a = [11];
    for (let i = 0; i<=10; i++) {
        a[i] = num * i;
    }
    return a;
}

/* tabuada */

export function media (n1, n2, n3){
    return (n1 + n2 + n3) / 3;
}

/* media */

export function corPrimaria (cor) {
    let a = false;

    if (cor=="amarelo" || cor == "azul" || cor == "vermelho") {
        a = true;
    }

    return a;
}

/* cor primária */

export function ingressoCinema (meia, inteira, diaSemana, nacionalidade) {     
    if (diaSemana.toLowerCase() == "quarta")
    {
        return (inteira + meia) * 5;
    }

    else if (nacionalidade.toLowerCase() == "brasileiro") 
    {
        return (inteira + meia) * 14.25;
    }

    else
    {
        return (inteira * 28.5) + (meia * 14.25);
    }
}

/* ingresso de cinema */

export function FreqCaracter (texto, caracter){    

    let a = 0;

    for(let i = 0; i < texto.length; i++){
        if (texto.charAt(i) == caracter) {
            a++
        }
    }

    return a;
}

/* frequência de caracter */

export function maiorNumero (array){
    let a = -2;

    for(let i = 0; i < array.length; i++) {
        if (a < array[i]) 
            a = array[i]
    }

    return a;
}

/* maior número */
