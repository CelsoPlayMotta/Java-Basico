

//classes são definiçoes 

class pessoa{

    name;
    Idade;
    estado;
    trabalha;
    funcao;
    anoDeNascimento;

    //Constructos definem valores obrigatorios na declaração de um ainstancia 
    constructor(name,Idade){
        this.name= name;
        this.Idade= Idade;
        this.anoDeNascimento= 2023-Idade;
    }


    Descrever(){
        console.log('Meu nome é '+this.name,'eu nasci em  '+this.anoDeNascimento,', sou '+this.estado,'e trabalho como '+this.funcao)
    }
}

//instancias de classes 

const celso=new pessoa('celso',29);
celso.estado='solteiro';
celso.trabalha=true;
celso.funcao='Suporte';

const Bia=new pessoa('Bia',25);
Bia.estado='solteira';
Bia.trabalha=true;
Bia.funcao='Assistente';

celso.Descrever();
Bia.Descrever();

function compararPessoas(P1,P2){

    if(P1.Idade>P2.Idade){
        console.log(P1.name,'é maiorque '+P2.name)
    }else if(P1.Idade<P2.Idade){
        console.log(P2.name,'é maiorque '+P1.name)
    }else{
        console.log(P2.name,'tem a mesam idade  '+P1.name)   
}

}



const Ygor=new pessoa('Ygor',25);
const Cel=new pessoa('Cel',25);

compararPessoas(Ygor,Cel);
compararPessoas(Bia,celso);