 
var express = require('express'); 
var app = express(); 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get('/', function (req, res, next) {
res.render('main.ejs',{
});
});

app.listen(3000, function() {
    console.log('server running on port 3000');
} ) 

app.post('/', callName); 
  
function callName(req, res) { 
    
    var spawn = require("child_process").spawn; 
      
    var process = spawn('python',["auto_enc.py", req.body.studid,req.body.sem] ); 
    console.log('1')

    process.stdout.on('data', function(data) {
        console.log('2')
        console.log(data)
      var s=JSON.parse(data.toString());
    	res.render('submit.ejs',{
 			'requests':s
          });
    })
    process.stderr.on('data', function(data){
        console.log('error from child: ' + data);
    });
    process.on('close', function(code){
        console.log('child exists with code: ' + code);
    });
    console.log('3')
} 