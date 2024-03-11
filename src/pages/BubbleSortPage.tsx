import { useEffect, useState } from "react";
import { useSortAlgorithms } from "../hooks";
import { Graph } from "../components";

export const BubbleSortPage = () => {

    const {
        currentIndex,
        currentPointer,
        runAlgorithm,
        runBubbleSort,
        setInitialValues,
        targetArray,
    } = useSortAlgorithms()

    const [isRunning, setIsRunning] = useState(false);

    const handleStart = async () => {
        setIsRunning(true);
        await runAlgorithm(runBubbleSort, targetArray);
        setIsRunning(false);
        return setInitialValues(30);
    };


    useEffect(() => {
        setInitialValues(30)
    }, [])



    return (
        <div className="h-screen m-8">
        <h2 className="text-3xl font-semibold">Bubble Sort</h2>
        <div className="flex justify-center items-center h-full">
          <Graph currentIndex={currentIndex} currentPointer={currentPointer} handleStart={handleStart} isRunning={isRunning} targetArray={targetArray} />
        </div>
      </div>
    )
}
