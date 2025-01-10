# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections. The application includes an asynchronous operation (`doSomethingAsync`) that might throw an error. The error handling is insufficient, leading to silent failures.  The solution demonstrates how to handle rejections appropriately using `try...catch` blocks and providing proper error responses to the client.

## How to Reproduce

1. Clone the repository.
2. Navigate to the directory.
3. Run `npm install` to install the dependencies.
4. Run `node bug.js` to start the server.
5. Send multiple requests to `http://localhost:3000/`.  Observe the console output. Notice that some requests will fail silently.