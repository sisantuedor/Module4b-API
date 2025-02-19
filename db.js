const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "tv_watchlist",
    port: 5432,
});

module.exports = pool;
