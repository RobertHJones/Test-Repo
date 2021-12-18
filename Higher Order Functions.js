function factorOfThree(num) {
    return num % 3 === 0;
}
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

array.filter(factorOfThree)

function multiplyByEleven(num) {
    return num * 11;
}

array.map(multiplyByEleven)

function numberCubed(num) {
    return Math.pow(num, 3)
}
array.map(numberCubed)

let people = ['Rob', 'Bob', 'Bobby', 'Robbie', 'Robert', 'Bert', 'Bertie', 'Roberto']

function addJones(name) {
    if (name.charAt(0) === 'R') {
    return `${name} Jonesy`
} else {
    return `${name} Who?`
}
}

people.map(addJones)

 findTotal = (total, num) =>
    total + num;

array.reduce(findTotal)

function isGreaterThanTwelve(num) {
return num > 12
}

array.findIndex(isGreaterThanTwelve)
array.find(isGreaterThanTwelve)