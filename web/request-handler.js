var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var url = require('url');
var addUrlToList = require('addUrlToList');
// require more modules/folders here!




exports.handleRequest = function (req, res) {

  var pathName = url.parse(req.url).pathname.split('/');
  console.log(pathName);

  if(req.method === 'GET'){

    if (req.url === '/') {
      res.writeHead(200, {"Content-Type": "text/html"});
      console.log('inside if');
      fs.readFile(archive.paths.index, 'utf8',  function (err, data) {
        res.end(data);
      });

    }

    else if (pathName[1].indexOf('www.') !== -1){
      res.writeHead(200, {"Content-Type": "text/html"});
      console.log('inside else if');
      res.end(pathName[1]);
    }

    else {
      res.writeHead(404);
      res.end('Got an error!!!!');
    }
  }

};

// exports.handleRequest = function (req, res) {
//   if(req.method === 'GET'){

//     if (req.url === '/') {
//       res.writeHead(200, {"Content-Type": "text/html"});
//       fs.createReadStream(archive.paths.index).pipe(res);
//     }

//     else if (req.url === 'www.google.com'){
//       res.writeHead(200, {"Content-Type": "text/html"});
//       fs.createReadStream(archive.paths.archivedSites + '/www.google.com/').pipe(res);
//     }

//     else {
//       res.writeHead(404);
//       res.end();
//     }
//   }

// };
