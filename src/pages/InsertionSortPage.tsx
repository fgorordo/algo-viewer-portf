import { useEffect, useState } from "react";
import { Graph } from "../components"
import { useSortAlgorithms } from "../hooks"

export const InsertionSortPage = () => {

  const {
    currentIndex,
    currentPointer,
    runAlgorithm,
    runInsertionSort,
    setInitialValues,
    targetArray,
  } = useSortAlgorithms();

  const [isRunning, setIsRunning] = useState(false);

  const handleStart = async () => {
    setIsRunning(true);
    await runAlgorithm(runInsertionSort, targetArray);
    setIsRunning(false);
    return setInitialValues(30);
  }

  useEffect(() => {
    setInitialValues(30);
  }, [])

  return (
    <div className="h-screen m-8">
      <h2 className="text-3xl font-semibold">Insertion Sort</h2>
      <div className="flex justify-center items-center h-full">
        <Graph
          currentIndex={currentIndex}
          currentPointer={currentPointer}
          handleStart={handleStart}
          isRunning={isRunning}
          targetArray={targetArray}
        />
      </div>
    </div>
  )
}
