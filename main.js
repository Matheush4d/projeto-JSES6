//arrow functions com o return e function implicito
log('teste');

var log = value => {
    console.log(value);
}

//declarando objetos com o arrow function

var obj ={
    showContext: function showContext(){
        //this = obj
        setTimeout(() => {
            this.log('after 1000ms')
        }, 1000);
    },
    log: function log(value) {
        console.log(value)
    }
}
// não pode criar funções construtoras usando arrow functions

// dando valor a paramentros ou quando faltam
// se esquecer de declarar o valo no console.log é so atribuir o valor do parametro dentro do function
// lazy evaluation para usar numeros randomicos
function randomNumber(){
    console.log('Generating a random number...')
    return Math.random()*10;
}

function multiply (a, b= randomNumber()){
    return a*b;
}
console.log(multiply(5))
console.log(multiply(5))


// propriedade computada diretamente no objeto

var propName ='test';
var obj = {
    [propName + 'concat']: 'prop value'
};
console.log(obj);


// rest operator , spread operator ...
// spread ==> pode ser usando em strings, arrays, literal objects e objetos iteraveis
 



     //const sum = (a,b, ...rest) => {


const multiply =(...args) => args.reduce((acc,value) => acc*value, 1)
const sum =(...rest) => {
   return multiply(...rest);
}

console.log(sum(5,5,5,2,3));

//spread com string

const str ='Digital Innovation One';

function logArgs(...args){
    console.log(args);
}
logArgs(...str);

//spread com array
const arr = [1,2,3,4];
function logArgs() {
    console.log(arguments);
}
//criar um array em outro array
const arr2 =[...arr2,5,6,7];

console.log(arr2);

// spread com literal objects => so pode usar para criar novos objetos
 const obj = {
     test: 123
 };
 const obj2={
     ...obj,
     test2: 'hello'
 };
 console.log(obj2);

 // Sem Destructuring Assignment
 var arr = ['Apple','Banana','Orange'];
 var apple = arr[0]
 var banana = arr[1]
 var orange = arr[2]

 // Com Destructuring Assigment

 var [apple2,banana2,oragen2] = ['Apple','Banana','Orange'];
console.log(apple, apple2);

// Destructuring Assigment

var obj ={
    name: 'Matheus'
};
var {name} = obj;
console.log(name);
// usa-se o Destructuring Assigment quando for definir variaveis e tambem numa lista de argumentos de funções

function sum([a,b] = [] ){
   return a+ b;
}
console.log(sum([5,5]));


// Symbols ====> são indentificadores unicos, nunca sao iguais

const uniqueID = Symbol();

console.log(uniqueID)

// Well known symbols ====> serve para dar propriedades ao objeto

Symbol.iterator

const arr =[1,2,3,4];


console.log(arr[Symbol.iterator]().next());
//
const obj={
    values: [1,2,3,4,],
    [Symbol.iterator](){
        let i=0;
        return {
            next: () => {
                return {
                    value: this.values[i - 1],
                    done: i>this.values.length
                }
            }
        }
}
}

const it = obj [Symbol.iterator]()
console.log(it.netx())
console.log(it.netx())
console.log(it.netx())
console.log(it.netx())
console.log(it.netx())


// Generators =====> são funções com pausas, que podem retomar valores

function* hello(){
    console.log('Hello');
 yield 1;
    console.log('From');
yield 2;
    console.log('Function');

}
const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next());

// Generators pode ser usado para moldar objetos em interaveis

const obj= {
    values: [1,2,3,4],
    *[Symbol.iterator](){
        for (var i =0; i< this.values.length; i++){
            yield this.values[i]; }
    }
};
for (let value of objt){
    console.log(value);
}


// Promises

const doSomethingPromise =() =>
new Promise ((resolve, reject) => {
    setTimeout (function() {
        //did something
        resolve ('First data');

    }, 1000);
});

const doOtherThingPromise =() =>
new Promise ((resolve, reject) => {
    setTimeout (function() {
        //did something
        resolve ('Second data');

    }, 1000);
});

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}) .catch(err => { //tratamento de erro

});

// Fetch

fetch('/data.json')
.then(responseStream => responseStream.json())
.then(data => {
    console.log(data);
}) .catch(err =>{ //se tiver erro de red ele sera pego no catch
console.log('Erro:', err);
});


// ES7 - Async / Await ======> transforma a função em uma promise


const asyncTimer = () =>
new Promise ((resolve, reject) => {
    setTimeout (() => {
        resolve(12345);
    }, 1000);
});

const simpleFunc = async () =>{
    const data = await Promise.all({asyncTimer().fetch('/data.json') .then(resStream => resStream.json())})
    return data;
    
};


// EventEmitter =======> programação assicrona

const EventEmitter = require('events');
class Users extends EventEmitter {
    usaerLogged(data){
        this.emite('User Logged', data);
    }
}
const users = new Users();

emitter.on('User logged', data=> {
    console.log(data);

});
users.userLogged({user: 'Matheus Freitas'});


// TESTES
//Testes automatizados
//testes unitários; são testes de pequenos portes
//testes integrados; testao pequenos codigos em conjuto, para ver como se comportam juntos
//testes funcionais; testa o código de ponta a ponta, para ver a sua funcionalidade

// TESTES manuais e automatizados

//testes usabilidade;
//testes de aceitação do usuario;
//protótipos;
//testes funcionais;
//exemplos;
//alpha e beta;
//mais...


// FERRAMENTAS DE TESTE
//teste de caraga e perfomance;
//testes de segurança



// TDD (TEST DRIVEN DEVELOPMENT)

// É um dos pilares do Extreme Programing, conbsiste em testar e refatorar em pequenos ciclos,
//onde você escreve o teste antes do código, faz o mesmo passar e refatora o código.

// Escrita do teste =>>> Escrita do código =>>> Refatoração

// VANTAGENS

//Feedaback rápido
//Maior segurança em alterções e novas funcionalidades
//código mais limpo
//produtividade


// BDD (BEHAVIOR DRIVEN DEVELOPMENT)
// Técnica de desenvolvimento ágil que visa integrar regras de negócio com linguagem de programação

//Pilares
//testes;
//documentação;
//exemplos;

//Vantagens
//Compartilhamento de conhecimento
//documentação dinâmica
//visão de todo


//      *** COMO IDENTIFICAR ERROS ***

// é usado o try catch para observar onde o erro está sendo aplicado

// Além de strings na classe de erro, pode estendela

class CustomError extends Error {
    constructor({message, data}) {
        super(message);
        this.data =data;
    }
}

try {
    console.log(name);
    const name ='Matheus Freitas';
const myError = new CustomError ({
    message: 'Custom message on custtom error',
    data: {
        type: 'Server error'
    }
}); // também pode instanciar o erro e tratalo apartir disso
throw myError;
} catch (err) {
    console.log(err.data);
    console.log(err); // quando o erro é tratado pelo try e catch ele segue normalmente
} finally{

console.log('Keep going...'); 
}

// ***** --- Debugging ---- *****
// diretamente no navegador da apra checar defeitos no código
// breakpoint para exatamente na linha de erro e é possivel modificalo pelo proprio navegador

debugger; // o chrome já para exatamente onde está o erro, é uma outra forma de breakpoint

// Console e suas variações

//console.log('Black text');
//console.warn('Yellow text with alert');
//console.error('Red error text');

//console.trace() onde ta sendo executado o código

/*
console.group('My group');
console.log('Info inside group');
console.log('More info inside group');
console.groupEnd('My group')
*/

/*
console.time('Log time');;
setTimeout(() => {
    console.timeEnd('Log time'); });
*/

// console.table(['Matheus Freitas', 'Dropingg']);
//console.assert(1 === 0, 'Ops'); vai esperar ser verdadeiro para executar
// console.log('%c styled log','color: blue','font-size: 1px');