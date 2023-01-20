"use strict";
// treinos e práticas TypeScript
// ===================================================
console.log("\x1b[1m\x1b[33m%s", "Hello TypeScript!");
const developer = {
    name: "William",
    company: "Accenture",
    level: "Pleno",
};
const myDeveloperLevel = "Pleno";
console.log("Hello, I am a developer:");
console.table(developer);
// testando a verficação do instanceof para saber se determinada variável é instância de uma função construtora (classe) definida
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`Hi, my name is ${this.name} and I speak!`);
    }
}
class Pet {
    name;
    constructor(name) {
        this.name = name;
    }
    play() {
        console.log(`The pet ${this.name} is playing with its owner.`);
    }
}
function interact(thing) {
    if (thing instanceof Person) {
        console.log("Person.name", thing.name);
        thing.speak();
    }
    else if (thing instanceof Pet) {
        console.log("Pet.name", thing.name);
        thing.play();
    }
    else {
        throw new Error("Error. The thing is not neither a Person nor a Pet");
    }
}
const person = new Person("William");
const pet = new Pet("Vicky");
interact(person);
interact(pet);
// interact("something");
// linkGotById aqui é um HTMLElement | null, pois o TS não sabe ainda que ele é um HTMLAnchorElement
const linkGotById = document.getElementById("my-link");
// aqui retorna Element | null pois o id que eu selecionei pode ter sido atribuído a qualquer outro elemento
const linkGotByQuerySelector = document.querySelector("#my-link");
// retorna no console <a href="https://origamid.com" target="_blank" id="my-link">Site Origamid</a>
console.log(linkGotById);
// retorna no console o objeto da tag que queremos acessar como a#my-link e todas as suas props e mótodos
console.dir(linkGotById);
if (linkGotById instanceof HTMLAnchorElement) {
    console.log("link.href property exists and the editor suggests it:", linkGotById.href);
}
const textos = document.querySelectorAll(".texto");
console.log("textos instanceof NodeList", textos instanceof NodeList); // true
console.log(textos);
// Importante lembrar que NodeList não é um array, apesar de possuir o método forEach
// filtrando apenas as tags com classe "texto" que são tags "p"
const textosPtag = Array.from(textos).filter((texto) => texto instanceof HTMLParagraphElement);
console.log("apenas textos da tag p", textosPtag);
// usando Generics para retornar fazer a tipagem de dados vindos de requests
// forma declarando com function:
async function getDataUsingGenericsWithFunction(url) {
    const response = await fetch(url);
    return await response.json();
}
// forma 1:
const getDataUsingGenericsWithArrow = async (url) => {
    const response = await fetch(url);
    return await response.json();
};
// forma 2:
const getDataUsingGenericsWithAssertionAndArrow = async (url) => {
    const response = await fetch(url);
    return (await response.json());
};
(async () => {
    // passando o tipo genérico na chamada da função
    // agora a variável que recebeu o retorno da função está tipada e tem os autocompletes do objeto corretamente
    const myNotebooksA = await getDataUsingGenericsWithFunction("https://api.origamid.dev/json/notebook.json");
    const myNotebooksB = await getDataUsingGenericsWithArrow("https://api.origamid.dev/json/notebook.json");
    const myNotebooksC = await getDataUsingGenericsWithAssertionAndArrow("https://api.origamid.dev/json/notebook.json");
})();
function getDataFromStorage(key) {
    const value = localStorage.getItem(key);
    if (value) {
        const retrievedValueParsed = JSON.parse(value);
        return retrievedValueParsed;
    }
    return null;
}
localStorage.setItem("name", JSON.stringify("William"));
localStorage.setItem("age", JSON.stringify(23));
const complexObject = {
    one: 1,
    two: 2,
    a: "a",
    b: "b",
};
localStorage.setItem("complexObject", JSON.stringify(complexObject));
const nameFromStorage = getDataFromStorage("name");
const ageFromStorage = getDataFromStorage("age");
const objectFromStorage = getDataFromStorage("complexObject");
console.log("values from storage", { nameFromStorage, ageFromStorage });
console.log("object from storage", objectFromStorage);
// Overload de funções
// usado para mapear vários casos de parâmetros de uma função e seus retornos, devolvendo assim o tipo correto da mesma
// exemplo:
// uma função que arredonda numeros ou string para cima
function roundToCeil(value) {
    // type guard aqui
    if (typeof value === "number") {
        return Math.ceil(value);
    }
    else {
        const stringConvertedToNumber = Number(value);
        return Math.ceil(stringConvertedToNumber).toString(); // para retornar o valor arredondado como string ainda
    }
}
// o problema agora é que a variável recebe o tipo number | string, então não sabemos os métodos de cada tipo
// depois do "." é apenas mostrado o método em comum de todos os objetos: toLocaleString, toString e valueOf
const numberRounded = roundToCeil(5.1);
const stringRounded = roundToCeil("15.5");
function roundToCeilOverloaded(value) {
    // type guard aqui
    if (typeof value === "number") {
        return Math.ceil(value);
    }
    else {
        const stringConvertedToNumber = Number(value);
        return Math.ceil(stringConvertedToNumber).toString();
    }
}
// agora sim, os retornos identificam cada caso e os métodos de number e string estão em seus respectivos casos
const numberRoundedOverload = roundToCeilOverloaded(5.1);
const stringRoundedOverload = roundToCeilOverloaded("15.5");
function convertToUpperCase(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value.map((text) => text.toUpperCase());
}
console.log("convertToUpperCase", convertToUpperCase("william"));
console.log("convertToUpperCase", convertToUpperCase(["william", "amanda"]));
// type guard para array, temos formas mais confiáveis de fazer
const fruits = ["apple", "pear", "pineapple", "strawberry"];
if (fruits instanceof Array) {
    console.log("array de frutas - fruits instanceof Array");
}
/* esse é um caso de type predicate, o método isArray é "(method) ArrayConstructor.isArray(arg: any): arg is any[]"
o "is" no tipo de retorno da função faz a mágica dizendo o que a verificação retornada deve satisfazer
o TypeScript nao executa as funções de JS criadas na hora, por isso para este caso tem a anotação de type predicta
para o TS validar e deixar a construção do código seguir conforme o tipo do dado
*/
if (Array.isArray(fruits)) {
    console.log("array de frutas - Array.isArray(fruits)");
}
// criando um type predicate para number, array e algum outro objeto e classe personalizados (ajuda demais a não ficar colocando ifs e mais ifs)
// explicações boas neste link também: https://bobbyhadz.com/blog/typescript-check-if-object-implements-interface#:~:text=Use%20a%20user-defined%20type,and%20returns%20a%20type%20predicate.
function isString(arg) {
    return typeof arg === "string";
}
const myString = "will type predicate isString";
if (isString(myString)) {
    // se o retorno da função isString não tivesse "arg is string", mostraria a mensagem "Object is of type 'unknown'" nao variável myString
    console.log(myString.toUpperCase());
}
function isNumber(arg) {
    return typeof arg === "number";
}
const myNumber = 100;
if (isNumber(myNumber)) {
    console.log(myNumber.toFixed());
}
const mySmartphone = {
    brand: "Motorola",
    releaseYear: 2018,
};
// criando uma validação para um objeto personalizado criado por mim
// neste caso não conseguimos passar o type unknown, pois o TS irá reclamar
function isSmarthphone(arg) {
    // para não dar erro de runtime caso passe um número ou string e o TS tentar acessar props deles, validamos tbm se o valor é verdadeiro e é do tipo objeto
    // sem essa verificação, se passasse 'blabla' por exemplo, o erro seria Uncaught TypeError: Cannot use 'in' operator to search for 'brand' in 'blabla'
    return arg && typeof arg === "object" && "brand" in arg && "releaseYear" in arg;
}
// não deixa eu acessar as props do meu objeto criado pois acusa "Object is of type 'unknown'"
// mySmartphone.brand;
/* passando agora o objeto anotado como unknown, a validação do type predicate
quando assume que é true (ou seja, é do tipo Smartphone) conseguimos acessar
as props do objeto corretamente no autocomplete */
if (isSmarthphone(mySmartphone)) {
    console.log("é um smartphone");
    console.log(mySmartphone.brand);
    console.log(mySmartphone.releaseYear);
}
const myAlpgabet = {
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    e: "E",
    type: "Alphabet",
};
const myAlpgabet2 = {
    a: "A",
};
function isAlphabet(arg) {
    return arg && typeof arg === "object" && "type" in arg && arg.type === "Alphabet";
}
if (isAlphabet(myAlpgabet)) {
    console.log("é um alfabeto");
    console.log(myAlpgabet.a);
    console.log(myAlpgabet.type);
}
// não entra no if
if (isAlphabet(myAlpgabet2)) {
    console.log("é um alfabeto 2");
}
// uma ideia boa é ter um arquivo de utils com uma classe contendo metodos estáticos que validam esses type guard
// ficaria tudo isolado e concentrado, para melhor manutenção e uso no código
class TypeGuard {
    static isString(arg) {
        return typeof arg === "string";
    }
    static isNumber(arg) {
        return typeof arg === "number";
    }
}
if (TypeGuard.isString("will")) {
    console.log("é uma string type guard custom");
}
if (TypeGuard.isNumber(1.5)) {
    console.log("é um number type guard custom");
}
if (TypeGuard.isNumber("5")) {
    console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH!!!!!");
}
// função que retorna o menor ou maior número dentre os argumentos passados
function getSmallerOrGreaterNumber(option, ...numbers) {
    console.log(numbers);
    if (option === "smaller") {
        return Math.min(...numbers);
    }
    else {
        return Math.max(...numbers);
    }
}
console.log("maior", getSmallerOrGreaterNumber("greater", 1, 5, 10, 40));
console.log("menor", getSmallerOrGreaterNumber("smaller", 1, 5, 10, 40));
//# sourceMappingURL=script.js.map