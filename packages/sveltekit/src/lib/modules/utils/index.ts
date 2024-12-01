
import type { ImageObject } from "$lib/types";

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

export function replaceNbspInText(array: any[]) {
    if (!array) return []
    return array.map(item => {
        if (item.children && Array.isArray(item.children)) {
        item.children = item.children.map(child => {
            if (child.text && typeof child.text === "string") {
            child.text = child.text.replace(/\u00A0/g, " ") // Replace non-breaking space with a regular space
            }
            return child
        })
        }
        return item
    })
}

export const stripHtml = (html: string): string => {
    return html.replace(/<[^>]*>/g, '');
}