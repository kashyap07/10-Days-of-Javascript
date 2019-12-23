// Regular Expressions I

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = /^([a|e|i|o|u])[a-z]*\1$/;
    
    /*
     * Do not remove the return statement
     */
    return re;
}

// ------------------------------------------------------------------------------------------------

// Regular Expressions II

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    let re = /(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-zA-Z]+$/;
    
    /*
     * Do not remove the return statement
     */
    return re;
}

// ------------------------------------------------------------------------------------------------

// Regular Expressions III

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */

    let re = /\d+/g;
    
    
    /*
     * Do not remove the return statement
     */
    return re;
}

// ------------------------------------------------------------------------------------------------
