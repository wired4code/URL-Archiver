var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var url = require('url');
// require more modules/folders here!

exports.handleRequest = function (req, res) {

  var pathName = url.parse(req.url).pathname.split('/');

  if(req.method === 'GET'){

    if (req.url === '/') {
      res.writeHead(200, {"Content-Type": "text/html"});
      fs.readFile(archive.paths.index, 'utf8',  function (err, data) {
        res.end(data);
      });
    }

    else if (pathName[1].indexOf('www.') !== -1){
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(pathName[1]);
      archive.readListOfUrls();
    }

    else {
      res.writeHead(404);
      res.end('Got an error!!!!');
    }
  }


  if(req.method === 'POST'){
    res.writeHead(302);
    fs.writeFile(archive.paths.list, 'www.example.com\n', function(err, data) {
      res.end('Found');
    });
  }

};
