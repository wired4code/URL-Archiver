var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
// require more modules/folders here!

var HTML;

fs.readFile(__dirname + '/public/index.html', 'utf8',  function (err, data) {
  HTML = data;
});



//html = JSON.stringify(html);

//console.log(html);
exports.handleRequest = function (req, res) {
  if(req.method === 'GET'){
    res.writeHead(200, {"Content-Type": "text/html"});
    /*console.log('before: ' + html)
    var HTML = JSON.stringify(html);*/
    console.log('html: ' + HTML);
    res.write(HTML);
    res.end(archive.paths.list);
  }

};
