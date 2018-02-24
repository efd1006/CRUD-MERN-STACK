var mongo = require("mongoose");  
var db =   
mongo.connect("mongodb://localhost/samplerestapi", function(err, response){  
   if(err){ console.log('Failed to connect to ' + db); }  
   else{ console.log('Connected to ' + db, ' + ', response); }  
});  
  
  
module.exports =db;  
  
// samplerestapi is database name  
// localhost is your mongo server name  
