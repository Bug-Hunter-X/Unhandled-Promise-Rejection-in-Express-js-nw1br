const express = require('express');
const app = express();
app.get('/', (req, res) => {
  doSomethingAsync()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error('Error:', err);
      res.status(500).send('Internal Server Error');
    });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
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