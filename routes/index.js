

/*
 * GET home page.
 */
module.exports = function(app){

// example app route call go to localhost:3000/name to get the json back
  app.get('/api/name', function(req, res){
    res.json({
      "records": [
        {
          "Name" : "Alfreds Futterkiste",
          "City" : "Berlin",
          "Country" : "Germany"
        },
        {
          "Name" : "Berglunds snabbköp",
          "City" : "Luleå",
          "Country" : "Sweden"
        },
        {
          "Name" : "Centro comercial Moctezuma",
          "City" : "México D.F.",
          "Country" : "Mexico"
        },
        {
          "Name" : "Ernst Handel",
          "City" : "Graz",
          "Country" : "Austria"
        },
        {
          "Name" : "FISSA Fabrica Inter. Salchichas S.A.",
          "City" : "Madrid",
          "Country" : "Spain"
        },
        {
          "Name" : "Galería del gastrónomo",
          "City" : "Barcelona",
          "Country" : "Spain"
        },
        {
          "Name" : "Island Trading",
          "City" : "Cowes",
          "Country" : "UK"
        },
        {
          "Name" : "Königlich Essen",
          "City" : "Brandenburg",
          "Country" : "Germany"
        },
        {
          "Name" : "Laughing Bacchus Wine Cellars",
          "City" : "Vancouver",
          "Country" : "Canada"
        },
        {
          "Name" : "Magazzini Alimentari Riuniti",
          "City" : "Bergamo",
          "Country" : "Italy"
        },
        {
          "Name" : "North/South",
          "City" : "London",
          "Country" : "UK"
        },
        {
          "Name" : "Paris spécialités",
          "City" : "Paris",
          "Country" : "France"
        },
        {
          "Name" : "Rattlesnake Canyon Grocery",
          "City" : "Albuquerque",
          "Country" : "USA"
        },
        {
          "Name" : "Simons bistro",
          "City" : "København",
          "Country" : "Denmark"
        },
        {
          "Name" : "The Big Cheese",
          "City" : "Portland",
          "Country" : "USA"
        },
        {
          "Name" : "Vaffeljernet",
          "City" : "Århus",
          "Country" : "Denmark"
        },
        {
          "Name" : "Wolski Zajazd",
          "City" : "Warszawa",
          "Country" : "Poland"
        }
      ]
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