function celsiusToFahrenheit(suhu) {
    // const data = req.body;
    // const suhu = data.suhu;
    let hasil = (suhu * 9/5) + 32;
    // console.log(fahrenheit);
    // res.status(200).send(fahrenheit);
    return hasil;
  }
  module.exports = celsiusToFahrenheit;