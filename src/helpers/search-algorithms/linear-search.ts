/*
    Linear Search
    1. Start at the first element in the array and move towards the last.
    2. At each element though, check if the element is equal to the target element.
    3. If element found, return index of the element.
    4. If element not found, return -1.
*/

import { sleep } from "..";


interface LinearSearchParams {
    setCurrentIndex: (i: number) => void;
    setAlgorithmResult: (i: number) => void;
    array: number[];
    target: number;
}

export const linearSearch = async ({setCurrentIndex, setAlgorithmResult,array, target}: LinearSearchParams) => {
    for (let i = 0; i < array.length; i++) {
        await sleep(300);
        setCurrentIndex(i);
        if (array[i] === target) {
            setAlgorithmResult(array[i]);
            return array[i];
        }
    }

    setAlgorithmResult(-1);
    return -1;
};