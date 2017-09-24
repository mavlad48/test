/**
 * Created by UserMavlad on 24.09.2017.
 */
const $ = require('jquery');
const str = require('./constants.js');

const App = function() {
    $('body').html('<p>Paragraph</p>');
    document.write(str);
};

const app = new App();
app.get = function() {};
