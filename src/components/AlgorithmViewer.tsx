import { BarsGraph } from "./BarsGraph";

interface Props {
    arraySize: number[];
    activeIndex: number;
    isSearchDone: boolean
}

export const AlgorithmViewer = ({arraySize,activeIndex, isSearchDone}: Props) => {


    return (
        <div className="w-full flex flex-col justify-center">
           
            <BarsGraph generatedArray={arraySize} activeIndex={activeIndex} isSearchDone={isSearchDone}/>

        </div>
    )
};
