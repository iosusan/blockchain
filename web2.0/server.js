const express = require('express');
const app = express();

const {save_user_information} = require('./models/server_db')

const path = require('path');
const publicPath = path.join(__dirname, './public');

// as of express 4.16+ there is no need to import bodyParser
//const bodyParser = require('body-parser');

/*handling all the parsing */
app.use(express.json());
app.use(express.static(publicPath));



app.post('/', async (req, res) => {
  var email = req.body.email;
  var amount = req.body.amount;
  if (amount <= 1){
    return_info = {}
    return_info.error = true;
    return_info.message = "The amount should be greater than 1."
    return res.send(return_info)
  }
  try{
   var result = await save_user_information({"amount": amount, "email": email});
   res.send(result);
  }catch(err){
    console.log(err);
  }

});

app.post('/test', (req, res) => {
    res.json({requestBody:req.body})
})

app.get('/get_total_amount', async (req, res) => {
  var result = await get_total_amount();
  console.log(result);
  return res.send(result)
})

app.listen(3000, ()=>{
    console.log('server is running on port 3000');

})