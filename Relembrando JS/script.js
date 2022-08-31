/* Tudo é Objeto
Um objeto possui propriedades e métodos que podem ser diretos ou herdados (protótipo).

// Objeto Literal
const menu = {
  selector: '.principal',
  active() {
    const menuElement = document.querySelector(this.selector);
    menuElement.classList.add('active');
  },
};

menu.selector; // ".principal";
menu.active(); // adicionar active ao menu
menu.hasOwnProperty('class'); // método herdado


['10', '20', '30'].map(Number); // [10, 20, 30];
'JavaScript'.toUpperCase(); // JAVASCRIPT

const body = document.querySelector('body');
body.classList.add('js'); // adiciona JS ao Body 

- Arrow Function -

const lowerCase = () => {

}

- Desestructuring -

- Arrays -
const frutas = ['Banana', 'Pera', 'Uva'];
const [fruta1, fruta2, fruta3] = frutas;
console.log(fruta1, fruta2, fruta3); //Banana Pera Uva

*/

/* Rest Operator */
// function showList(empresa, clients) {
//   clients.forEach((client) => {
//     console.log(client, empresa);
//   });
// }

// showList('Google', ['André', 'Pedro', 'João']); // André Google Pedro Google João Google
/* Dessa forma /\ temos que passar os valores do parâmetro dentro de uma array

/* Caso eu queira passar apenas as string, temos que usar o operador Rest, como no exemplo abaixo
function showList(empresa, ...clients) {
  clients.forEach((client) => {
    console.log(client, empresa);
  });
}

showList('Google', 'André', 'Pedro', 'João'); // André Google Pedro Google João Google
/* Dessa forma, o código entende que todo o restante, após a empresa,faz parte de uma array */

/* Spread Operator */
/* const numeroMaior = Math.max(5, 10, 20);
console.log(numeroMaior); */ // 20 -> Dessa forma funciona, porém se nós tivessemos uma array de numeros (O que é mais usado), não funcionaria

// Para resolver isso, devemos usar o operador Spread, como no exemplo abaixo: 

/* const numeros = [50, 2005, 395, 10394, 305059, 9999];
const maiorNumero = Math.max(numeros); */

/* console.log(maiorNumero); // NAN -> Dessa forma, ele retorna NAN e não funciona, para resolver \/

const maiorNumero2 = Math.max(...numeros);
console.log(maiorNumero2); // 305059 -> Assim, ele passa todos os números da array, como no 1º exemplo do Rest Operator */


/* Module
Os módulos servem para quebrarmos o código em diferente arquivos, para facilitar a organização e compartilhamento de código comum.

<!-- Só funciona em servidor, seja local ou online Não irá funcionar se você abrir o html direto -->
<script type="module" src="./script.js"></script>
// quadrado.js
export function areaQuadrado(l) {
  return l * l;
}

export function perimetroQuadrado(l) {
  return 4 * l;
}

// numeroAleatorio.js
export default function numeroAleatorio() {
  return Math.random();
}

// script.js
import { areaQuadrado, perimetroQuadrado } from './quadrado.js';

areaQuadrado(4);
perimetroQuadrado(5);
numeroAleatorio(); */


/* Fetch
Envia requisições assíncronas para o servidor. 
Serve para acessarmos/escrevermos dados em apis externas.
O then serve para realizar algo, caso o fetch dê certo.
O fetch é uma promisse, como no exemplo abaixo, caso o fetch consiga requisitar as informações
Então a response (resposta) irá virar um json, depois loga no console as informações

fetch('https://ranekapi.origamid.dev/wp-json/api/produto')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  }); 
  */
 

/* Async / Await
Fetch retorna uma promisse. 
É possível criarmos funções assíncronas, que irão esperar a promisse resolver, antes de continuar com o código.

async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

fetchProdutos('https://ranekapi.origamid.dev/wp-json/api/produto'); */


/* Arrays (Map e Filter)
Métodos para iterarmos entre os valores de arrays.

const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];

const precosFiltro = precos.filter((preco) => preco.includes('R$'));
// Retorna uma array nova sem modificar a const precos, somente com os items que possuam R$

const precoNumeros = precosFiltro.map((preco) =>
Number(preco.replace('R$ ', '')),
); 
// Retorna uma nova array sem modificar a const precos, somente com os numeros e sem o R$ na frente

*/ 

/* Expressões
const grupoA = 100;
const grupoB = 300;

// Operador Ternário
const vencedor = grupoA > grupoB ? 'Grupo A Venceu' : 'Grupo B Venceu';
// O grupoA é > que o grupoB ? Se sim 'Grupo A Venceu' Se não 'Grupo B Venceu'

const numeros = [2, 3, 4, 5, 6];
const total = numeros.filter((numero) => numero > 4);

const active = true;
const button = active && 'Botão está ativo';
console.log(button) // Botão Está ativo
// Verifica se active é true, se for, ele continua a expressão e retorna 'Botão está Ativo

*/