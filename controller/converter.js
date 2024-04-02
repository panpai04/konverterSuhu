const cToF = require('../controller/cToF.js');
const cToR = require('../controller/cToR.js');
const rToC = require('../controller/rToC.js');
const rToF = require('../controller/rToF.js');
const fToR = require('../controller/fToR.js');
const fToC = require('../controller/fToC.js');
const inHistory = require('./inputHistory.js')
function converter(req, res) {
    const data = req.body;
    const suhu = data.suhu;
    const jenis = data.jenis;
    if (jenis == "cToF") {
        let hasil = cToF(suhu);
        let jenisKnv = "Celcius ke Fahrenheit";
        inHistory(hasil,suhu,jenisKnv);
        res.status(200).send(`Hasil konversi suhu ${suhu}° Celcius adalah: ${hasil}° Fahrenheit`);
        return hasil;
    }else if (jenis == "cToR") {
        let hasil = cToR(suhu);
        let jenisKnv = "Celcius ke Reamur";
        inHistory(hasil,suhu,jenisKnv);
        res.status(200).send(`Hasil konversi suhu ${suhu}° Celcius adalah: ${hasil}° Reamur`);
        return hasil;
    }else if (jenis == "rToC") {
        let hasil = rToC(suhu);
        let jenisKnv = "Reamur ke Celcius";
        inHistory(hasil,suhu,jenisKnv);
        res.status(200).send(`Hasil konversi suhu ${suhu}° Reamur adalah: ${hasil}° Celsius`);
        return hasil;
    }else if (jenis == "rToF") {
        let hasil = rToF(suhu);
        let jenisKnv = "Reamur ke Fahrenheit";
        inHistory(hasil,suhu,jenisKnv);
        res.status(200).send(`Hasil konversi suhu ${suhu}° Reamur adalah: ${hasil}° Fahrenheit`);
        return hasil;
    }else if (jenis == "fToR") {
        let hasil = fToR(suhu);
        let jenisKnv = "Fahrenheit ke Reamur";
        inHistory(hasil,suhu,jenisKnv);
        res.status(200).send(`Hasil konversi suhu ${suhu}° Fahrenheit adalah: ${hasil}° Reamur`);
        return hasil;
    }else if (jenis == "fToC") {
        let hasil = fToC(suhu);
        let jenisKnv = "Fahrenheit ke Celcius";
        inHistory(hasil,suhu,jenisKnv);
        res.status(200).send(`Hasil konversi suhu ${suhu}° Fahrenheit adalah: ${hasil}° Celcius`);
        return hasil;
    }else {
        console.log("Silahkan isi dengan benar!");
    }
}
module.exports = converter;