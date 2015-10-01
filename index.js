var Xray = require("x-ray");

var x = Xray();

// // x('https://www.google.com/search?gws_rd=cr,ssl&as_qdr=all&q=%20%20%22Location%20*%20San%20Francisco%20Bay%20Area%22%20site%3Alinkedin.com%2Fin%2F%20OR%20site%3Alinkedin.com%2Fpub%2F%20-site%3Alinkedin.com%2Fpub%2Fdir%2F',
// //   '.f.slp',
// //   [{
// //     title: ''
// //   }]
// //   )
// //   .paginate('a[id="pnnext"]')
// //   .limit(3)
// //   (function(err, output) {
// //     console.log(output)
// //   });

// x('https://www.google.com/search?gws_rd=cr,ssl&as_qdr=all&q=%20%20%22Location%20*%20San%20Francisco%20Bay%20Area%22%20site%3Alinkedin.com%2Fin%2F%20OR%20site%3Alinkedin.com%2Fpub%2F%20-site%3Alinkedin.com%2Fpub%2Fdir%2F',
//   '.g',
//     [{
//       title: '.r',
//       info: '.f.slp',
//       description: '.st'
//     }]
//   )
//   .paginate('td > a:last-child@href')
//   (function(err, data){
//     console.log($('td > a:last-child@href'));
//   })
//   .limit(10)
//   .write('./results.json');

x('https://www.google.com/#q=test&start=100',
  'body','#pnnext'
  )
  (function(err, output) {
  console.log(output);
});

// x('https://news.ycombinator.com/',
//   'a[rel="nofollow"]:last-child@href'
// )(function(err, output) {
//   console.log(output)});

