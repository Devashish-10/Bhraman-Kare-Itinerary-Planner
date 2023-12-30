document.getElementById("submit").addEventListener('click', function (e) {
    e.preventDefault();
    var city = document.getElementById('location').value;
    var hotelReportElement=document.getElementById('hotel-report');
    hotelReportElement.innerHTML = 'City: '+city;
    var options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '2935aee464mshdeec03e1b717674p1374e7jsn60313b40f0d1',
			'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
		}
	};
  fetch("https://hotels4.p.rapidapi.com/locations/v3/search?q=" + city + "&locale=en_US&langid=1033&siteid=300000001", options)
    .then(function (response) {
      console.log(response);
		return response.json();
    })
    .then(function(response){
      if(response && response.error){
        hotelReportElement.innerHTML='<p>An Error Occured' +response.error.message+ '</p>';
      }
      else{
        showHotel(response,city);
      }
    })
    .catch(function(err){
        console.error(err);
        hotelReportElement.innerHTML='<p> An Unknown Error Occured,Please Try Later';
    });
});function showHotel(response, city) {
  console.log(response); // Print the entire response to the console
  var hotelReportElement = document.getElementById('hotel-report');

  // Check if the response contains information
  if (response.sr && response.sr.length > 0) {
      response.sr.forEach(function (item) {
          if (item.type === 'CITY') {
              var cityReport = `
                  <h1><b>${item.regionNames.displayName}</b></h1>
                  <p>Coordinates: ${item.coordinates.lat}, ${item.coordinates.long}</p>
                  <p>City: ${city}</p>
              `;
              hotelReportElement.innerHTML += cityReport;
          } else if (item.type === 'HOTEL') {
              var hotelReport = `
                  <p>Hotel Name: ${item.regionNames.displayName}</p>
                  <p>Hotel Address: ${item.hotelAddress.street}, ${item.hotelAddress.city}, ${item.hotelAddress.province}</p>
              `;
              hotelReportElement.innerHTML += hotelReport;
          }
      });
  } else {
      hotelReportElement.innerHTML = '<p>No hotel information available for the given city</p>';
  }
}