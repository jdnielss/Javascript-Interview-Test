const inputData = [
    'evan|50000|D',
    'jefry|70000|C',
    'rizky|30000|D',
    'hanson|10000|B',
    'candra|30000|A',
    'goklas|20000|A',
    'hendra|20000|B',
    'surya|30000|A',
]

const customSort = (a,b) => {
    const result = a.grade.localeCompare(b.grade);
    if (result == 0) {
        return b.point - a.point
    }
    return result
}

console.log(`Input data : ${JSON.stringify(inputData, 0, 2)}`)
const inputDataToArray = inputData.map(x => {
    return {
        name: x.split('|')[0],
        point: parseInt(x.split('|')[1]),
        grade: x.split('|')[2]
    }
});
inputDataToArray.sort(customSort);
console.log(`Output : ${inputDataToArray.map(x => x.name).join(',')}`)