"use strict";
const employee = {
    id: 1,
    name: "William",
    position: "Software Developer",
    graduations: [
        {
            name: "Análise e Desenvolvimento de Sistemas",
            duration: 3,
            yearOfConclusion: "Fev/2021",
        },
    ],
};
// como tudo ficou opcional agora, não precisamos preencher nenhuma prop
const optionalEmployee = {};
const urlEnvNameFormatted = "$ENV_URL";
// forma alternativa de fazer sem o extends
// type KeyboardLetterLiteral<Letter> = `KEY-${Uppercase<string && Letter>}`;
const myKeyboardLetter = "KEY-W";
const ptBR = "pt-BR";
const enUS = "en-US";
const brasilLanguage = "pt-BR";
const myMotorola = {
    color: "",
    resolution: "1920x1080px",
    weight: "189g",
};
const personWilliam = {
    name: "William",
    age: 23,
};
const props = {
    prop2: "value",
};
const properties = {
    property1: "value",
    property3: "value",
};
const testUserPrefix = {
    user_name: "",
    user_age: 0,
    user_id: 0,
};
const userGetters = {
    getName: "",
    getAge: 0,
    getId: 0,
};
const userSetters = {
    setName: "",
    setAge: 0,
    setId: 0,
};
const cat = {
    meow() {
        return "Meow";
    },
};
const dog = {
    bark() {
        return "Au";
    },
};
function catOrDog(animal) {
    return animal;
}
function catOrDogByCondition(animal) {
    return animal;
}
let animalReturned = catOrDogByCondition(cat); // tipo Gato
let secondAnimalReturned = catOrDogByCondition(dog); // tipo Dog
//# sourceMappingURL=index.js.map