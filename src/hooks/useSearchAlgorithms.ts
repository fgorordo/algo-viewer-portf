import { useState } from "react";
import { sleep } from "../helpers";

interface AlgorithmConfig {
    array: number[] | [];
    targetValue: number | undefined;
    activeIndex: number | undefined;
    activePointer: number | undefined;
}


const generateSortedArrayPromise = (length: number): Promise<number[]> => {
    return new Promise((resolve) => {
        let arr = generateSortedArray(length);
        return resolve(arr)
    })
}


const generateSortedArray = (length: number): number[] => {
    const sortedArray = Array.from({ length })
    for (let i = 0; i < sortedArray.length; i++) {
        sortedArray[i] = (i + 1);
    }
    return sortedArray as number[];
}

const generateTargetValue = (array: number[]) => {
    return array[Math.floor(Math.random() * array.length)];
}

export const useSearchAlgorithms = (lenght: number) => {
    const [algorithmConfig, setAlgorithmConfig] = useState<AlgorithmConfig>({
        array: [],
        activeIndex: undefined,
        activePointer: undefined,
        targetValue: undefined,

    })

    const array = [1,2,3,4]
    const targetValue = generateTargetValue(array)

    setAlgorithmConfig({
            ...algorithmConfig,
            array,
            targetValue,
    });


    return {
        array,
        targetValue,
        activeIndex: undefined,
        activePointer: undefined,
    }
};