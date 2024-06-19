/**
 * In JavaScript, this refers to the current execution context or scope. 
 * It can be a bit confusing at first, but understanding how this works is crucial for writing effective and efficient JavaScript code.

What is "this"?
Ans:
In simple terms, this refers to the object that the current function is a method of. It can also refer to the global object (i.e. window in a browser environment) if the function is not part of an object.
 */

const person = {
    name: "John",
    sayHello: function() {
      console.log(`Hello, my name is ${this.name}!`);
    }
  };
  
  person.sayHello(); 

  /**
   * How is "this" Determined?

    The value of this is determined at runtime based on how a function is called, not how it is defined. 
    There are four ways that this can be determined:
   1.Global Scope
   2.Method Invocation
   3.Constructor Invocation
   4.Explicit Binding
    */

//1.Global Scope

   function sayHello2() {
    console.log(`Hello, my name is ${this.name}!`);
  }
  
  sayHello2();

//2.Method Invocation: If a function is called as a method of an object, this refers to that object.

  const person2 = {
    name: "Dragon",
    sayHello3: function() {
      console.log(`Hello, my name is ${this.name}!`);
    }
  };
  person2.sayHello3();

//3.Constructor Invocation: If a function is called with the new keyword, this refers to the newly created object.

function Person(name) {
    this.name = name;
  this.sayHello4 = function()
  {
    console.log(`Hello, my name is ${this.name}!`);
  }
  }

  const person1 = new Person("Alice");
  person1.sayHello4();
  

//4.Explicit Binding: If a function is called with the call, apply, or bind method, this refers to the object that the function is 
//called on.

function sayhello5()
{
  console.log(`Hello, my name is ${this.name}!`);
}

const someperson = {
  name :"Sekiro"
}

sayhello5.call(someperson);