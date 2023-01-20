interface Developer {
    name: string;
    company: string;
    level: DevLevel;
}
declare type DevLevel = "Júnior" | "Pleno" | "Sênior";
declare const developer: Developer;
declare const myDeveloperLevel: DevLevel;
declare class Person {
    name: string;
    constructor(name: string);
    speak(): void;
}
declare class Pet {
    name: string;
    constructor(name: string);
    play(): void;
}
declare function interact(thing: Person | Pet | unknown): void;
declare const person: Person;
declare const pet: Pet;
declare const linkGotById: HTMLElement | null;
declare const linkGotByQuerySelector: Element | null;
declare const textos: NodeListOf<Element>;
declare const textosPtag: Element[];
declare function getDataUsingGenericsWithFunction<T>(url: string): Promise<T>;
declare const getDataUsingGenericsWithArrow: <T>(url: string) => Promise<T>;
declare const getDataUsingGenericsWithAssertionAndArrow: <T>(url: string) => Promise<T>;
interface Notebook {
    nome: string;
    preco: number;
    garantia: string;
    descricao: string;
}
declare function getDataFromStorage<T>(key: string): T | null;
interface MyObject {
    one: number;
    two: number;
    a: string;
    b: string;
}
declare const complexObject: MyObject;
declare const nameFromStorage: string | null;
declare const ageFromStorage: number | null;
declare const objectFromStorage: MyObject | null;
declare function roundToCeil(value: number | string): number | string;
declare const numberRounded: string | number;
declare const stringRounded: string | number;
declare function roundToCeilOverloaded(value: number): number;
declare function roundToCeilOverloaded(value: string): string;
declare const numberRoundedOverload: number;
declare const stringRoundedOverload: string;
declare function convertToUpperCase(value: string): string;
declare function convertToUpperCase(value: string[]): string[];
declare const fruits: string[];
declare function isString(arg: unknown): arg is string;
declare const myString: unknown;
declare function isNumber(arg: unknown): arg is number;
declare const myNumber: unknown;
interface Smarthphone {
    brand: string;
    releaseYear: number;
}
declare const mySmartphone: unknown;
declare function isSmarthphone(arg: any): arg is Smarthphone;
interface Alphabet {
    a: "A";
    b: "B";
    c: "C";
    d: "D";
    e: "E";
    type: "Alphabet";
}
declare const myAlpgabet: unknown;
declare const myAlpgabet2: unknown;
declare function isAlphabet(arg: any): arg is Alphabet;
declare class TypeGuard {
    static isString(arg: any): arg is string;
    static isNumber(arg: any): arg is number;
}
declare function getSmallerOrGreaterNumber(option: "smaller" | "greater", ...numbers: number[]): number;
