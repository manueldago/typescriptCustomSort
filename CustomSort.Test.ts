import { CustomSort } from "./CustomSort"
export interface IArray {
    id: number,
    state: string,
}

let originalArray : Array<IArray>= [];
originalArray = [
                    { id: 1, state:"pending"},
                    { id: 2, state:"done"},
                    { id: 3, state:"inprogress"},
                    { id: 4, state:"done"},
                    { id: 5, state:"pending"},
                 ];

 let mySortQuery: CustomSort<IArray> = new CustomSort<IArray>();
 mySortQuery.arraySortedByValues(originalArray,
                                 "state",
                                 ["pending","inprogress","done"]);

let mergedArray = mySortQuery.mergedArray;                                 
console.log(mergedArray);