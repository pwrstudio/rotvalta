export function splitArray<T>(arr: T[]): [T[], T[]] {
    const firstArray: T[] = [];
    const secondArray: T[] = [];

    arr.forEach((element, index) => {
        if (index % 2 === 0) {
            firstArray.push(element);
        } else {
            secondArray.push(element);
        }
    });

    return [firstArray, secondArray];
}