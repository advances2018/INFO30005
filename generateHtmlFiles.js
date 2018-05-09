var fs = require('fs');

//get the current number of posts from the database and +1 the id
//then update the database with the file link

function buildHtml(req) {
  var header = '';
  var body = '<h1>Hello World!</h1>';

  // concatenate header string
  // concatenate body string

  return '<!DOCTYPE html>'
       + '<html><header>' + header + '</header><body>' + body + '</body></html>';
};

//var currentPath = process.cwd();

//var fileName = currentPath + '/activities/test/test.html';
//var stream = fs.createWriteStream(fileName);

//stream.once('open', function(fd) {
//  var html = buildHtml();

//  stream.end(html);
//});


var fs = require('fs');

//activity number should be based on the number of activities found in the database
var actvityNum = "1"
var currentPath = process.cwd();


fs.writeFile(currentPath + '/activities/test/activity' + actvityNum + '.html', buildHtml(), function (err) {
  if (err) throw err;
  console.log('New File!');
});