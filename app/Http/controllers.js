var CallableInstance = require('callable-instance');

class ExampleClass extends CallableInstance {
    constructor() {
        // CallableInstance accepts the name of the property to use as the callable
        // method.
        super('instanceMethod');
    }

    instanceMethod() {
        console.log("instanceMethod called!");
    }
}