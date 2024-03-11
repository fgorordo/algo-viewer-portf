import { GraphItem } from "."

interface GraphProps {
  targetArray: number[];
  handleStart: () => void;
  isRunning: boolean;
  currentPointer: number | undefined;
  currentIndex: number | undefined;
}

export const Graph = ({targetArray, handleStart,isRunning,currentIndex,currentPointer}:GraphProps) => {
  return (
    <div>
      <div>
        <div className="flex gap-2 items-end my-4">
          {
            targetArray.map((element, index) => (
              <GraphItem currentIndex={currentIndex} currentPointer={currentPointer} element={element} index={index} key={index} />
            ))
          }
        </div>
      </div>
      <button
        onClick={handleStart}
        className="text-xl font-semibold border px-8 py-2 rounded-full"
      >
        {isRunning ? 'Espere...' : 'Start'}
      </button>
    </div>
  )
}
