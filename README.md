## give an example of how to use generics in TypeScript?
Ans: well, generics are used in functions or component where type can vary. Suppose we want to make a function where we dont know the type of an element of an object, there maybe different type of value at different response.
Lets have a look of this function ->  We are adding group science if there is no group in the object.

interface IResult {
    result: string,
    marks: {
        bangla: number,
        english: number,
        math: number,
    },
    group?: string
}
const addGroup = (obj: IResult) : IResult => {
    if('group' in obj){
        obj['group'] = obj.group;
    }else{
        obj['group'] = 'Science';
    }
    return obj;
};

const myResult: IResult = {
    result: 'Pass',
    marks: {
        bangla: 75,
        english: 88,
        math: 82
    },
    group: 'Business'
};
<!-- Now group can be sent as object for other group activity also; Here we need generics -->

// interface IResult {
//     result: string,
//     marks: {
//         bangla: number,
//         english: number,
//         math: number,
//     },
//     group?: string
// }
// const addGroup = (obj: IResult) : IResult => {
//     if('group' in obj){
//         obj['group'] = obj.group;
//     }else{
//         obj['group'] = 'Science';
//     }
//     return obj;
// };

// const myResult = {
//     result: 'Pass',
//     marks: {
//         bangla: 75,
//         english: 88,
//         math: 82
//     },
//     group: 'Arts'
// };

// console.log(addGroup(myResult));

interface IResult<T> {
    result: string,
    marks: {
        bangla: number,
        english: number,
        math: number,
    },
    group?: T
}
const addGroup = <T>(obj: IResult<T>): IResult<T> => {
    if ('group' in obj) {
        obj.group = obj.group as T;
    } else {
        obj.group = 'Science' as T;
    }
    return obj;
};
const myResult: IResult<{ team1: string, mainGroup: string }> = {
    result: 'Pass',
    marks: {
        bangla: 75,
        english: 88,
        math: 82
    },
    group: {
        team1: 'Leader',
        mainGroup: 'Business'
    }
};

console.log(addGroup(myResult));
