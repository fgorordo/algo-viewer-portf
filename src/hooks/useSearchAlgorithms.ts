import { useState } from "react";
import { binarySearch, linearSearch, sleep } from "../helpers";
import { sentinelSearch } from "../helpers/search-algorithms/sentinel-search";

const generateArray = (length: number) => {
    const array: number[] = [];
    for (let i = 0; i < length; i++) {
        array.push(i);
    }
    return array;
}

const generateTarget = (array: number[]) => {
    return array[Math.floor(Math.random() * (array.length + 1))];
}

interface UseSearchAlgorithmSettings {
    initialArray: number[] | undefined;
    searchTarget: number | undefined;
    currentIndex: number | undefined;
    algorithmResult: number | undefined;
}

export const useSearchAlgorithm = () => {
    const [algorithmSetup, setAlgorithmSetup] = useState<UseSearchAlgorithmSettings>({
        initialArray: [],
        searchTarget: undefined,
        currentIndex: undefined,
        algorithmResult: undefined,
    });

    const [isUiLocked, setIsUiLocked] = useState<boolean>(false);

    const generateArrayAndTarget = (length: number) => {
        const array = generateArray(length);
        const generatedTarget = generateTarget(array);
        setAlgorithmSetup({
            ...algorithmSetup,
            initialArray: array,
            searchTarget: generatedTarget,
            currentIndex: undefined,
            algorithmResult: undefined,
        });
    };

    const setCurrentIndex = (i: number | undefined): void => {
        setAlgorithmSetup({
            ...algorithmSetup,
            currentIndex: i,
        });
    };

    const setAlgorithmResult = (i: number | undefined): void => {
        return setAlgorithmSetup({ ...algorithmSetup, algorithmResult: i })
    };

    const lockUi = () => {
        return setIsUiLocked(true);
    };

    const unlockUi = () => {
        return setIsUiLocked(false);
    };


    const runBinarySearch = async (array: number[], target: number) => {
        return await binarySearch({setCurrentIndex, setAlgorithmResult, array, target})
    }

    const runLinearSearch = async (array: number[], target: number) => {
        return await linearSearch({setCurrentIndex, setAlgorithmResult, array, target})
    }

    const runSentinelSearch = async(array: number[], target:number) => {
        return await sentinelSearch({setCurrentIndex, setAlgorithmResult,array, target})
    }

    const runAlgorithm = async (algorithm: any, array: any, target: any) => {
        await algorithm(array, target);
        return await sleep(3000);
    };

    return {
        runAlgorithm,
        generateArrayAndTarget,
        ...algorithmSetup,
        lockUi,
        unlockUi,
        isUiLocked,
        runBinarySearch,
        runLinearSearch,
        runSentinelSearch,
    }
};