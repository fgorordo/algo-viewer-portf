// !!!REFACTOR THIS
const GraphBar = (props: any) => {
    return (
        <div className="flex flex-col items-center">
            <div
                style={{ height: `${(props.height as number * 10) + 40}px` }}
                className={`transition-all ${props.activeIndex === props.index ? 'bg-orange-500':`${props.isSearchDone === true ? 'bg-green-500': 'bg-blue-500'}`} w-5 min-h-10 flex items-center justify-center rounded-t-md`}>
                <p className="font-bold text-white">{props.value}</p>
            </div>
            <p className="font-bold">{props.index}</p>
        </div>
    )
}

interface Props {
    generatedArray: number[];
    activeIndex: number;
    isSearchDone: boolean;
}

export const BarsGraph = ({generatedArray, activeIndex, isSearchDone}: Props) => {
    return (
        <div className="flex w-full gap-2 items-end py-10 justify-center">
            {
                generatedArray.map((value:any, index:number) => <GraphBar isSearchDone={isSearchDone} activeIndex={activeIndex} value={value} index={index} height={value} key={index}/>)
            }
        </div>
    )
}


