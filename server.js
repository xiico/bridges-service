var  schedule  =  require('node-schedule');
require('dotenv').config({ path: __dirname + '/.env' });
var log = require('./modules/log');
var request = require('./modules/request');

console.log(log.timeStamp() + " service starting...");

var everyHour = schedule.scheduleJob('5 */1 * * *', function () {
    request.get('/evaluationnotification', (err,result) => {
        if(err) return console.error(log.timeStamp() + ' err:', err);
        console.log(log.timeStamp() + ' eval:', result);
    });
});

var everyTwenty = schedule.scheduleJob('*/20 * * * *', function () {
    request.get('/testapi/luckynumber', (err,result) => {
        if(err) return console.error(log.timeStamp() + ' err:', err);
        console.log(log.timeStamp() + ' lucky:', result);
    });
});

var everyDay1 = schedule.scheduleJob('0 8 * * *', function () {
    console.log(log.timeStamp() + ' reminder:', "TO DO");
});

// var everySixHour = schedule.scheduleJob('5 */6 * * *', function () {
//     db.clanUpdate();
// });

// var everyDay1 = schedule.scheduleJob('10 0 * * *', function () {
//     db.playerUpdate();
// });

// var everyDay2 = schedule.scheduleJob('15 0 * * *', function () {    
//     db.countryRankUpdate();
// });

console.log(log.timeStamp() + " service started...");