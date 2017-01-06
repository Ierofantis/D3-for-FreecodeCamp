//Customizable SVG map visualizations for the web in a single Javascript file using D3.js
//http://datamaps.github.io
//I have used d3 v3.5.17, topojson v1.6.20,datamaps v0.5.7,jquery v2.2.4.min.js

var url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json";

var bombMap = new Datamap({
  element: document.getElementById('map_bombs'),
  scope: 'world',
  geographyConfig: {
    popupOnHover: false,
    highlightOnHover: false
  },
  fills: {
    defaultFill: '#EDDC4E'
  }
});

d3.json(url, function(error, dataset) {

  if (error) throw error;

  var bombs = [];

  for (var feature of dataset.features) {

    if (feature.geometry) {

      var bomb = {
        latitude: feature.geometry.coordinates[1],
        longitude: feature.geometry.coordinates[0],
        radius: 5,
        fillKey: "red",
        location: feature.properties.name,
        mass: feature.properties.mass,
        year: feature.properties.year,
        recclass: feature.properties.recclass,
        reclat: feature.properties.reclat,
        status: feature.properties.fall
      };

      bombs.push(bomb);
    }
  }

  bombMap.bubbles(bombs, {
    popupTemplate: function(geo, data) {
      return "<div class='hoverinfo'>" +
        "Location: " + data.location + "<br>" +
        "Mass: " + data.mass + "<br>" +
        "Year: " + data.year + "<br>" +
        "Recclass: " + data.recclass + "<br>" +
        "Reclat: " + data.reclat + "<br>" +
        "Status: " + data.status + "<br>" +
        "</div>";
    }
  });
});