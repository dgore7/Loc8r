var mongoose = require('mongoose');
var Loc = mongoose.model('Location');
// var Rev = mongoose.model('Review');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.reviewCreate = function(req,res){
  sendJsonResponse(res,200,{"status": "success"});
};

module.exports.reviewsReadOne = function(req,res){
  if (req.params && req.params.locationid && req.params.reviewid){
    Loc
      .findById(req.params.locationid)
      .select('name reviews')
      .exec(
        function(err, location){
          var review, response;
          if (!location) {
            sendJsonResponse(res, 404, {
              "message": "locationid not found"
            });
            return;
          } else if (err) {
            sendJsonResponse(res, 400, err);
            return;
          }
          if (location.reviews && location.reviews.length > 0) {
            console.log(location.reviews);
            console.log(req.params.reviewid);
            for (var i=0; i<location.reviews.length; i++){
              if (location.reviews[i].id == req.params.reviewid) review = location.reviews[i];
            }
            console.log(review);
            if (!review) {
              sendJsonResponse(res, 404, {
                "message": "reviewid not found"
              });
            } else {
              response = {
                location : {
                  name : location.name,
                  id : req.params.locationid
                },
                review : review
              };
              sendJsonResponse(res, 200, response);
            }
          } else {
            sendJsonResponse(res, 404, {
              "message": "No reviews found"
            });
          }
        }
      );
  } else {
    sendJsonResponse(res, 404, {
      "message": "Not found, locationid and reviewid are both required"
    });
  }
};

module.exports.reviewsUpdateOne = function(req,res){
  sendJsonResponse(res,200,{"status": "success"});
};

module.exports.reviewsDeleteOne = function(req,res){
  sendJsonResponse(res,200,{"status": "success"});
};
