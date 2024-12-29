function greetUser(name, callback) {
    const message = `Hello, ${name}!`;
    callback(message);
}

function logMessage(msg) {
    console.log(msg);
    
}

greetUser("Alice", logMessage); // Output: Hello, Alice!
