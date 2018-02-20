'use strict';

module.exports = function(req, callback) {
  req.body = '';
  req.on('data', function(data) {
    req.body += data.toString();
  });
  req.on('end', function() {
    try {
      req.body = JSON.parse(req.body); // if this evaluates to tre then calls callback below if this line is commented out then it would call the callback even if there was an error
      // if req.body = JSON.parse(req.body); evaluates to true then callback will execute
      callback(null, req.body);
      // try is successful block
    } catch(err) {
      callback(err);
      // if there is an error it will automatically go to catch and skip the try
    }
  });
}

// follows error first callback pattern null, data

// node js will chunk data in stream and add it to req.body
// on data means that chunks over data are being sent

// json.parse turns string back to object