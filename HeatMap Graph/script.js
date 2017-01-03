var margin = {
    top: 50,
    right: 0,
    bottom: 100,
    left: 30
  },
  width =900- margin.left - margin.right,
  height = 600 - margin.top - margin.bottom,
  gridSize = Math.floor(width / 24),
  legendElementWidth = gridSize * 2,
  buckets = 9,
  colors = ["#c3dd8a", "#ddc48a", "#ddab8a", "#db6547", "#e33509", "#7e0000"],
  months = ["Ja", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  times = [ "1780", "1790", "1800"," 1810", "1820", "1830", "1840", "1850", "1860", "1870", "1880", "1890", "1900 ","1910"," 1920", "1930"," 1940","1950", "1960", "1970", "1980", "1990", "2000", "2010"];
var data="year,month,variance\n\
1,1,16\n\
1,2,20\n\
1,3,0\n\
1,4,0\n\
1,5,0\n\
1,6,2\n\
1,7,0\n\
1,8,9\n\
1,9,25\n\
1,10,49\n\
1,11,57\n\
1,12,61\n\
1,13,37\n\
1,14,66\n\
1,15,70\n\
1,16,55\n\
1,17,51\n\
1,18,55\n\
1,19,17\n\
1,20,20\n\
1,21,9\n\
1,22,4\n\
1,23,0\n\
1,24,12\n\
2,1,6\n\
2,2,2\n\
2,3,0\n\
2,4,0\n\
2,5,0\n\
2,6,2\n\
2,7,4\n\
2,8,11\n\
2,9,28\n\
2,10,49\n\
2,11,51\n\
2,12,47\n\
2,13,38\n\
2,14,65\n\
2,15,60\n\
2,16,50\n\
2,17,65\n\
2,18,50\n\
2,19,22\n\
2,20,11\n\
2,21,12\n\
2,22,9\n\
2,23,0\n\
2,24,13\n\
3,1,5\n\
3,2,8\n\
3,3,8\n\
3,4,0\n\
3,5,0\n\
3,6,2\n\
3,7,5\n\
3,8,12\n\
3,9,34\n\
3,10,43\n\
3,11,54\n\
3,12,44\n\
3,13,40\n\
3,14,48\n\
3,15,54\n\
3,16,59\n\
3,17,60\n\
3,18,51\n\
3,19,21\n\
3,20,16\n\
3,21,9\n\
3,22,5\n\
3,23,4\n\
3,24,7\n\
4,1,0\n\
4,2,0\n\
4,3,0\n\
4,4,0\n\
4,5,0\n\
4,6,2\n\
4,7,4\n\
4,8,13\n\
4,9,26\n\
4,10,58\n\
4,11,61\n\
4,12,59\n\
4,13,53\n\
4,14,54\n\
4,15,64\n\
4,16,55\n\
4,17,52\n\
4,18,53\n\
4,19,18\n\
4,20,3\n\
4,21,9\n\
4,22,12\n\
4,23,2\n\
4,24,8\n\
5,1,2\n\
5,2,0\n\
5,3,8\n\
5,4,2\n\
5,5,0\n\
5,6,2\n\
5,7,4\n\
5,8,14\n\
5,9,31\n\
5,10,48\n\
5,11,46\n\
5,12,50\n\
5,13,66\n\
5,14,54\n\
5,15,56\n\
5,16,67\n\
5,17,54\n\
5,18,23\n\
5,19,14\n\
5,20,6\n\
5,21,8\n\
5,22,7\n\
5,23,0\n\
5,24,8\n\
6,1,2\n\
6,2,0\n\
6,3,2\n\
6,4,0\n\
6,5,0\n\
6,6,0\n\
6,7,4\n\
6,8,8\n\
6,9,8\n\
6,10,6\n\
6,11,14\n\
6,12,12\n\
6,13,9\n\
6,14,14\n\
6,15,0\n\
6,16,4\n\
6,17,7\n\
6,18,6\n\
6,19,0\n\
6,20,0\n\
6,21,0\n\
6,22,0\n\
6,23,0\n\
6,24,0\n\
7,1,7\n\
7,2,6\n\
7,3,0\n\
7,4,0\n\
7,5,0\n\
7,6,0\n\
7,7,0\n\
7,8,0\n\
7,9,0\n\
7,10,0\n\
7,11,2\n\
7,12,2\n\
7,13,5\n\
7,14,6\n\
7,15,0\n\
7,16,4\n\
7,17,0\n\
7,18,2\n\
7,19,10\n\
7,20,7\n\
7,21,0\n\
7,22,19\n\
7,23,9\n\
7,24,4\n\
8,1,7\n\
8,2,6\n\
8,3,0\n\
8,4,0\n\
8,5,0\n\
8,6,0\n\
8,7,0\n\
8,8,0\n\
8,9,0\n\
8,10,0\n\
8,11,2\n\
8,12,2\n\
8,13,5\n\
8,14,6\n\
8,15,0\n\
8,16,4\n\
8,17,0\n\
8,18,2\n\
8,19,10\n\
8,20,7\n\
8,21,0\n\
8,22,19\n\
8,23,9\n\
8,24,4\n\
9,1,7\n\
9,2,6\n\
9,3,0\n\
9,4,0\n\
9,5,0\n\
9,6,0\n\
9,7,0\n\
9,8,0\n\
9,9,0\n\
9,10,0\n\
9,11,2\n\
9,12,2\n\
9,13,5\n\
9,14,6\n\
9,15,0\n\
9,16,4\n\
9,17,0\n\
9,18,2\n\
9,19,10\n\
9,20,7\n\
9,21,0\n\
9,22,19\n\
9,23,9\n\
9,24,4\n\
10,1,7\n\
10,2,6\n\
10,3,0\n\
10,4,0\n\
10,5,0\n\
10,6,0\n\
10,7,0\n\
10,8,0\n\
10,9,0\n\
10,10,0\n\
10,11,2\n\
10,12,2\n\
10,13,5\n\
10,14,6\n\
10,15,0\n\
10,16,4\n\
10,17,0\n\
10,18,2\n\
10,19,10\n\
10,20,7\n\
10,21,0\n\
10,22,19\n\
10,23,9\n\
10,24,4\n\
11,1,7\n\
11,2,6\n\
11,3,0\n\
11,4,0\n\
11,5,0\n\
11,6,0\n\
11,7,0\n\
11,8,0\n\
11,9,0\n\
11,10,0\n\
11,11,2\n\
11,12,2\n\
11,13,5\n\
11,14,6\n\
11,15,0\n\
11,16,4\n\
11,17,0\n\
11,18,2\n\
11,19,10\n\
11,20,7\n\
11,21,0\n\
11,22,19\n\
11,23,9\n\
11,24,4\n\
12,1,7\n\
12,2,6\n\
12,3,0\n\
12,4,0\n\
12,5,0\n\
12,6,0\n\
12,7,0\n\
12,8,0\n\
12,9,0\n\
12,10,0\n\
12,11,2\n\
12,12,2\n\
12,13,5\n\
12,14,6\n\
12,15,0\n\
12,16,4\n\
12,17,0\n\
12,18,2\n\
12,19,10\n\
12,20,7\n\
12,21,0\n\
12,22,19\n\
12,23,9\n\
12,24,4";

var data1 = d3.csv.parse(data);

var dataArray = d3.csv.parse(data,
  function(d) {
    return {
      year: +d.year,
      month: +d.month,
      variance: +d.variance
    };
  });

var dataHandler = function(error, data) {
  console.log("data=", data);
  var colorScale = d3.scale.quantile()
    .domain([0, buckets - 1, d3.max(data, function(d) {
      return d.value;
    })])
    .range(colors);

  var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var dayLabels = svg.selectAll(".dayLabel")
    .data(months)
    .enter().append("text")
    .text(function(d) {
      return d;
    })
    .attr("x", 0)
    .attr("y", function(d, i) {
      return i * gridSize;
    })
    .style("text-anchor", "end")
    .attr("transform", "translate(-6," + gridSize / 1.5 + ")")
    .attr("class", function(d, i) {
      return ((i >= 0 && i <= 4) ? "dayLabel mono axis axis-workweek" : "dayLabel mono axis");
    });

  var timeLabels = svg.selectAll(".timeLabel")
    .data(times)
    .enter().append("text")
    .text(function(d) {
      return d;
    })
    .attr("x", function(d, i) {
      return i * gridSize;
    })
    .attr("y", 0)
    .style("text-anchor", "middle")
    .attr("transform", "translate(" + gridSize / 2 + ", -6)")
    .attr("class", function(d, i) {
      return ((i >= 7 && i <= 16) ? "timeLabel mono axis axis-worktime" : "timeLabel mono axis");
    });

  var heatMap = svg.selectAll(".hour")
    .data(data)
    .enter().append("rect")
    .attr("x", function(d) {
      return (d.month - 1) * gridSize;
    })
    .attr("y", function(d) {
      return (d.year - 1) * gridSize;
    })
    .attr("rx", 4)
    .attr("ry", 4)
    .attr("class", "hour bordered")
    .attr("width", gridSize)
    .attr("height", gridSize)
    .style("fill", colors[0]);

  heatMap.transition().duration(3000)
    .style("fill", function(d) {
      return colorScale(d.variance);
    });

  heatMap.append("title").text(function(d) {
    return d.variance;
  });

  var legend = svg.selectAll(".legend")
    .data([0].concat(colorScale.quantiles()), function(d) {
      return d;
    })
    .enter().append("g")
    .attr("class", "legend");

  legend.append("rect")
    .attr("x", function(d, i) {
      return legendElementWidth * i;
    })
    .attr("y", height)
    .attr("width", legendElementWidth)
    .attr("height", gridSize / 2)
    .style("fill", function(d, i) {
      return colors[i];
    });

  legend.append("text")
    .attr("class", "mono")
    .text(function(d) {
      return "= " + Math.round(d);
    })
    .attr("x", function(d, i) {
      return legendElementWidth * i;
    })
    .attr("y", height + gridSize);
}

dataHandler(null, dataArray);
