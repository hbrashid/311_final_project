const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getUsers = (req, res) => {
  
  pool.query("SELECT * FROM customers", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}
const createCustomer = (req, res) => {
   
    const {  emailAddress, lastName, firstName, phone } = req.body;
    let sql = "INSERT INTO customers (email_address, last_name, first_name, phone) VALUES (?, ?, ?, ?)"
    
    sql = mysql.format(sql, [ emailAddress, lastName, firstName, phone])
  
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.json({ newId: results.insertId });
    })
  }




  module.exports = {
    createCustomer,
    getUsers
  }