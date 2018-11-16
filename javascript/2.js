function promiseReduce(functionsReturningPromise, reduceFunction, initialValue) {
    return new Promise((resolve) => {
        let result = initialValue;
        let unresolvedPromisesCount = functionsReturningPromise.length;
        functionsReturningPromise.forEach(func => {
            func().then(promiseResult => {
                result = reduceFunction(result, promiseResult);
                unresolvedPromisesCount--;
                if(!unresolvedPromisesCount) resolve(result);
            });
        });
        return result;
    });
}

let fn1 = () => Promise.resolve(1);
let fn2 = () => Promise.resolve(2);
let fn3 = () => Promise.resolve(3);
let reduce = (a, b) => a + b;
promiseReduce([fn1,fn2,fn3], reduce, 0)
    .then(console.log);