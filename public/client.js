/* client.js is run by the browser each time `views` template is loaded */

var ctx;

function resetCanvas() {
  $('#features-chart').remove(); // this is my <canvas> element
  $('#features-chart-container').append('<canvas id="features-chart"><canvas>');
  ctx = document.querySelector('#features-chart');
};

function getFeatures(id) {
  
  resetCanvas();

  let query = '/features?id=' + id;

  $.get(query, function(data) {
    console.log(data)
    
    let labels = [];
    let values = [];
    
    for (var feature in data) {
      if (data.hasOwnProperty(feature) && feature !== 'key' && feature !== 'mode') {
        if(data[feature] <= 1 && data[feature] >= 0) {
          labels.push(feature);
          values.push(data[feature]);
        }
      }
    }
    
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
          datasets: [{
            data: values,
            backgroundColor: [
              'rgba(216, 191, 216, 0.9)',
              'rgba(221, 160, 221, 0.9)',
              'rgba(128, 0, 128, 0.9)',
            ],
                borderColor: [
                    'rgba(216, 191, 216, 1)',
                    'rgba(221, 160, 221, 1)',
                    'rgba(128, 0, 128, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
              display: false,
              labels: {
                fontColor: "white",
                fontSize: 18
              }
           },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        max: 1
                    }
                }]
            }
        }
    });
  });
  

}

$(function() {
  console.log('Hello, world!');
  
  let trackID = '';
  let searchQuery = '';
  let resultIDs = [];
  
  $('form').submit(function(event) {
    
    event.preventDefault();
    
    searchQuery = '/search?input=' + $('input').val(); // Build query string
    
    $.get(searchQuery, function(items) {
      
      $('#results').empty();
      
      items.forEach(function(track, index) {
        resultIDs.push(track.id);
        // When a track is selected, call getFeatures(id)
        let searchResults = $('<li onClick="getFeatures(&apos;' + track.id + '&apos;)"></li>').text(track.name + '   🎙   ' + track.artists[0].name);
        $('#results').append(searchResults);
      }); 
      
    });
    
    event.stopPropagation();
    
  });

});