$('document').ready(function() {

  var url = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json';

  $.getJSON(url).success(function(jsonData) {
    var data = jsonData;
    formatTime = d3.time.format("%H:%M"),
      formatMinutes = function(d) {
        var t = new Date(2012, 0, 1, 0, d)
        t.setSeconds(t.getSeconds() + d);
        return formatTime(t);
      };
    var margin = {
        top: 20,
        right: 15,
        bottom: 60,
        left: 60
      },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    var y = d3.scale.linear()
      .domain([1, 36])
      .range([0, height]);

    var x = d3.scale.linear()
      .domain([60 * 3.5, 0])

    .range([0, width]);
    var chart = d3.select('body')
      .append('svg:svg')
      .attr('width', width + margin.right + margin.left)
      .attr('height', height + margin.top + margin.bottom)
      .attr('class', 'chart')

    var main = chart.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
      .attr('width', width)
      .attr('height', height)
      .attr('class', 'main')

    // draw the x axis
    var xAxis = d3.svg.axis()
      .scale(x)
      .ticks(6)
      .orient('bottom')
      .tickFormat(formatMinutes);

    main.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .attr('class', 'main axis date')
      .call(xAxis);

    // draw the y axis
    var yAxis = d3.svg.axis()
      .scale(y)
      .ticks(8)
      .orient('left');

    main.append('g')
      .attr('transform', 'translate(0,0)')
      .attr('class', 'main axis date')
      .call(yAxis);

    var g = main.append("svg:g");

    g.selectAll(".scatter-dots")
      .data(data)
      .enter().append("circle")
      .attr("class", "scatter-dots")
      .attr("cx", function(d) {
        return x(d.Seconds - 2210);
      })
      .attr("cy", function(d) {
        return y(d.Place);
      })
      .attr("r", 8);
       $('.scatter-dots').tipsy({
      gravity: 'w',
      html: true,
      title: function() {
        var d = this.__data__;
        return ("<span class='amount'>" + d.Name + "&nbsp;was " + d.Doping + "&nbsp;at " +d.Year+"</span>");
      }
    });
  });

  });
