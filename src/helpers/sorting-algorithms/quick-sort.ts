import { Dispatch } from "react";
import { sleep } from "..";

interface QuickSortParams {
    setPivotElement: Dispatch<React.SetStateAction<number | undefined>>;
    setCurrentIndex: Dispatch<React.SetStateAction<number | undefined>>;
    setRightArray: Dispatch<React.SetStateAction<number[]>>;
    setLeftArray: Dispatch<React.SetStateAction<number[]>>;

}

export const quickSort = async (arr: number[], {setPivotElement, setRightArray, setLeftArray, setCurrentIndex}:QuickSortParams): Promise<number[]> => {
    if (arr.length < 2) {
        setRightArray([]);
        setLeftArray([]);
        setPivotElement(undefined);
        setCurrentIndex(undefined);
        return arr
    };

    let pivot = arr[arr.length - 1];
    setPivotElement(pivot);
    let left: number[] = [];
    let right: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        setCurrentIndex(i)
        await sleep(100)
        if (arr[i] < pivot) {
            left.push(arr[i]);
            setLeftArray(left)
        } else {
            right.push(arr[i]);
            setRightArray(right)
        }
    }
    
    
    return [...await quickSort(left,{setPivotElement, setRightArray, setLeftArray, setCurrentIndex}), pivot, ...await quickSort(right,{setPivotElement, setRightArray, setLeftArray, setCurrentIndex})];
};