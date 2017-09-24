/**
 * Created by UserMavlad on 24.09.2017.
 */
var $ = require('jquery');
var str = require('./constants.js');

var App  = function() {

    $('body').html('<p>Paragraph</p>');
    document.write(str);

};

var App = new App();