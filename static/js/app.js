// Fetch the JSON data and console log it
d3.json('../../samples.json').then(function(data) {
    console.log(data);
  });

// Promise Pending
const dataPromise = d3.json('../../samples.json');
console.log("Data Promise: ", dataPromise);

// Initializes the page with a default plot
function init() {
    var trace1 = {
        x: data.map(row => row.pair),
        y: data.map(row => row.greekSearchResults),
        text: data.map(row => row.greekName),
        name: "Greek",
        type: "bar"
    };
  
    Plotly.newPlot('hbar', trace1);
  }