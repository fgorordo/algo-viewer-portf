interface Props {
    array: number[]
    activePointer: number | undefined
    algorithmResolutionValue: number | undefined;
}

export const ArrayRepresentation = ({ array, activePointer, algorithmResolutionValue}: Props) => {
    console.log(array.length)
    return (
        <div className='flex gap-4 items-end justify-center'>
            {
                array.map((element, index) => {
                    return (
                        <div className="flex flex-col items-center" key={index}>
                            <div
                                style={{ height: `${(element as number * 10) + 40}px` }}
                                className={`transition-all ${activePointer === index ? 'bg-orange-300':`${algorithmResolutionValue === element ? 'bg-green-300':'bg-gray-600'}`} w-5 min-h-10 flex items-center justify-center rounded-t-md`}>
                                <p className="font-bold text-white">{element.toString()}</p>
                            </div>
                            <p className="font-bold">{index}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}