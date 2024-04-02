const client = require('../model/dbConnection')
async function inputHistory(hasil,suhu,jenisKnv){
    const date = new Date();
    //input data
    await client.query(`INSERT INTO history (suhu_awal,jenis_konversi,hasil_konversi,waktu)
    VALUES ($1, $2, $3, $4)
    `,[
        +suhu+'\u00B0',
        jenisKnv,
        +hasil+'\u00B0',
        date
    ]);
    //kasih respone
    console.log('sukses')
};
module.exports = inputHistory;