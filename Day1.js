// Arithmetic Operators

/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;

    area = length * width;
    
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    
    perimeter = 2 * (length + width);
    
    return perimeter;
}

// ------------------------------------------------------------------------------------------------

// Functions

/*
 * Create the function factorial here
 */

let factorial = (n) => {
    if (n !== 0) {
        return n * factorial(n-1);
    } else {
        return 1;
    }
}

// ------------------------------------------------------------------------------------------------

// Let and Const

function main() {
    const PI = Math.PI;
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r = readLine();
    
    // Print the area of the circle:
    console.log(PI * r * r);
    
    // Print the perimeter of the circle:
    console.log(2 * PI * r);
}
