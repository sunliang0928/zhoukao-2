/*
 * @Author: sunliang 
 * @Date: 2018-12-10 08:55:59 
 * @Last Modified by: sunliang
 * @Last Modified time: 2018-12-10 08:58:29
 */

var mysql = require('mysql');
var config = {
    user: 'root',
    password: 'root',
    database: 'zk2'
}
var pool = mysql.createPool(config);

module.exports = function(sql, arr, fn) {
    arr = arr || [];
    fn = fn ? fn : arr;
    pool.getConnection(function(err, con) {
        if (err) {
            return fn(err)
        } else {
            con.query(sql, arr, function(err, result) {
                if (err) {
                    return fn(err)
                } else {
                    fn(null, result);
                    con.release();
                }
            })
        }
    })
}