// CONTROL SHEET
const express = require('express'),
  app = express();

const PORT = process.env.PORT || 3000;

// Configurations
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

// Server
app.listen(PORT, function () {
  console.log('============================');
  console.log(`Server started at port ${PORT}`);
  console.log('============================');
});
