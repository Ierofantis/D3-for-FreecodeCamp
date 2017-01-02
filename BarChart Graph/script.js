$('document').ready(function() {

  var url = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json';
  var parseDate = d3.time.format("%Y").parse;
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  $.getJSON(url).success(function(jsonData) {
    var data = jsonData.data;

    console.log(data);
    console.log(JSON.stringify(jsonData));

    var margin = {
        top: 40,
        right: 20,
        bottom: 30,
        left: 40
      },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
    var axisScale = d3.scale.linear()
      .domain([1950, 2015])
      .range([38, 861]);

    var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
      .range([height, 0]);

    var xAxis = d3.svg.axis()
      .scale(axisScale)
      .orient('bottom');

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")

    var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    x.domain(data.map(function(d) {
      return d[0];
    }));
    y.domain([0, d3.max(data, function(d) {
      return d[1];
    })]);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end");

    svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) {
        return x(d[0]);
      })
      .attr("width", x.rangeBand())
      .attr("y", function(d) {
        return y(d[1]);
      })
      .attr("height", function(d) {
        return height - y(d[1]);
      })

    $('.bar').tipsy({
      gravity: 'w',
      html: true,
      title: function() {
        var d = this.__data__;
        return ("<span class='amount'>" + d[1] + "&nbsp;On " + d[0] + "</span>");
      }
    });
  });

  function type(d) {
    d[1] = +d[1];
    return d;
  }
});