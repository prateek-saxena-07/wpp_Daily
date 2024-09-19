// WPP_33.

// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
    constructor(length, breadth)
    {
        this.length = length;
        this.breadth = breadth;
    }

    area()
    {
        return this.length * this.breadth;
    }

    perimeter()
    {
        return 2 * (this.length + this.breadth);
    }

}

const rectangle = new Rectangle(5, 4);
console.log(rectangle.area(), rectangle.perimeter());