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
    });

// Display the default plot
function init() {

}

init();