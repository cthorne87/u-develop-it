const express = require('express');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 3001;
const app = express();

app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });