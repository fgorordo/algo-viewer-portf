import { sleep } from "..";

interface QuickSortParams {
    setCurrentIndex: (i: number) => void;
    array: number[]
}

export const quickSort: any = async ({setCurrentIndex,array}:QuickSortParams) => {
    // 1. Find the pivot element
    let pivot = array[array.length - 1];
    let leftArray:number[] = [];
    let rightArray:number[] = [];

    for(let i = 0; i < array.length -1; i++) {
        setCurrentIndex(i);
        await sleep(500);
        if(array[i] < pivot) {
            leftArray.push(array[i]);
        } else {
            rightArray.push(array[i]);
        }
    }

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}