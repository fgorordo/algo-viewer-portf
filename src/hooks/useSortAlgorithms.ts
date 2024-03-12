import { useState } from "react"
import { bubbleSort, insertionSort, sleep } from "../helpers";

interface SortAlgorithmState {
    targetArray: number[];
    currentIndex: number | undefined;
    currentPointer: number | undefined;
    numberToInsert?: number,
}

function generateRandomArray(length: number) {
    if (length <= 0) {
        console.error("Array length should be greater than 0");
        return [];
    }

    let randomArray = [];
    for (let i = 1; i <= length; i++) {
        randomArray.push(i);
    }

    // Fisher-Yates shuffle algorithm
    for (let i = randomArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomArray[i], randomArray[j]] = [randomArray[j], randomArray[i]];
    }

    return randomArray;
}

export const useSortAlgorithms = () => {
    const [sortAlgorithmState, setSortAlgorithmState] = useState<SortAlgorithmState>({
        targetArray: [],
        currentIndex: undefined,
        currentPointer: undefined,
        numberToInsert: undefined,
    });

    const setInitialValues = (length: number) => {
        setSortAlgorithmState({
            targetArray: generateRandomArray(length),
            currentIndex: undefined,
            currentPointer: undefined,
        })
    };

    const runAlgorithm = async (algorithm:any, array: number[]) => {
        setSortAlgorithmState({
            ...sortAlgorithmState,
        })
        await algorithm(array);
        await sleep(5000);
        return setSortAlgorithmState({
            ...sortAlgorithmState,
        })
    };

    const setCurrentIndex = (i: number) => {
        setSortAlgorithmState({
            ...sortAlgorithmState,
            currentIndex: i,
        })
    }

    const runBubbleSort = async (array: number[]) => {
        return await bubbleSort({setCurrentIndex,array})
    };

    const runInsertionSort = async (array:number[]) => {
        return await insertionSort({setCurrentIndex, array});
    };



    return {
        ...sortAlgorithmState,
        setInitialValues,
        runAlgorithm,
        runBubbleSort,
        runInsertionSort,
    }
};