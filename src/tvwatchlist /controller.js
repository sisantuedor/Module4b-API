const pool = require('../../db');
const queries = require ('./queries');

//Get All Data 
const gettv_watchlist = (req, res) => {
    pool.query(queries.gettv_watchlist,(error, results) => {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

//Get Data by Param 
//Add new Data by param 
//Modify Data by Param 
module.exports = {
    gettv_watchlist,
};