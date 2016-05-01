module.exports.about = function(req, res, next) {
  res.render('generic-text', {
    title: 'About Loc8r',
    content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nDIY kickstarter kinfolk pickled sustainable. Scenester truffaut keytar trust fund yr selfies craft beer. Fixie direct trade tattooed williamsburg, sustainable squid literally polaroid before they sold out. Health goth raw denim venmo roof party. Truffaut vegan cardigan, man braid put a bird on it irony bespoke. Kale chips PBR&B knausgaard, sustainable distillery ennui selfies swag. Swag chia fanny pack listicle kitsch YOLO, wolf 8-bit ugh.'
  });
};
