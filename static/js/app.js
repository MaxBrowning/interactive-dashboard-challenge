// Read the JSON file
d3.json('samples.json').then(function(data) {

    // Print the JSON arrays in the console
    console.log(data);

    // Create variable for the dropdown (select tag)
    var select = d3.select('select');

    // Append option tags for each ID in the names array
    Object.entries(data.names).forEach(function([key, value]) {
        console.log(key, value);
        var option = select.append('option')
        option.text(value)});

    // Create variable for subject of interest
    soi = d3.select('#SelDataset').value
    console.log(soi)

    // Create a variable for the Demographic Info panel
    var panel = d3.select('#sample-metadata')

    // Append information on subject based on dropdown value

})

// Submit Button handler
function optionChanged() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");

    // Assign the value of the dropdown menu option to a variable
    var data = dropdownMenu.node().value;

    // Build the plot with the new person
    buildPlot(data);
  }

// function buildPlot(person) {

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
  
// buildPlot()