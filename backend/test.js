const mysql = require("mysql");

var db = mysql.createConnection({
  host: '34.132.46.65',
  user: 'root',
  password: 'JumpingJaks!123',
  database: 'cs411team33',
})

const sqlSelect = "SELECT * FROM Recipes";
db.query(sqlSelect, (err, result) => {
  console.log(result);
});
