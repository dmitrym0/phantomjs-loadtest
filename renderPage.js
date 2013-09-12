var system = require('system');
var url = system.args[1];
var page = require('webpage').create();
console.log("Capturing " + url);
page.open(url, function () {
    var parser = document.createElement('a');
    parser.href = url;
    console.log("Loaded " + url);
    var filename = parser.hostname + ".png";
    console.log("Dumping screenshot to " + filename);
    page.render(filename);
    phantom.exit();
});
