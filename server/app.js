/**
 * Created by paul on 3/1/15.
 */
var express = require('express');

var app = express();

var samples = require('./samples');

app.use('/samples', samples);
app.use(express.static('./'));

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

});