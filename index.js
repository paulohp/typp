var fs = require('fs');
var _ = require('lodash');
var files = require('./commom_files');

fs.readdir(process.argv[2], function(err, list){
  _.each(files.root, function(file){
    if(_.contains(list, file.file_name))
      console.log(file.application_type + ' application detected!');
  })
});