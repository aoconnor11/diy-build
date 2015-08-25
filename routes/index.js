

/*
 * GET home page.
 */
module.exports = function(app){

  var fs = require('fs');
  var jsonfile = require('jsonfile');

  app.post('/api/name', function(req, res){
    jsonfile.writeFile('public/data/test.json',req.body, function(err){
      console.error(err);
    })
  });



// example app route call go to localhost:3000/name to get the json back
  app.get('/api/name', function(req, res){
  fs.readFile('public/data/test.json', function(err, data){
    var myJson = JSON.parse(data);
    res.json(myJson);
  });

  });

  //fill in more routes here - above the catchall route!


// catchall route - this goes last
  app.get('/', function(req, res, next){
    res.render('index',{title:'Express'});
  });

// I left these commented in but you can't use them in here so you can get rid of them....
  /*
   // serve index and view partials
   router.get('/', routes.index);
   */

  /*
   // redirect all others to the index (HTML5 history)
   router.get('*', routes.index);
   */

};