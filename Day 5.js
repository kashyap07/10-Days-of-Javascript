// Inheritance

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function() {
    return this.w * this.h
};
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(s) {
        super(s, s);
    }
}

// ------------------------------------------------------------------------------------------------

// Template Literals

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let [a, p] = expressions;

    return [
        (p + Math.sqrt(p*p - 16*a))/4,
        (p - Math.sqrt(p*p - 16*a))/4
    ].sort()
}

// ------------------------------------------------------------------------------------------------

// Arrow Functions

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    return nums.map(i => {
        if (i%2 == 0) {
            return i * 2
        } else {
            return i * 3
        }
    })
}
