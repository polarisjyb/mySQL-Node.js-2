const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'localhost',
  // mysql 데이터베이스 이름
  database: 'project_member',
  user: 'root',
  password: 'root'
});

module.exports = connection;