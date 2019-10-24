var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burger_db"
});

connection.connect(function (err) {
    if (err) {
        console.log("something went wrong" + err.stack);
        return;
    }
    console.log("you're connection id is" + connection.threadId);
});

module.exports = connection;