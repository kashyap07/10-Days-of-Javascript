// Arrays

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let largest = Math.max(...nums);
    nums = nums.filter(i => {
        return i !== largest;
    });

    return Math.max(...nums);
}

// ------------------------------------------------------------------------------------------------

// Try, Catch, and Finally

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        console.log(s.split('').reverse().join(''));
    } catch(err) {
        console.log(err.message);
        console.log(s);
    }
}

// ------------------------------------------------------------------------------------------------

// Throw

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a > 0) {
        return 'YES';
    } else if (a == 0) {
        throw new Error("Zero Error");
    } else {
        throw new Error("Negative Error");
    }
}
