import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { AlgorithmViewer } from "..";
import { useForm } from "../../hooks";
import { sleep } from "../../helpers";

interface FormData {
  arraySize: number;
}

const generateRandomArrayAndSelectSearchTarget = (length: number) => {
  const array = Array.from({ length: length }, () => Math.floor(Math.random() * 40));
  const selectedTarget = array[Math.floor(Math.random() * length)]

  return {
    randomArray: array,
    selectedTarget,
  }
}

const linearSearch = async (setIsSearchDone: any, changeActiveIndex: any, array: any, target: number) => {
  for (let i = 0; i < array.length; i++) {
    changeActiveIndex(i)
    await sleep(500)
    console.log(`Index: ${i} - Valor: ${array[i]} - Selected Target: ${target}`)
    if (array[i] === target) {
      console.log(`Coincidencia encontrada en el indice: ${i}`)
      setIsSearchDone(true)
      return i;
    };
    ;
  }
  console.log(`No se encontraron coincidencias, retorno: -1`)
  setIsSearchDone(true)
  return -1
}

export function LinearSearchViewer() {

  const { formValues, handleChange } = useForm<FormData>({ arraySize: 3 });
  const [randomArray, setRandomArray] = useState<number[]>([]);
  const [selectedTarget, setSelectedTarget] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isSearchDone, setIsSearchDone] = useState<boolean>(false);


  const handleStartDemo = async (event: HTMLFormElement) => {
    event.preventDefault()
    await linearSearch(setIsSearchDone, setActiveIndex, randomArray, selectedTarget)
  }

  const handleChangeArraySize = (event: ChangeEvent<HTMLSelectElement>) => {
    handleChange(event)
  }

  useEffect(() => {
    const { randomArray, selectedTarget } = generateRandomArrayAndSelectSearchTarget(formValues.arraySize);
    setRandomArray(randomArray);
    setSelectedTarget(selectedTarget);
    setIsSearchDone(false);
    setActiveIndex(0);
  }, [formValues.arraySize])

  return (
    <div className="w-full">
      <h1 className="text-4xl font-semibold">Linear Search Algorithm</h1>
      <form className="py-10 flex gap-10 w-full">
        <div className="flex items-center gap-4">
          <label htmlFor="arraySize" className="font-semibold">Array Size</label>
          <select onChange={handleChangeArraySize} name="arraySize" id="arraySize" className="px-4 bg-gray-200 py-2 font-bold border-2 border-black rounded-md">
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="selectedTarget" className="font-semibold">Selected Target</label>
          <input id="selectedTarget" disabled value={selectedTarget} type="text" className="flex justify-center items-center px-4 bg-gray-200 py-2 font-bold border-2 border-black rounded-md" />
        </div>

        <button onClick={(e: any) => handleStartDemo(e)} className="font-bold bg-blue-500 text-white py-2 px-4 rounded-lg transition-all drop-shadow-lg hover:bg-blue-400">Start demo</button>
      </form>
      <AlgorithmViewer arraySize={randomArray} activeIndex={activeIndex} isSearchDone={isSearchDone}/>


    </div>

  );
}