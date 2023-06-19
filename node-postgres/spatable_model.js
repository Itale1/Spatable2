
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '1qasdfghj',
  port: 5432,
});

// https://learn.javascript.ru/promise
const getSpatable = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM Spatable ORDER BY distance ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
      // console.log(results.rows);
    })
  }) 
}


module.exports = {
  getSpatable,

}

