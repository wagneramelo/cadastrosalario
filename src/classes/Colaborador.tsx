export default class Colaborador{
    //id gerado por uma fórmula para ser UNIQUE
    id: string = Math.random().toString(36).substr(2, 9);
    nome: string;
    cpf: string;
    salarioBruto: number;
    descontoPrevidencia: number;
    numeroDependentes: number;
    salarioBase: number;
    descontoIRPF: number;

    constructor(nome: string,cpf: string,salarioBruto: number,descontoPrevidencia: number,numeroDependentes: number){
        this.nome = nome;
        this.cpf = cpf;
        this.salarioBruto = salarioBruto;
        this.descontoPrevidencia = descontoPrevidencia;
        this.numeroDependentes = numeroDependentes;
        this.salarioBase = this.calcularSalarioBase();
        this.descontoIRPF = this.calcularDescontoIRPF();
    }

    //método para retornar salário base de acordo com as entradas do usuário
    calcularSalarioBase = () => { 
        return this.salarioBruto - this.descontoPrevidencia - (164.56 * this.numeroDependentes);
    }

    //método para calcular desconto do IRPF de acordo com as entradas do usuário
    calcularDescontoIRPF = () => {
        var salarioBase = this.calcularSalarioBase();
        if(salarioBase <= 1903.98) return 0;
        else if((salarioBase > 1903.98) && (salarioBase <= 2826.65)) return (salarioBase * 7.5/100) - 142.80;
        else if((salarioBase > 2828.65) && (salarioBase <= 3751.05)) return (salarioBase * 15/100) - 354.80;
        else if((salarioBase > 3751.05) && (salarioBase <= 4664.68)) return (salarioBase * 22.5/100) - 636.13;
        else return (salarioBase * 27.5/100) - 869.36;
    }

}