const cors = require('cors');
const express = require('express');

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.post('/enroll', (req, res) => {
  res.status(401).send({ message: 'Error!' });
});

app.listen(PORT);
