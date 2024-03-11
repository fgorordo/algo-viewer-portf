import { sleep } from "..";

interface InsertionSortParams {
    setCurrentIndex: (i: number) => void;
    array: number[]
}

export const insertionSort = async ({setCurrentIndex,array}: InsertionSortParams) => {
    for(let i = 0; i < array.length; i++) {
        await sleep(300);
        setCurrentIndex(i);
        let numberToInsert = array[i];
        let j = i -1;

        while(j >= 0 && array[j] > numberToInsert) {
            array[j + 1] = array[j]
            j = j - 1;
        }

        array[j + 1 ] = numberToInsert;
    }
}