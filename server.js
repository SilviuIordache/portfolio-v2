const express = require('express');
const path = require('path');

// app init
const app = express();

// landing site
app.use('/', express.static(path.join(__dirname, './site/')));


const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});