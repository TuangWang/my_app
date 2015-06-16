
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./userSqlMapping');

// 使用连接池，提升性能
var pool = mysql.createPool($util.extend({}, $conf.mysql));

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
	if(typeof ret === 'undefined') {
		res.json({
		  	code:'1',
		  	msg: '操作失败'
		});
	} else {
		res.json(ret);
	}
};

module.exports = {
	// add user to the store
  	add: function (req, res, next) {
 		pool.query('select * from user', function(err, rows, fields) {
 			if (err) throw err;
 			jsonWrite(res, rows);
 		});
	},

	// query all the userInfo
	queryAll: function(request, response, next) {


	}
};