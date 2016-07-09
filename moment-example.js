/**
 * Created by shahzaib on 7/4/16.
 */
var moment = require('moment');
var now = moment();

console.log(now.format());
console.log("Current time is: " + now.format('MMM Do YYYY, hh:mm:ssA'));


var timestamp = 1468043490892;

var timeStampMoment = moment.utc(timestamp);
console.log(timeStampMoment.local().format('hh:mm:ss A'));