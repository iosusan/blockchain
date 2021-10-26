var mysql = require('mysql');
var dbconfig = {
    host: '127.0.0.1',
    user: 'web3test',
    password: '#e#eMast3r',
    database: 'web3test'
}

var connection;

function handleDisconnect(){
    connection = mysql.createConnection(dbconfig);
    connection.connect(function(err){
        if(err){
            console.log('error when connecting to database.');
            console.log(err);
            setTimeout(handleDisconnect, 2000);
        }
    });
    connection.on('error', function(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            handleDisconnect();
        }else{
            throw err;
        }
    })

}

handleDisconnect();

module.exports = connection;
