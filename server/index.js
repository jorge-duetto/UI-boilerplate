const express = require('express');
const PORT = '8081';
// Express
const app = express();

app.get('/', (req, res) => {
  res.send('hello from the express server')
}); 

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`); // eslint-disable-line no-console
  console.log('Press Ctrl+C to quit.'); // eslint-disable-line no-console
});
