export {};

//returnを返さないものは、返り値は必ずvoidかany
function returnNothing(): undefined {
    console.log('Nothing');
    return undefined;
}
console.log(returnNothing());

function returnNothing2(): any {
    console.log('Nothing');
}
console.log(returnNothing2());

function returnNothing3(): void {
    console.log('Nothing');
}
console.log(returnNothing3());
