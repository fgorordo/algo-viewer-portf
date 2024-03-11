import { Spinner } from '../Spinner';
import { AlgorithmVisualizer } from '..';
import { useSearchAlgorithm } from '../../hooks';
import { useEffect } from 'react';

export const BinarySearch = () => {

    const {
        currentIndex,
        generateArrayAndTarget,
        initialArray,
        algorithmResult,
        searchTarget, 
        runAlgorithm,
        isUiLocked,
        lockUi,
        unlockUi,
        runBinarySearch
      } = useSearchAlgorithm();
  
    const handleStart = async () => {
      lockUi()
      await runAlgorithm(runBinarySearch, initialArray, searchTarget)
      generateArrayAndTarget(20);
      unlockUi()
    };
  
    useEffect(() => {
      generateArrayAndTarget(20)
    }, []);
  
    return (
      <div className='text-gray-400 bg-black p-8 h-screen flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-semibold mb-10'>Binary Search Algorithm</h1>
  
        <AlgorithmVisualizer sortedArray={initialArray} activePointer={currentIndex} algorithmResolutionValue={algorithmResult} />
  
        <h2 className='text-2xl mt-10'>Selected Target: <span className='font-bold'>{searchTarget}</span></h2>
        <div>
          <button
            disabled={isUiLocked ? true : false}
            onClick={handleStart}
            className='bg-gray-400 min-w-[200px] px-4 py-2 text-gray-800 font-bold rounded-xl text-md'
          >
            {
              isUiLocked
                ? (<Spinner />)
                : 'Start'
            }
          </button>
        </div>
      </div>
    );
  }
