var fs = require('fs');
var path = require('path');
var _ = require('underscore');
//var $ = require('jQuery');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt'),
  index: path.join(__dirname, '../web/public/index.html')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!
//
// fs.readFile(archive.paths.index, 'utf8',  function (err, data) {
/*        res.end(data);
      });*/

exports.readListOfUrls = function(callback){
  fs.readFile(exports.paths.list, function(err, sites) {
    sites = sites.toString().split('\n');
    if(callback) {
      callback(sites);
    }
  });
};

exports.isUrlInList = function(url, callback){
  exports.readListOfUrls(function(sites) {
    var found = _.any(sites, function(site) {
      return site.match('example1.com');
    });
    callback(found);
  });
};

exports.addUrlToList = function(url){
  fs.writeFile(exports.paths.list, url, 'utf8');
};

exports.isUrlArchived = function(){
};

exports.downloadUrls = function(){
};
