

// 1. What’s the difference between a class and an interface?

/* A class can have implementations, initialized class fields, and visibility modifiers. It also generates JavaScript code, so it supports instanceof checks at runtime. 
    A class defines both a type and a value. 
    An interface just defines a type, doesn't generate any JavaScript code, can only contain type-level members, and can't contain use modifiers. */



// 2. When you mark a class' constructor as `private`, that means you can't instantiate or extend the class. What happens when you mark it as `protected` instead? Play around with this in your code editor, and see if you can figure it out.
class A {
    protected constructor() {}
}
class B extends A {}
new A()
// error TS2674: Constructor of class 'A' is protected and only accessible within the class declaration.
new B()
// error TS2674: Constructor of class 'A' is protected and only accessible within the class declaration.
