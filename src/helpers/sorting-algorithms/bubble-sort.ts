import { sleep } from "..";

interface BubbleSortParams {
    setCurrentIndex: (i: number) => void;
    array: number[]
}

export const bubbleSort = async ({setCurrentIndex, array}:BubbleSortParams) => {
    let swapped = false;
    do {
        swapped = false;
        for (let i = 0; i < array.length; i++) {
            await sleep(100)
            setCurrentIndex(i);
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped === true);
};