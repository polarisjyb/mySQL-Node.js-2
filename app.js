const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const connection = require('./database');

app.get("/", (req, res) => {
  // 데이터 베이스  테이블 이름
  let sql = "SELECT * FROM MEMBER_NAME";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.send(results);
  })
});


app.listen(port, () => {
  console.log("Server started on Port 5000");
  connection.connect(function(err){
    if (err) throw err;
    console.log('Database connected!');
  })
});