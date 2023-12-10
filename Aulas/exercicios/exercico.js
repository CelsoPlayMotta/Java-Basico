//Exercício 6: Comparações de Números
//Peça ao usuário para inserir dois números e determine se o primeiro número é maior, menor ou igual ao segundo número.
let nun1=5;
let nun2=8;
let Diferenca="maior";

if(nun1>nun2){
    Diferenca="maior";
    console.log("o número "+nun1,"é "+Diferenca,"que "+nun2)

}else if(nun1<nun2){
    Diferenca="menor ";
    console.log("o número "+nun1,"é "+Diferenca,"a "+nun2)
}else{
    Diferenca="iqual ";
    console.log("o número "+nun1,"é "+Diferenca,"a "+nun2)
}


//Exercício 7: Verificação de Ano Bissexto
//Crie um programa que verifica se um ano inserido pelo usuário é bissexto. Um ano bissexto é divisível por 4, mas não por 100, a menos que seja divisível por 400.

let ano=2045;
let Anobissexto= "sim" ;

if (ano % 4 === 0) {

    if (ano % 100 !== 0 || ano % 400 === 0) {
        Anobissexto = "sim";
        console.log("O ano " + ano + " é bissexto.");
    } else {
        Anobissexto = "não";
        console.log("O ano " + ano + " não é bissexto.");
    }
    
} else {
    Anobissexto = "não";
    console.log("O ano " + ano + " não é bissexto.");
}


// Criar uma classe para representar pessoas 
//para cada pessoa teremos , nome ,peso e altura 
//as pessoas devem ter a capacidade de dizer o seu IMC (IMC = peso/ (altura = altura))

//devemos instanciar uma pessoa chamda  José que tenha 70 kl e 1,75 de altura e pedimos para José dizer o valor do seu IMC. 

class Pessoa {

    nome ;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.peso=peso;
        this.altura=altura;
        this.nome=nome;
    }

    calcularIMC(){
        return this.peso/(this.altura*this.altura);
    }
    classificarIMC(){
        const imc= this.calcularIMC();

        if(imc< 10.5){
            return('Abaixo do peso');
        }else if(imc <= 18.5 && imc < 25){
            return('Peso normal');
        }else if(imc <= 25 && imc < 30){
            return('Acima do peso');
        }else if(imc <= 30 && imc < 40){
            return('Obeso');
        }else{
            return('Obesidade grave');
        }
    }
}

const jose = new Pessoa('José',85,1.75);
const Bia = new Pessoa('José',60,1.75);
const celso = new Pessoa('José',94,1.75);




console.log(jose.calcularIMC());
console.log(jose.classificarIMC());



console.log(Bia.calcularIMC());
console.log(Bia.classificarIMC());


console.log(celso.calcularIMC());
console.log(celso.classificarIMC());


// estrutura de repetição 
// calcular uma tabuada 

let numero=9;

for (let i = 1; i <= 10; i++) {
    console.log(i*numero);
}

const nList=[1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < nList.length; i++) {

    const numeroPar = nList[i];

    if(numeroPar %2 === 0){
        console.log(numeroPar)
    }else{
    }
}

console.log('-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0');



    const numerosPares = [];

    for (let i = 0; i < 10; i++) {
        const numeroPar = i % 2 === 0;
        if (numeroPar) {
            numerosPares.push(i);
        }
    }

    console.log(numerosPares);
