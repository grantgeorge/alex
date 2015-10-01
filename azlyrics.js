var Xray = require("x-ray");

var x = Xray();

x('http://www.azlyrics.com/t/taylorswift.html',
  '#listAlbum', {
    albums: x('.album', [{
      title: ''
    }]),
    songs: x('#listAlbum > a', [{
      title: ''
    }])
  }
)
  (function(err, output) {
    console.log(output);
  })
  .write('./results.json');
