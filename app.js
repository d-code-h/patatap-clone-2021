// CONTROL SHEET
const   express         =   require('express'),
        app             =   express();

// Configurations
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

// Server
app.listen(3000, function(){
    console.log('============================');
    console.log('Server started at port 3000');
    console.log('============================');
});