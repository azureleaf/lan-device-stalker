const squareSize = 30;
const squarePadding = 0.1;

// set the dimensions and margins of the graph
const margin = { top: 30, right: 30, bottom: 100, left: 100 },
  // Graph area
  width = squareSize * timestamps.length,
  height = squareSize * macAddrs.length;

// append the svg object to the body of the page
let svg = d3
  .select("#device_occurence_chart") // getElementById() equivalent
  .append("svg") // appendChild() equivalent
  .attr("width", width + margin.left + margin.right) // setAttribute() equivalent
  .attr("height", height + margin.top + margin.bottom)
  .append("g") // <g> is a tag to group graphic elements (<line>, <rect>, etc.) inside <svg>
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // SVG offset

// Append the chart title
svg
  .append("text")
  .attr("x", width / 2)
  .attr("y", 0 - margin.top / 2)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .style("font-family", "sans-serif")
  .style("font-weight", "bold")
  .style("text-decoration", "underline")
  .text("Responses to ARP Broadcast");

// Format the device occurence history for D3.js
const recordsByOccurence = (function formatRecords(devices) {
  occs4all = [];

  // Loop for all the devices
  devices.forEach((device) => {
    // Destructure the occurences for this device
    device.occ.forEach((timestamp) => {
      occs4all.push({
        group: timestamp,
        variable: device.mac_addr,
        value: 1,
      });
    });
  });
  return occs4all;
})(
  recordsByDevice // from history.js
);

// Build X scales and axis: use the values from history.js
const x = d3
  .scaleBand()
  .range([0, width])
  .domain(timestamps) // x-label
  .padding(squarePadding); // gap between tiles
svg
  .append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "rotate(-30) translate(-70, 0)");

// Build Y scales and axis:
const y = d3
  .scaleBand() // very basic scale
  .range([height, 0])
  .domain(macAddrs) // y-label
  .padding(squarePadding); // gap between tiles
svg.append("g").call(d3.axisLeft(y)); // .call() is used to apply func(s) to selections

// Build color scale
const myColor = d3
  .scaleLinear()
  .range(["white", "dodgerblue"])
  .domain([0, 1]);

//Read the data
(function readData(data) {
  svg
    .selectAll()
    .data(data, function (d) {
      return d.group + ":" + d.variable;
    })
    .enter()
    .append("rect")
    .attr("x", function (d) {
      return x(d.group);
    })
    .attr("y", function (d) {
      return y(d.variable);
    })
    .attr("width", x.bandwidth())
    .attr("height", y.bandwidth())
    .style("fill", function (d) {
      return myColor(d.value);
    });
})(recordsByOccurence);