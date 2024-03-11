import { sleep } from "..";

interface BinarySearchParams {
    setCurrentIndex: (i:number) => void;
    setAlgorithmResult: (i:number) => void;
    array: number[];
    target: number;
}

export const binarySearch = async ({setCurrentIndex, setAlgorithmResult, array, target}: BinarySearchParams) => {
    // Make use of two pointer, left most and right most
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    // Will run untill arr[0] reaches arr[arr.length -1]
    while (leftIndex <= rightIndex) {
        await sleep(500);
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        setCurrentIndex(middleIndex);
        if (target === array[middleIndex]) {
            setAlgorithmResult(array[middleIndex])
            return middleIndex;
        }

        if (target! < array[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    };
    setAlgorithmResult(-1);
    return -1;
};