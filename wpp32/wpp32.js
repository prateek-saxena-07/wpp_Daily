// WPP_32.

// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
    constructor(name,age,country) {
        this.name = name;
        this.age = age;
        this.country = country;

    
        
    }
    details() {
        console.log('name,age,country', this.name, this.age, this.country);        
        return null;
    }

   
}

const person1 = new Person('raj', 18, 'India');
console.log(person1.details())
const person2 = new Person('King', 40, 'Mexico');
person2.details();




