/*
    Linear Search
    1. Start at the first element in the array and move towards the last.
    2. At each element though, check if the element is equal to the target element.
    3. If element found, return index of the element.
    4. If element not found, return -1.
*/


export const linearSearch = (arr: Number[], target: Number): Number | -1 => {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}; 