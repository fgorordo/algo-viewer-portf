import { useEffect, useState } from 'react'
import { useSortAlgorithms } from '../hooks'
import { Graph } from '../components'
import { quickSort } from '../helpers'
import { useQuickSort } from '../hooks/useQuickSort'

export const QuickSortPage = () => {
    const {
        arr,
        leftArray,
        rightArray,
        currentIndex,
        pivotElement,
        isRunning,
        runAlgorithm,
        setInitialValues
    } = useQuickSort()


    const handleStart = async () => {
        await runAlgorithm(arr)
        setInitialValues(30)
    }

    useEffect(() => {
        setInitialValues(30)
    }, [])
    return (
        <div className="m-8 flex flex-col">
            <h2 className="text-3xl font-semibold">Quick Sort</h2>
            <div className='flex'>
                <div className="flex flex-col">
                    <p>Left Array: {JSON.stringify(leftArray)}</p>
                    <p>Right Array: {JSON.stringify(rightArray)}</p>
                    <p>Pivot Element: {JSON.stringify(pivotElement)}</p>
                    <p>Current Index: {JSON.stringify(currentIndex)}</p>
                    <p>Target Array: {JSON.stringify(arr)}</p>
                    <p>UI Locked: {JSON.stringify(isRunning)}</p>
                </div>
                <div className='m-auto'>
                    <button onClick={handleStart}>Start</button>
                </div>
            </div>

            <div className='flex flex-col gap-4'>

                <div className='flex gap-2 w-full justify-center items-end flex-1 min-h-[230px] max-h-[230px]'>
                    {
                        arr.map(element => (
                            <div
                                style={{
                                    height: `${element * 5 + 40}px`
                                }}
                                className='
                                    rounded-t
                                    flex
                                    items-end
                                    justify-center
                                    border
                                    w-8
                                    text-center
                            '>
                                {element}
                            </div>
                        ))
                    }
                </div>

                {/* Second Array Div */}
                <div className='flex h-full flex-1 min-h-[230px] max-h-[230px]'>
                    <div className='flex flex-1 gap-2 w-full justify-center my-10 items-end'>
                        {
                            leftArray.map(element => (
                                <div
                                    style={{
                                        height: `${element * 5 + 40}px`
                                    }}
                                    className='
                                    bg-orange-500
                                    rounded-t
                                    flex
                                    items-end
                                    justify-center
                                    border
                                    w-8
                                    text-center
                            '>
                                    {element}
                                </div>
                            ))
                        }
                    </div>

                    <div className='flex flex-1 gap-2 w-full justify-center my-10 items-end'>
                        {
                            pivotElement && (
                                <div
                                    style={{
                                        height: `${pivotElement! * 5 + 40}px`
                                    }}
                                    className='
                                    bg-green-500
                                    rounded-t
                                    flex
                                    items-end
                                    justify-center
                                    border
                                    w-8
                                    text-center
                            '>
                                    {pivotElement}
                                </div>
                            )
                        }
                    </div>
                    <div className='flex flex-1 gap-2 w-full justify-center my-10 items-end'>
                        {
                            rightArray.map(element => (
                                <div
                                    style={{
                                        height: `${element * 5 + 40}px`
                                    }}
                                    className='
                                    bg-purple-500
                                    rounded-t
                                    flex
                                    items-end
                                    justify-center
                                    border
                                    w-8
                                    text-center
                            '>
                                    {element}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
