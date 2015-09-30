var Xray = require("x-ray");

var xray = new Xray();

xray('http://google.com', 'title')(function(err, title) {
  console.log(title) // Google
})

xray('http://reddit.com', '.content')(function(err, title) {
  console.log(title)
})
