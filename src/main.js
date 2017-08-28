'use strict';

module.exports.aritGeo =  (sequence) => {
    // If the input is not an array or a single element array.
    if(!Array.isArray(sequence) || sequence.length === 1) {
        return "not a sequence";
    }
    // for an empty array
    else if(sequence.length === 0){
        return 0;
    }
    else {
        // handling the input proper
        let diff = sequence[1] - sequence[0], ratio = sequence[1]/sequence[0];;
        let geo = true, arith = true; 
        
        // loop through the sequence testing for the difference or the ration.
        for(let i = 0; i < sequence.length - 1; i++) {
            if(sequence[i+1] - sequence[i] !== diff) {
                arith = false;
            }
            if (sequence[i+1]/ratio !== sequence[i]){
                geo = false;
            }
        } 
        // for arithmetic
        if(arith === true){
            return 'Arithmetic';
        }
        // for geometric
        else if (geo === true){
            return 'Geometric';
        }
        // for neither of the two
        else {
            return -1;
        }
    }
}