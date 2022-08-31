export class CustomSort<T>{
    
    public  mergedArray : Array<T>=[];

    constructor(private typeOut?: string) 
    {
         //TODO Write new output form array 
    }

    private genericSearch<T> (
        object: T,
        properties: Array<keyof T>,
        query: string
        ): boolean {
    
        if (query === "") {
            return true;
        } 
        
        return properties.some((property) => {
            const value = object[property];
            if (typeof value === "string" || typeof value === "number") {
                return value.toString().toLowerCase().includes(query.toLowerCase());
            }
            return false;
        });
    }

    private fieldExistOnArray<T>(field: string, arr: T): boolean {
        const existField: boolean = field in arr ;
        return existField;
    }

    private getNewArray(newArray: Array<T>, field: keyof T, query:string) {

        newArray.forEach(arr=>{    
            const itemIsPushed : boolean = this.genericSearch<T>(arr,[field] ,query)    
            if (itemIsPushed) {
                this.mergedArray.push(arr);          
            }
        });
    }

    public arraySortedByValues (someArray: Array<T>, _field: keyof T, _values: Array<string>) {
      
        if (someArray.length == 0 || _field.toString().length == 0 || _values.length == 0) return someArray;
        
        if (!this.fieldExistOnArray(_field.toString(),someArray[0])) return someArray;
        
        for (const val of _values) {
        
         this.getNewArray(someArray,_field,val);
      
        }
    }

}