import { ArrayRepresentation } from ".";

interface Props {
  sortedArray: number[]
  activePointer: number | undefined;
  algorithmResolutionValue: number | undefined;
}

export const AlgorithmVisualizer = ({ sortedArray, activePointer,algorithmResolutionValue }: Props) => {
  return (
      <div className='flex'>
          <ArrayRepresentation array={sortedArray} activePointer={activePointer} algorithmResolutionValue={algorithmResolutionValue} />
      </div>
  )
}