// objetos é um conhunto de informaçoes 


const Celso={

    nome: 'celso de Oliveira motta filho ',
    Idade : 29,
    estado : 'Solteiro',
    trabalha: true,
    funcao: 'Suporte cadastro / Logistica',


    // funçoes dentro do obgeto são denominado metodo

    Descrever: function(){
        console.log('Meu nome é '+this.nome,'eu tenho '+this.Idade,'anos, sou '+this.estado,'e trabalho como '+this.funcao)
    }

};

Celso.Descrever();

