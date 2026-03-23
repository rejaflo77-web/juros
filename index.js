
import entradaDados from 'readline-sync';

console.log("------ Aplicação de Juros ------\n");

let emprestimo = Number(entradaDados.question("Informe o valode do empréstimo: "));
let diasPassado = Number(entradaDados.question("informe os dias que passaram desde o vencimento do boleto: "));
let aumt = 10;
let ment = 5;

console.log("\nValor total do emprestimo: " +emprestimo)
console.log("Dias atrasados: "+diasPassado)

if(diasPassado > 15){

   let valor = emprestimo +(emprestimo * aumt /100)
   console.log("Taxa de juros: " +aumt+"%")
   console.log("Valor total com juros: "+valor.toFixed(2))
}else{
   let adic = emprestimo +(emprestimo * ment /100)
   console.log("Taxa de juros: " +ment+"%")
   console.log("Valor total com juros: "+adic.toFixed(2))
}




