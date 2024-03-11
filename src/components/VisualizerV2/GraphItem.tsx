interface GraphItemProps {
  index: number;
  element: number;
  currentPointer: number | undefined;
  currentIndex: number | undefined;
}

export const GraphItem = ({index, element, currentIndex, currentPointer}: GraphItemProps) => {
  return (
    <div>
      <div
        style={{ height: `${element * 5 + 40}px`, backgroundColor: currentPointer === index ? 'rgb(34 197 94 / 1)' : '' }}
        className={`
                            rounded-t
                            ${currentIndex === index ? 'bg-orange-500' : 'bg-gray-500'}
                            min-w-6
                            flex
                            items-center
                            justify-center
                            transition-all`}
      >
        {element}
      </div>
      <p className="text-center">{index}</p>
    </div>
  )
};
