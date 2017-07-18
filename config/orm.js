// Import MySQL connection.
var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function(table, vals, cb) {
    var queryString = "INSERT INTO " + table + " (name) VALUES ('" + vals + "');";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  update: function(table, condition, cb) {
    var queryString = "UPDATE " + table + " SET devoured=true WHERE id=" + condition + ";";
    console.log("query: "+ queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }  
};

// Export the orm object for the model (cat.js).
module.exports = orm;
