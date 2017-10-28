var mysql = require("mysql"); 
var connection = mysql.createConnection({   
  host: "localhost",   
  user: "root",   
  password: "ABC123",   
  database: "burgers_db" 
}); 

connection.connect(function(err) {   
  if (err) {    
  // when the program runs,if there is an error, this will trace the active stack frame at this point 
    console.error("error connecting: " + err.stack);     
    return;   
  }   
  // threadID is a thread handler which allows me to do something with the thread
  console.log("connected as id " + connection.threadId); 
}); 

module.exports = connection;