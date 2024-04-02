const express = require('express');
const app = express();
// const PORT = 1234;
// dibawah ini contoh port untuk di evennode
const PORT = process.env.PORT || 1234;
const path = require('path');
const converter = require('./controller/converter.js');
const history = require('./model/history.js')
app.use(express.urlencoded());
// ROUTING
app.get('/', (req,res)=>{
    res
    .status(200)
    .sendFile(path.join(__dirname, "/view/suhu.html"));
});
app.get('/lihat-history', history);
app.post('/hitung-suhu', converter);
app.listen(PORT, ()=>{
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
