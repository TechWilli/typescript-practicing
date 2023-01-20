declare class MyIterable<T> {
    private _value;
    constructor(iterableValue: T[]);
    get value(): T[];
    set value(value: T[]);
    myForEach(callbackFn: (value: T, index?: number, array?: T[]) => void): void;
    myMap<U>(callbackFn: (value: T, index?: number, array?: T[]) => U): U[];
    myFilter(predicateCallbackFn: (value: T, index?: number, array?: T[]) => boolean): T[];
    myReduce(callbackFn: (previousValue: T, currentValue: T, index?: number, array?: T[]) => T): T;
    myReduce(callbackFn: (previousValue: T, currentValue: T, index?: number, array?: T[]) => T, initialValue: T): T;
    myReduce<U>(callbackFn: (previousValue: U, currentValue: T, index?: number, array?: T[]) => U, initialValue: U): U;
}
declare function MyIterableFactory<T>(value: T[]): MyIterable<T>;
declare const friends: MyIterable<string>;
interface FriendsMapped {
    name: string;
    index?: number;
    upperCaseName: string;
}
declare const friendsMapped: {
    index: number | undefined;
    name: string;
    upperCaseName: string;
}[];
declare const friendsStartsWithLetterM: string[];
declare const url: URL;
declare const paramsToSet: {
    urlIssuer: string;
    teste: string;
    otherParam: string;
};
