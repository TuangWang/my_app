// fileName: userSqlMapping.js
// CRUD sql 
var user = {
  	insert:'INSERT INTO user(first_name, last_name) VALUES (?,?)',
  	update:'update user set name=?, age=? where id=?',
  	delete: 'delete from user where id=?',
  	queryById: 'select * from user where id=?',
  	queryAll: 'select * from user'
};

module.exports = user;