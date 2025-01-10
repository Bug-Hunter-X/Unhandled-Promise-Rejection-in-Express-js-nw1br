const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Here's where the error handling is lacking. 
    // This will only log the error to the console and still respond with a 200 OK status code.
    console.error('Error:', err);
  });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    // Simulate a database error
    const shouldFail = Math.random() < 0.5;  
    if (shouldFail) {
        reject(new Error('Database error'));
    } else {
        resolve();
    }
  });
}

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));