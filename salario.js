// ARRAY COM 10 POSICOES COM OS SALARIOS
const salarios = [
  1000,
  1500,
  2500,
  3000,
  3500,
  4000,
  4500,
  5000,
  5500,
  6000,
];

// ARRAY QUE IRA RECEBER OS SALARIOS COM OS AUMENTOS
let novosSalarios = [];

// FUNCAO QUE APLICA O AUMENTO COM BASE NO SALARIO
function aplicarAumento(salario) {
    let res = 0; // VARIAVEL QUE ARMAZENARA O VALOR DO NOVO SALARIO

    // SE O SALARIO FOR MENOR OU IGUAL A 2K, ENTRA NA CONDICAO QUE APLICA AUMENTO DE 15%
    if (salario <= 2000) { 
        res = salario + (salario * 0.15);
        return res;
    }

    res = salario + (salario * 0.10);
     // SE O SALARIO FOR MAIOR QUE 2K, APLICA AUMENTO DE 10%
    return res; 
    // RETORNA O NOVO SALARIO QUE FOI SETADO ANTERIORMENTE, COM AUMENTO DE 15% OU 10%
}

const salariosAtualizados = salarios.map(aplicarAumento); 
// ATRAVES DO METODO .MAP, CHAMA A FUNCAO QUE APLICA O AUMENTO PASSANDO COMO PARAMETRO O SALARIO DA POSICAO
const salariosAcimaDoisMil = salariosAtualizados.filter((salario) => salario > 2500); 
// COM O NOVO ARRAY DE SALARIOS POPULADO, RETORNA UMA NOVO ARRAY APENAS COM SALARIOS MAIOR QUE 2.5K
const totalSalariosAcimaDoisMil = salariosAcimaDoisMil.reduce((prevVal, currVal) => prevVal + currVal, 0);
 // RETORNA O VALOR TOTAL DA SOMA DOS SALARIOS FILTRADOS ANTERIORMENTE, ACIMA DE 2.5K

 console.log("Salario com aumento: " + salariosAtualizados);
 console.log("Salario acima de 2500R$: " + salariosAcimaDoisMil);
 console.log("Soma dos salarios acima de 2500R$: " + totalSalariosAcimaDoisMil);
