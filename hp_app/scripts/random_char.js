import {getJSON, getRandKey} from "./utilities.js"

class RandomCharacter {
    constructor(url, filtered_arr, chars){
        this.url = url;
        this.filtered_arr = filtered_arr
        this.chars = chars
    }

    get Character(){
        return this.RandomChar()
    }

    RandomChar(){
        getJSON(this.url).then(
        (data) => {
        for (const i in data) {
            let key = i;
            let value = data[i]; //access each hp character

            // if character has an image link - add key (number) to filtered_arr
            if (value.image != "" && key != 25) {
            this.filtered_arr.push(key);
            }
        }

        // Generate random number from filtered_arr
        let randKey = getRandKey(this.filtered_arr);

        // Access data of character corresponding to the generated random key
        let chars = data[randKey];
        return this.chars = chars
        })
    }// end of RandomChar()
}// end of RandomCharacter class