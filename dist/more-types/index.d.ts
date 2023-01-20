declare type Month = "jan" | "fev" | "mar" | "apr" | "may" | "jun" | "jul" | "aug" | "sep" | "oct" | "nov" | "dev";
declare type Year = string;
declare type yearOfConclusion = `${Capitalize<Month>}/${Year}`;
interface Graduations {
    name: string;
    yearOfConclusion: yearOfConclusion;
    duration: number;
}
interface Employee {
    id: number;
    name: string;
    position: string;
    graduations?: Array<Graduations>;
}
declare type PropsOfEmployee = keyof Employee;
declare type MyOptionalType<T> = {
    [K in keyof T]?: T[K];
};
declare type EmployeeOptional = MyOptionalType<Employee>;
declare const employee: Employee;
declare const optionalEmployee: EmployeeOptional;
declare type EnvNamesAvailable = "home" | "url" | "login" | "password";
declare type EnvPattern<EnvName extends string> = `$ENV_${Uppercase<EnvName>}`;
declare const urlEnvNameFormatted: EnvPattern<EnvNamesAvailable>;
declare type KeyboardLetterLiteral<Letter extends string> = `KEY-${Uppercase<Letter>}`;
declare const myKeyboardLetter: KeyboardLetterLiteral<"w">;
declare type Lang = "pt" | "en";
interface Region {
    pt: "BR" | "PT";
    en: "US" | "CA";
}
declare type PickLocale<Lang extends keyof Region> = `${Lang}-${Region[Lang]}`;
declare const ptBR: PickLocale<"pt">;
declare const enUS: PickLocale<"en">;
/**
 * Países que falam Português.
 *
 * @remarks
 * `BR: Brasil` | `PT: Portugal` | `ST: São Tomé e Príncipe` | `AO: Angola` | `CV: Cabo Verde` | `GW: Guiné-Bissau` | `GQ: Guiné Equatorial` | `MZ: Moçambique` | `TL: Timor-Leste`
 */
declare type PtRegions = "BR" | "PT" | "ST" | "AO" | "CV" | "GW" | "GQ" | "MZ" | "TL";
declare type PtRegionsWithoutBrazilAndPortugal = Exclude<PtRegions, "BR" | "PT">;
declare type PtRegionsOnlyWithBrazilAndPortugal = Extract<PtRegions, "BR" | "PT">;
declare type PickPortugueseLanguage = `pt-${PtRegions}`;
declare const brasilLanguage: PickPortugueseLanguage;
interface SmartPhone {
    brand: string;
    price: string;
    color: string;
    resolution: `${string}x${string}px`;
    weight: `${string}g`;
}
declare type SmartPhonePhisicalFeatures = Omit<SmartPhone, "brand" | "price">;
declare const myMotorola: SmartPhonePhisicalFeatures;
declare type AllPropsRequired<T> = {
    [P in keyof T]-?: T[P];
};
declare type AllPropsOptional<T> = {
    [P in keyof T]?: T[P];
};
declare type AllPropsReadonly<T> = {
    readonly [P in keyof T]: T[P];
};
declare type AllPropsChangeable<T> = {
    -readonly [P in keyof T]: T[P];
};
interface IPerson {
    name?: string;
    age?: number;
}
declare const personWilliam: AllPropsReadonly<IPerson>;
declare type PropRequired<T, K extends keyof T> = T & {
    [P in K]-?: T[P];
};
declare type PropRequiredAlternative<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
interface InterfaceWithPropsRequired {
    prop1?: string;
    prop2?: string;
    prop3?: string;
}
declare const props: PropRequired<InterfaceWithPropsRequired, "prop2">;
declare type PropOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
interface PropsRequired {
    property1: string;
    property2: string;
    property3: string;
}
declare const properties: PropOptional<PropsRequired, "property2">;
interface User {
    name: string;
    age: number;
    id: number;
}
declare type PrefixProps<T, Prefix extends string> = {
    [P in keyof T as `${Prefix}_${string & P}`]: T[P];
};
declare const testUserPrefix: PrefixProps<User, "user">;
declare type Getters<T> = {
    [P in keyof T as `get${Capitalize<string & P>}`]: T[P];
};
declare type Setters<T> = {
    [P in keyof T as `set${Capitalize<string & P>}`]: T[P];
};
declare const userGetters: Getters<User>;
declare const userSetters: Setters<User>;
interface Cat {
    meow(): string;
}
interface Dog {
    bark(): string;
}
declare const cat: Cat;
declare const dog: Dog;
declare function catOrDog(animal: Cat): Cat;
declare function catOrDog(animal: Dog): Dog;
declare type CatOrDogReturn<T extends Cat | Dog> = T extends Cat ? Cat : Dog;
declare function catOrDogByCondition<T extends Cat | Dog>(animal: T): CatOrDogReturn<T>;
declare let animalReturned: Cat;
declare let secondAnimalReturned: Dog;
