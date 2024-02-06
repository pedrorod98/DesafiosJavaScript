//Faça uma função chamada table que tem como parâmetro de entrada um número e devolve a tabuada desse mesmo número do valor 1 a 10. Um exemplo de saída para a tabuada do 6 seria:

//Agora coloque mais um parâmetro na função: ao invés da tabuada ir de 1 a 10, agora ela pode ir de 1 até x.

function table(numberoftable) {
    console.log("A tabuada do "+ numberoftable);
    for (let x = 0; x <= numberoftable; x++) {
        let result = numberoftable * x;
        console.log(numberoftable+" x "+ x + " = " + result);
    }
    
}



let numero = table(10);

