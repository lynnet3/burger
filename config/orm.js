var connection = require("../config/connection.js");

function printQuwationMarks(nom) {
    var arr = [];

    for (var i = 0; i < nom; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}
var orm = {
selecetAll:function (tableInput, cb) {
    var queryString = "SELCET * FROM" + tableInput + ";";
    connection.query(queryString, function (err, result) {
        if (err){
            throw err;
        }
        cb(result);
    });
},
insertOne
undateOne
}
module.exports = orm;