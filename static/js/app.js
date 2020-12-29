// Submit Button handler
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var person = dropdownMenu.node().value;

    // Build the plot with the new person
    buildPlot(person);
  }

// function unpack(rows, index) {
//     return rows.map(function(row) {
//       return row[index];
//     });
//   };


// function buildPlot(person) {
//   d3.json('../../samples.json').then(function(data) {

//     // Grab values from the data json object
//     var id = unpack(data.names);
//     var ethnicity = data.metadata.ethnicity;
//     var gender = data.metadata.gender;
//     var age = data.metadata.age;
//     var location = data.metadata.location;
//     var bbtype = data.metadata.bbtype;
//     var wfreq = data.metadata.wfreq;
//     var otu_ids = unpack(data.samples.otu_ids, 0)
//     var sample_values = unpack(data.samples.sample_values, 0)
 
//     // var trace1 = {
//     //   type: "bar",
//     //   x: sample_values,
//     //   y: otu_ids,
//     //   orientation: 'h'
//     // };
  
//     // var data = [trace1];

//     // var layout = {
//     //   title: `Top Ten Bacteria`,
//     //   xaxis: {
//     //     autorange: true
//     //   },
//     //   yaxis: {
//     //     autorange: true,
//     //     type: "linear"
//     //   }
//     // };
  
//     // Plotly.newPlot("#bar", data, layout);
  
//   });
// }
  
// buildPlot();