"use strict";
class MyIterable {
    _value;
    constructor(iterableValue) {
        this._value = iterableValue;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    myForEach(callbackFn) {
        for (let i = 0; i < this._value.length; i++) {
            callbackFn(this._value[i], i, this._value);
        }
    }
    myMap(callbackFn) {
        const mappedValue = [];
        for (let i = 0; i < this._value.length; i++) {
            mappedValue.push(callbackFn(this._value[i], i, this._value));
        }
        return mappedValue;
    }
    myFilter(predicateCallbackFn) {
        const filteredValues = [];
        for (let i = 0; i < this._value.length; i++) {
            if (predicateCallbackFn(this._value[i], i, this._value)) {
                filteredValues.push(this._value[i]);
            }
        }
        return filteredValues;
    }
    myReduce(callbackFn, initialValue) {
        if (this._value.length === 0) {
            throw new TypeError("O método reduce não pode ser executado em um arry vazio!");
        }
        let prevValue;
        let reducedValue = this._value[0];
        const initialCount = initialValue ? 0 : 1;
        for (let i = initialCount; i < this._value.length; i++) {
            prevValue = i === 0 && initialValue ? initialValue : reducedValue;
            reducedValue = callbackFn(prevValue, this._value[i], i, this._value);
        }
        return reducedValue;
    }
}
function MyIterableFactory(value) {
    return new MyIterable(value);
}
const friends = MyIterableFactory(["will", "manda", "mel"]);
console.log("friends.value", friends.value);
friends.myForEach((friend, index) => {
    console.log("index =>", index, "friend =>", friend.toUpperCase());
});
const friendsMapped = friends.myMap((friend, index) => {
    return {
        index,
        name: friend,
        upperCaseName: friend.toLocaleUpperCase(),
    };
});
console.log("friendsMapped map", friendsMapped);
// poderia realizar o map assim também para a tipagem da variável friendsMapped ser FriendsMapped:
// const friendsMapped = friends.myMap((friend, index) => {
//   return {
//     index,
//     name: friend,
//     upperCaseName: friend.toLocaleUpperCase(),
//   } as FriendsMapped;
// });
// ou assim:
// const friendsMapped = friends.myMap<FriendsMapped>((friend, index) => {
//   return {
//     index,
//     name: friend,
//     upperCaseName: friend.toLocaleUpperCase(),
//   };
// });
const friendsStartsWithLetterM = friends.myFilter((friend) => {
    return friend.startsWith("m");
});
console.log("friendsFiltered filter", friendsStartsWithLetterM);
// friends.value = [];
console.log("myReducedFriends result >>", friends.myReduce((prevValue, currentValue, index) => {
    console.log("prevValue", prevValue);
    console.log("currentValue", currentValue);
    // console.log("index", index);
    // return (prevValue += " - " + currentValue);
    return {
        ...prevValue,
        [currentValue]: currentValue,
    };
}, {}));
// brincando com url search params
const url = new URL(`http://127.0.0.1:5500/index.html?code=1234-5678-9101`);
const paramsToSet = {
    urlIssuer: "https://teste-teste.com/token",
    teste: "teste-âncora",
    otherParam: "other",
};
url.searchParams.set("urlIssuer", paramsToSet.urlIssuer);
console.log("url", url);
console.log("url.toString", url.toString());
//# sourceMappingURL=index.js.map