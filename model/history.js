const client = require('./dbConnection')
async function history(req,res){
    //ambil data dari db
    const data = await client.query(`
    SELECT * FROM history;
    `);
    // console.log(data.rows);
    // console.log(data);
    // kasih response
    res.status(200).json({data: [...data.rows]});
}
module.exports = history;