function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
      return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}
 const person1 = new Person('John', 'Doe', '4-3-1980');
 const person2 = new Person('Mary', 'Smith', '3-6-1970');
 console.log(person1.dob.getFullYear());
 console.log(person1.getBirthYear());
 console.log(person1.getFullName());


 function Fruit(name) { // class
    this.name = name; // member
    this.Taste = function() { // member

    }
    this.TakeBite = function() { // member

    }
 }

 function Car(model, year) { // class
    this.model = model;
    this.OpenDoor = function() { // member
        return "Door is opened for car " +  model;
    }
    this.StartEngine = function() { // member

    }
 }

 var ferrari = new Car("ferrafi", 1980);
 var ferrari2 = new Car("ferrafi2", 1981);

 var apple = new Fruit("apple"); // apple is an object stored in a variable called "apple" of type class Fruit
 console.log(apple.name);
 var mango = new Fruit("mango");
 console.log(mango.name);
 mango.name = "cereza";
 console.log(apple.name);
 console.log(mango.name);
