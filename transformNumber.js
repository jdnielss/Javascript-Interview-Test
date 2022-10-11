const resolveWithDelay = (result) => new Promise(resolve => setTimeout(() => resolve(result), 1000));
const rejectWithDelay = (msg) => new Promise((resolve, reject) => setTimeout(() => reject(msg), 1000));

// get random number from 1 to 20
const getSampleCount = async () => resolveWithDelay(Math.floor((Math.random() * 20) + 1));

// get random number from 0 to 100
const getRandomOrigin = async () => resolveWithDelay(Math.floor(Math.random() * 100));

// get function to transform number
const getTransformFn = async (number) => {
    const square = (n) => n * n;
    const makeTwice = (n) => n * 2;

    if (number === 0) {
        return rejectWithDelay('Error')
    }

    return resolveWithDelay(number % 2 === 0 ? square : makeTwice);
}

/**
 * INTRUCTIONS:
 * get sample count (N) using getSampleCount, then create list of N user
 * each user has ID (use index), originNumber (from getRandomOrigin), and 
 * transformedNumber (using getTransformFn and originNumber value)
 * for example: getSampleCount return 2, first user has originNumber 3, second user has originNumber 4
 * then thsi function should return:
 * [
 *   { id: 0, originNumber: 3, transformedNumber: 6 },
 *   { id: 1, originNumber: 4, transformedNumber: 16 }
 * ]
 */
const doYourCode = async () => {
    // DO YOUR CODE HERE
    let sampleCountResult = await getSampleCount();
    // console.log()
    let lastResult = [];
    for (let i = 0; i < sampleCountResult; i++) {
        let originNumber = (i + 1) + sampleCountResult;
        const transfNumberResult = await getTransformFn(originNumber)
        lastResult.push({
            id: i,
            originNumber,
            transformedNumber: transfNumberResult(originNumber)
        })
    }
    return lastResult;
}

console.time("Time this");
doYourCode()
    .then(t => console.log(t))
    .finally(() => console.timeEnd("Time this"));