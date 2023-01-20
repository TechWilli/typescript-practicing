type Month =
  | "jan"
  | "fev"
  | "mar"
  | "apr"
  | "may"
  | "jun"
  | "jul"
  | "aug"
  | "sep"
  | "oct"
  | "nov"
  | "dev";
type Year = string;

// Capitalize é uma Template Literal Types que deixa a primeira leta em maiúsculo
type yearOfConclusion = `${Capitalize<Month>}/${Year}`; // muito doido isso aqui kkkk

interface Graduations {
  name: string;
  yearOfConclusion: yearOfConclusion;
  duration: number;
}

interface Employee {
  id: number;
  name: string;
  position: string;
  graduations?: Array<Graduations>; // ou Graduations[]
}

type PropsOfEmployee = keyof Employee;

type MyOptionalType<T> = {
  [K in keyof T]?: T[K];
};

type EmployeeOptional = MyOptionalType<Employee>;

const employee: Employee = {
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
const optionalEmployee: EmployeeOptional = {};

// Template Literal Types
type EnvNamesAvailable = "home" | "url" | "login" | "password";

type EnvPattern<EnvName extends string> = `$ENV_${Uppercase<EnvName>}`;

const urlEnvNameFormatted: EnvPattern<EnvNamesAvailable> = "$ENV_URL";

type KeyboardLetterLiteral<Letter extends string> = `KEY-${Uppercase<Letter>}`;

// forma alternativa de fazer sem o extends
// type KeyboardLetterLiteral<Letter> = `KEY-${Uppercase<string && Letter>}`;

const myKeyboardLetter: KeyboardLetterLiteral<"w"> = "KEY-W";

type Lang = "pt" | "en";

interface Region {
  pt: "BR" | "PT";
  en: "US" | "CA";
}

type PickLocale<Lang extends keyof Region> = `${Lang}-${Region[Lang]}`;

const ptBR: PickLocale<"pt"> = "pt-BR";
const enUS: PickLocale<"en"> = "en-US";

/**
 * Países que falam Português.
 *
 * @remarks
 * `BR: Brasil` | `PT: Portugal` | `ST: São Tomé e Príncipe` | `AO: Angola` | `CV: Cabo Verde` | `GW: Guiné-Bissau` | `GQ: Guiné Equatorial` | `MZ: Moçambique` | `TL: Timor-Leste`
 */
type PtRegions = "BR" | "PT" | "ST" | "AO" | "CV" | "GW" | "GQ" | "MZ" | "TL";

// Exclude remove props desejadas de uma union
type PtRegionsWithoutBrazilAndPortugal = Exclude<PtRegions, "BR" | "PT">;

// Exclude pega apebas as props desejadas da uma union
type PtRegionsOnlyWithBrazilAndPortugal = Extract<PtRegions, "BR" | "PT">;

type PickPortugueseLanguage = `pt-${PtRegions}`;

const brasilLanguage: PickPortugueseLanguage = "pt-BR";

interface SmartPhone {
  brand: string;
  price: string;
  color: string;
  resolution: `${string}x${string}px`;
  weight: `${string}g`;
}

type SmartPhonePhisicalFeatures = Omit<SmartPhone, "brand" | "price">;

const myMotorola: SmartPhonePhisicalFeatures = {
  color: "",
  resolution: "1920x1080px",
  weight: "189g",
};

// tira todos os optionals das props (por causa do - antes do ?)
type AllPropsRequired<T> = {
  [P in keyof T]-?: T[P];
};

// deixa todas as props opcionais (por causa do ?)
type AllPropsOptional<T> = {
  [P in keyof T]?: T[P];
};

// deixa todas as props readonly (por causa do readonly)
type AllPropsReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// tira todos os readonly todas das props (por causa do - antes do readonly)
type AllPropsChangeable<T> = {
  -readonly [P in keyof T]: T[P];
};

interface IPerson {
  name?: string;
  age?: number;
}

const personWilliam: AllPropsReadonly<IPerson> = {
  name: "William",
  age: 23,
};

// personWilliam.name = "Wesley"; // não podo pq é readonly "Cannot assign to 'name' because it is a read-only property"

// Criando um type que faz a prop desejada required
// o segredo etsá na interseção que vai retornar o T e sobrescrever o mesmo com o que está dentro do {} a seguir
// OBS.: VC PODE TIRAR O REQUIRED DAS PROPS, MAS NÃO COLOCAR dessa forma :(
type PropRequired<T, K extends keyof T> = T & {
  [P in K]-?: T[P];
};

// outra forma de fazer, talvez mais legível
type PropRequiredAlternative<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

interface InterfaceWithPropsRequired {
  prop1?: string;
  prop2?: string;
  prop3?: string;
}

const props: PropRequired<InterfaceWithPropsRequired, "prop2"> = {
  prop2: "value",
};

// deixando uma prop específica opcional.
type PropOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

interface PropsRequired {
  property1: string;
  property2: string;
  property3: string;
}

const properties: PropOptional<PropsRequired, "property2"> = {
  property1: "value",
  property3: "value",
};

interface User {
  name: string;
  age: number;
  id: number;
}

// tipagem para padronizar nomes de propriedades
type PrefixProps<T, Prefix extends string> = {
  // string & P -> é necessário a interseção de string e o tipo genérico passado, para poder ser aceito dentro do template literal
  [P in keyof T as `${Prefix}_${string & P}`]: T[P];
};

const testUserPrefix: PrefixProps<User, "user"> = {
  user_name: "",
  user_age: 0,
  user_id: 0,
};

type Getters<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: T[P];
};

type Setters<T> = {
  [P in keyof T as `set${Capitalize<string & P>}`]: T[P];
};

const userGetters: Getters<User> = {
  getName: "",
  getAge: 0,
  getId: 0,
};

const userSetters: Setters<User> = {
  setName: "",
  setAge: 0,
  setId: 0,
};

// resolvendo problema de overload com Conditional Types
// podemos obter o mesmo resultado dos overloads com tipagem condiciona, da seguinter forma:

interface Cat {
  meow(): string;
}

interface Dog {
  bark(): string;
}

const cat: Cat = {
  meow() {
    return "Meow";
  },
};

const dog: Dog = {
  bark() {
    return "Au";
  },
};

// overload approach
function catOrDog(animal: Cat): Cat;
function catOrDog(animal: Dog): Dog;
function catOrDog(animal: Cat | Dog): Cat | Dog {
  return animal;
}

// let animalReturned = catOrDog(cat); // tipo Gato
// let secondAnimalReturned = catOrDog(dog); // tipo Dog

// conditional type approach
type CatOrDogReturn<T extends Cat | Dog> = T extends Cat ? Cat : Dog;

function catOrDogByCondition<T extends Cat | Dog>(
  animal: T
): CatOrDogReturn<T> {
  return animal as unknown as CatOrDogReturn<T>;
}

let animalReturned = catOrDogByCondition(cat); // tipo Gato
let secondAnimalReturned = catOrDogByCondition(dog); // tipo Dog
