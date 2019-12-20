// Create a Rectangle Object

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: 2*(a+b),
        area: a*b
    }
}

// ------------------------------------------------------------------------------------------------

// Count Objects

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    return objects.filter(i => i.x == i.y).length;
}

// ------------------------------------------------------------------------------------------------

// Classes


/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
    constructor(sides) {
        this.sides = sides;
        this.perimeterVal = sides.reduce((a, b) => a+b, 0);
    }

    perimeter() {
        return this.perimeterVal;
    }
}
