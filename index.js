const express = require('express');
const bodyParser = require('body-parser');

//IMPORT_MODELS
require('./models/Lawsuits');
//IMPORT ROUTES
require('./routes/lawsuitRoutes')(app);

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});