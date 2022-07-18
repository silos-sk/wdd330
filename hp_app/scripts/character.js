import {getJSON, getRandKey} from "./utilities.js"

export class Character {
    constructor(url){
        this.url = url;
        this.filtered_arr = []
        this.chars = {}
        this.data = {}
    }

    getChar(){
        getJSON(this.url).then(
            (data) => {
            for (const i in data) {
                let key = i;
                let value = data[i]; //access each hp character

                // if character has an image link - add key (number) to filtered_arr
                if (value.image != "") {
                    this.filtered_arr.push(key);
                }
            } 
            this.filtered_arr.pop()
            return this.data = data
        }
        )
    }
    
    randomChar(){
        // Generate random number from filtered_arr
        let randKey = getRandKey(this.filtered_arr);
        
        // Access data of character corresponding to the generated random key
        let randomChar = this.data[randKey];
        this.chars = randomChar
        return this.chars
        }
}// end of Character class
