console.log("Classe carro");
// criar classes (molde)

class Carro{
    id;
    nome;
    cor;
    disponivel;
    anoFabricacao;
    // método especial constructor
    constructor(id,nome,cor,anoFabricacao){
        this.id = id;
        this.nome = nome;
        this.cor = cor;
        this.disponivel = true;
        this.anoFabricacao = anoFabricacao;
    }
}
// instanciando = construir um objeto
const p1 = new Objeto (1,"BMW", "Preto", "2018");
const p2 = new Objeto (2,"Lamborghini", "Laranja", "2023");
const p3 = new Objeto (3,"Ferrari", "Vermelho", "2021");

console.log(p1);
