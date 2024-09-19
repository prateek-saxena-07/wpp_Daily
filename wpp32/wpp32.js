// WPP_32.

// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
    constructor(name,country,age=18) {
        this.name = name;
        this.age = age;
        this.country = country;

    
        
    }
    details() {
        console.log('name,age,country', this.name, this.age, this.country);        
        return null;
    }

   
}

const person1 = new Person('raj', 'India');
console.log(person1.details())
const person2 = new Person('King', 40, 'Mexico');
person2.details();

// class Person {
//   constructor(name="Jake", age = 30) {
//     this.name = name;
//       this.age = age;
      
//   }
// }

// const person1 = new Person('jame'); // name: "John", age: 30
// console.log(person1)
// const person2 = new Person("Alice", 25); // name: "Alice", age: 25
// console.log(person2)
// const person3 = new Person();
// console.log(person3)
//class with default parameters


