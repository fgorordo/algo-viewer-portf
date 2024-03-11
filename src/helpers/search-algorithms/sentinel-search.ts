import { sleep } from "..";

interface SentinelSearchParams {
    array: number[];
    target: number;
    setCurrentIndex: (i: number) => void;
    setAlgorithmResult: (i: number) => void;
}

export const sentinelSearch = async ({ setCurrentIndex, setAlgorithmResult, array, target }: SentinelSearchParams) => {

    // Last element of the array
    let last = array[array.length - 1];

    // Element to be searched is
    // placed at the last index
    array[array.length - 1] = target;
    let i = 0;
    while (array[i] != target) {
        setCurrentIndex(i)
        await sleep(300)
        i++;
    }
    // Put the last element back
    array[array.length - 1] = last;

    if ((i < array.length - 1) || (array[array.length - 1] == target)) {
        setAlgorithmResult(array[i])
        console.log(`Element: ${target} is present at Index: ${i}`)
    } else {
        setAlgorithmResult(-1);
        console.log(`Element ${target} no found in the array.`)
        return -1
    }
}