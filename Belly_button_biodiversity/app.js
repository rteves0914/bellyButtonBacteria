// Create variable to JSON data
var json = 'samples.json'

// Import JSON data using d3 and log to the console to view
d3.json(json).then(function(data) {
    console.log(data);
  });

// Set up the trace for the bar chart
var trace1 = {
  x: data.sample_values,
  y: data.otu_labels,

}
  