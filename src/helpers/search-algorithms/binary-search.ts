import { sleep } from "..";

interface Props {
    sortedArray: number[],
    searchTarget: number | undefined;
    setActivePointer: (i: number | undefined) => void;
}

export const binarySearch = async ({sortedArray, searchTarget, setActivePointer}: Props) => {
    
    // Make use of two pointer, left most and right most
    let leftIndex = 0;
    let rightIndex = sortedArray.length -1;

    // Will run untill arr[0] reaches arr[arr.length -1]
    while(leftIndex <= rightIndex) {
        await sleep(500)
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        setActivePointer(middleIndex);
        if(searchTarget === sortedArray[middleIndex]) {
            setActivePointer(undefined);
            return middleIndex;
        }

        if(searchTarget! < sortedArray[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    };
    setActivePointer(undefined);
    return -1;
}