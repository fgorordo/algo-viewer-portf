import { useState } from "react"
import { quickSort, sleep } from "../helpers";

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

export const useQuickSort = () => {

    const [arr, setArr] = useState<number[]>([]);
    const [rightArray, setRightArray] = useState<number[]>([]);
    const [leftArray, setLeftArray] = useState<number[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number | undefined>(undefined)
    const [pivotElement, setPivotElement] = useState<number | undefined>(undefined)
    const [isRunning, setIsRunning] = useState<boolean>(false);

    // Quick Sort Related Functions
    const setInitialValues = (length: number) => {
        return setArr(generateRandomArray(length));
    };

    const runAlgorithm = async (arr: number[]) => {
        setIsRunning(true);
        setArr(await quickSort(arr, {
            setCurrentIndex: setCurrentIndex,
            setLeftArray: setLeftArray,
            setPivotElement: setPivotElement,
            setRightArray: setRightArray,
        }))
        await sleep(5000);
        setIsRunning(false);
    };

    return {
        arr,
        rightArray,
        leftArray,

        currentIndex,
        pivotElement,

        isRunning,

        setInitialValues,
        runAlgorithm,
    }
}