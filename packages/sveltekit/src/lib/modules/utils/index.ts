
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

export function isPortraitImage(image: ImageObject, ratioDivider: number = 1): boolean {
    // Extract the dimensions from the _ref property
    const ref = image.asset._ref;
    
    // Regex to match the dimensions from the filename: -widthxheight-
    const dimensionPattern = /-(\d+)x(\d+)-/;
    const match = ref.match(dimensionPattern);
  
    if (!match) {
      console.error("Invalid image reference format");
      return false
    }
  
    const width = parseInt(match[1], 10);
    const height = parseInt(match[2], 10);
  
    // Calculate the ratio and compare it with the divider
    const imageRatio = width / height;
    return imageRatio < ratioDivider;
  }