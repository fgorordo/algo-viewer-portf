import { useEffect, useState } from 'react'
import { useSortAlgorithms } from '../hooks'
import { Graph } from '../components'

export const QuickSortPage = () => {

    const {
        currentIndex,
        currentPointer,
        runAlgorithm,
        setInitialValues,
        targetArray,
        runQuickSort,
    } = useSortAlgorithms()

    const [isRunning, setIsRunning] = useState(false);

    const handleStart = async () => {
      setIsRunning(true);
      await runAlgorithm(runQuickSort, targetArray);
      setIsRunning(false);
      return setInitialValues(30);
    }
  
    useEffect(() => {
      setInitialValues(30);
    }, [])

    return (
        <div className="h-screen m-8">
            <h2 className="text-3xl font-semibold">Quick Sort</h2>
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
