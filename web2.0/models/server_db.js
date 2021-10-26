var db = require('../db.js');

save_user_information = (data) => new Promise((resolve, reject) => {
    db.query('INSERT INTO lottery_information SET ?', data, function(err, results, fields){
        if(err){
            console.log(err);
            reject('could not insert into lottery_information');
        }
        resolve('Successful');
    })
})

get_total_amount = (data) => new Promise((resolve, reject) => {
    db.query('select sum(amount) as total_amount from lottery_information', data, function(err, results, fields){
        if(err){
            console.log(err);
            reject('could not get total amount from lottery_information');
        }
        resolve(results);
    })
})

module.exports = {
    save_user_information
}