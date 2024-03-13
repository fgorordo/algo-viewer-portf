function generateRandomArray(length: number) {
    if (length <= 0) {
        console.error("Array length should be greater than 0");
        return [];
    }

    let randomArray = [];
    for (let i = 1; i <= length; i++) {
        randomArray.push(i);
    }

    // Fisher-Yates shuffle algorithm
    for (let i = randomArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomArray[i], randomArray[j]] = [randomArray[j], randomArray[i]];
    }

    return randomArray;
}

const sampleData = {
    targetArray: generateRandomArray(30),
    currentIndex: 3,
    pivotElement: 6,
}

const leftArray = generateRandomArray(30).splice(0, Math.floor((sampleData.targetArray.length / 2)))
const rightArray = generateRandomArray(30).splice(Math.floor((sampleData.targetArray.length / 2)))
const pivotElement = sampleData.targetArray[Math.floor((sampleData.targetArray.length / 2))]


export const VisualizerGraph = () => {

    const { targetArray, currentIndex, pivotElement } = sampleData;

    return (
        // Visualizer Container
        <div className='m-4 w-full flex flex-col gap-4'>

            {/* Algorithm information display */}
            <div>
                <h3 className='text-md font-semibold'>Algorithm real time information:</h3>
                <ul>
                    <li>Initial Array: {JSON.stringify(targetArray)}</li>
                    <li>Current Index: {JSON.stringify(currentIndex)}</li>
                    <li>Pivot Element: {JSON.stringify(pivotElement)}</li>
                    <li>Left Array: {JSON.stringify(leftArray)}</li>
                    {/* <li>Right Array: {JSON.stringify(rightArray)}</li> */}
                </ul>
            </div>

            {/* Target Array Graph */}
            <div className="flex gap-2 w-full justify-center items-end">
                {
                    sampleData.targetArray.map((element, index) => (
                        <div className="text-center">
                            <div
                                style={{ height: element * 10 / 2 + 40 + 'px' }}
                                className={`
                                    bg-orange-500 
                                    w-6 border 
                                    border-white
                                    rounded-t-md
                                `}>
                                {element}
                            </div>
                            {index}
                        </div>
                    ))
                }
            </div>

            {/* Sub Arrays Graph */}

            <div className="flex bg-gray-900 items-end">

                <div className="flex gap-2 w-full justify-center items-end">
                    {
                        leftArray.map((element, index) => (
                            <div className="text-center">
                                <div
                                    style={{ height: element * 10 / 2 + 40 + 'px' }}
                                    className={`
                                    bg-orange-500 
                                    w-6 border 
                                    border-white
                                    rounded-t-md
                                `}>
                                    {element}
                                </div>
                                {index}
                            </div>
                        ))
                    }
                </div>

                <div>
                    <div className="text-center">
                        <div
                            style={{ height: pivotElement * 10 / 2 + 40 + 'px' }}
                            className={`
                                    bg-orange-500 
                                    w-6 border 
                                    border-white
                                    rounded-t-md
                                `}>
                            {pivotElement}
                        </div>
                        {sampleData.targetArray.findIndex(element => (element === pivotElement))}
                    </div>
                </div>

                <div className="flex gap-2 w-full justify-center items-end">
                    {
                        rightArray.map((element, index) => (
                            <div className="text-center">
                                <div
                                    style={{ height: element * 10 / 2 + 40 + 'px' }}
                                    className={`
                                    bg-orange-500 
                                    w-6 border 
                                    border-white
                                    rounded-t-md
                                `}>
                                    {element}
                                </div>
                                {index}
                            </div>
                        ))
                    }
                </div>

            </div>


        </div>
    )
}
