var querystring = require('querystring');
const http = require('http')

const data = querystring.stringify({
    fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
    move: "d7d5",
    format: "json"
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/game?fen=&move=&format=json',
  method: 'GET',
  headers: {
    'cache-control': 'no-cache',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': data.length
  }
}

// request object
var req = http.request(options, function (res) {
    var result = '';
    res.on('data', function (chunk) {
      result += chunk;
      //console.log(result);
    });
    res.on('end', function () {
      console.log(result);
    });
    res.on('error', function (err) {
      console.log(err);
    })
});
   
  // req error
  req.on('error', function (err) {
    console.log(err);
  });
   
  //send request witht the postData form
  req.write(data);
  req.end();




// const http = require('http');

// http.get('http://localhost:5000/game?fen=&move=&format=json', (resp) => {
//   let data = '';

//   // A chunk of data has been recieved.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(JSON.parse(data));
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });