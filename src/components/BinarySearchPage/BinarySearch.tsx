import { useEffect, useState } from 'react'
import { binarySearch, sleep } from '../../helpers';
import { Spinner } from '../Spinner';
import { AlgorithmVisualizer } from '..';


interface BinarySearchConfig {
    array: number[];
    searchTarget: number | undefined;
    activePointer: number | undefined;
}

export const BinarySearch = () => {

    const [binarySearchConfig, setBinarySearchConfig] = useState<BinarySearchConfig>({
        activePointer: undefined,
        searchTarget: undefined,
        array: [],
    })
    const [isBtnLocked, setIsBtnLocked] = useState<boolean>(false);
    const [algorithmResolution, setAlgorithmResolution] = useState<number | undefined>(undefined);

    const {activePointer,array,searchTarget} = binarySearchConfig;

    const generateArray = (length: number) => {
        const array:number[] = [];
        for(let i = 0; i < length; i++) {
            array.push(i);
        }
        return array;
    }

    const generateTarget = (array: number[]) => {
        return array[Math.floor(Math.random() * (array.length + 1))];
    }

    const generateInitialValues = () => {
        let initialArray = generateArray(40);
        let initialTarget = generateTarget(initialArray)
        setBinarySearchConfig({array: initialArray,searchTarget: initialTarget,activePointer:0})
        setAlgorithmResolution(undefined);
    }

    const handleStart = async () => {
        setIsBtnLocked(true)
        const resolution = await binarySearch({sortedArray: array, searchTarget, setActivePointer})
        setAlgorithmResolution(resolution)
        await sleep(3000)
        setIsBtnLocked(false);
        generateInitialValues();
    }

    const setActivePointer = (i: number | undefined) => {
        setBinarySearchConfig({
            ...binarySearchConfig,
            activePointer: i,
        })
    }

   
    useEffect(() => {
        generateInitialValues();
    },[])

    return (
        <div className='text-gray-400 bg-black p-8 h-screen flex flex-col'>
            <h1 className='text-4xl font-semibold mb-10'>Binary Search Algorithm</h1>
            
                <AlgorithmVisualizer sortedArray={array} activePointer={activePointer} algorithmResolutionValue={algorithmResolution} />
            
            <h2 className='text-2xl mt-10'>Selected Target: <span className='font-bold'>{searchTarget}</span></h2>
            <div>
                <button
                    disabled={isBtnLocked ? true : false}
                    onClick={() => handleStart()}
                    className='bg-gray-400 min-w-[200px] px-4 py-2 text-gray-800 font-bold rounded-xl text-md'
                >
                        {
                            isBtnLocked
                            ? (<Spinner />)
                            :'Start'
                        }
                </button>
            </div>
        </div>
    )
}
