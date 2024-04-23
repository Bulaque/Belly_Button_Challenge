const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json"
let data; 

d3.json(url).then(function(response) {
  data = response
  console.log(data);
  init(data.names)
});

function init(pernames) {

  let dropdownMenu = d3.select("#selDataset");
  pernames.forEach(pername => {
    dropdownMenu.append("option").text(pername)
  });
  optionChanged(pernames[0])
}

function optionChanged(selected_id) {
  console.log(selected_id);
  BarChart(selected_id);
  BubbleChart(selected_id)
};


// Bar Chart 

function BarChart(id) {

let sample = data.samples.find(s => s.id == id)
let title = "Top 10 OTU IDs found for this indiviual"
let values = sample.sample_values.slice(0, 10).reverse();
let labels = sample.otu_ids.slice(0, 10).reverse();
let hovertext = sample.otu_labels.slice(0, 10).reverse();

  let trace = {
    x: values,
    y: labels.map(id => `OTU ${id}`),
    text: hovertext,
    type: 'bar',
    orientation: 'h'
  };

  let data1 = [trace];

  let layout = {
    title: title,
    xaxis: {title: "Sample Values"},
    yaxis: {title: "OTU IDs"}
  };

  Plotly.newPlot("bar", data1, layout);
};


// Bubble Chart

function BubbleChart(id) {

  let titleB = "Bacteria Culture Per Sample"
  let sampleB = data.samples.find(sa => sa.id == id)
  let valuesB = sampleB.otu_ids;
  let labelsB = sampleB.sample_values;
  let textB = sampleB.otu_labels;
  
    let traceBubble = {
      x: valuesB,
      y: labelsB,
      text: textB,
      mode: 'markers',
      marker: {
        size: labelsB,
        color: valuesB,
        colorscale: 'Earth Values',
        opacity: 0.7
      }
    };
  
    let dataBubble = [traceBubble];
  
    let layoutB = {
      title: titleB,
      xaxis: {title: "Sample Values"},
      yaxis: {title: "OTU IDs"}
    };
  
    Plotly.newPlot("bubble", dataBubble, layoutB);
  };

//----------------------------------------------------
// Build the metadata panel
//function buildMetadata(sample) {
  //d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field


    // Filter the metadata for the object with the desired sample number


    // Use d3 to select the panel with id of `#sample-metadata`


    // Use `.html("") to clear any existing metadata


    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.

  //});
//}

// function to build both charts
//function buildCharts(sample) {
  //d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field


    // Filter the samples for the object with the desired sample number


    // Get the otu_ids, otu_labels, and sample_values


    // Build a Bubble Chart


    // Render the Bubble Chart


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart

 // });
//}

// Function to run on page load
//function init() {
  //d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field


    // Use d3 to select the dropdown with id of `#selDataset`


    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.


    // Get the first sample from the list


    // Build charts and metadata panel with the first sample

  //});
//}

// Function for event listener
//function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected

//}

// Initialize the dashboard
//init();
