export function sum(numbers:number[]): number {
    return numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

export function average(numbers: number[]): number {
    return sum(numbers) / numbers.length;
}