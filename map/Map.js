class CustomMap {

    constructor(iterable){

        this.entries = [];

        if(iterable)
        {
            for(const [key,value] of iterable)
            {

                this.set(key,value);
            
            }
        }

    }

    set(key,value)
    {

        //check if the key value is already present in the array
        const index = this.entries.findIndex(entry => entry.key === key);

        if(index!== -1)
        {

            //if the index is found with the same key value then change the value of that key 
            this.entries[index].value = value;
        
        }

        else
            this.entries.push({key,value});

    }

    delete(key)
    {

        //check if the key is present
        const index = this.entries.findIndex(entry => entry.key === key);

        if(index!== -1)
        {

            this.entries.splice(index,1);
            return true;

        }

        return false;

    }

    size = () => this.entries.length;   //using the arrow functions.
    
}


//creating and using a map
const myMap = new CustomMap([['drink','coca-cola'],['chocolate','dairy milk']]);
console.log(myMap.entries);

myMap.set('chips','lays');
console.log(myMap.entries);

console.log(myMap.size());

myMap.delete('chocolate');
console.log(myMap.entries);

