const express = require('express');
const app = express();

// as of express 4.16+ there is no need to import bodyParser
//const bodyParser = require('body-parser');

/*handling all the parsing */
app.use(express.json());



app.post('/', (req, res) => {
  var email = req.body.email;
  var amount = req.body.amount;
  console.log(email);
  console.log(amount);
  res.send({'amount' :amount, 'email': email});

});

app.post('/test', (req, res) => {
    res.json({requestBody:req.body})
})

app.listen(3000, ()=>{
    console.log('server is running on port 3000');

})