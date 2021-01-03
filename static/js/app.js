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
    var soi = document.getElementById('selDataset');
    console.log(soi.options[soi.selectedIndex].value);
    var soi = soi.options[soi.selectedIndex].value;
    console.log(soi)

    // Create a function that returns metadata based on id number
    function filterMetaData(person) {
        return person.id == soi;
    }

    // Filter metadata by subject of interest
    var filteredData = data.metadata.filter(filterMetaData);
    console.log(filteredData);

    // // Create a variable for the Demographic Info panel
    var panel = d3.select('.panel-body')

    // Append information on subject based on dropdown value
    Object.entries(filteredData[0]).forEach(function([key, value]) {
        console.log(key, value);
        var row = panel.append('tr')
        row.text(`${key}: ${value}`);
    })
    
});



// // Submit Button handler
// function optionChanged() {
//     // Prevent the page from refreshing
//     d3.event.preventDefault();
  
//     // Use D3 to select the dropdown menu
//     var dropdownMenu = d3.select("#selDataset");

//     // Assign the value of the dropdown menu option to a variable
//     var data = dropdownMenu.node().value;

//     // Build the plot with the new person
//     buildPlot(data);
//   }