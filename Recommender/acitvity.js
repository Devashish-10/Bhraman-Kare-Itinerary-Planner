document.getElementById("submit").addEventListener('click', function (e) {
    e.preventDefault();
    var lat = document.getElementById('lat');
    var lng = document.getElementById('lat');
    var rad = document.getElementById('rad');
    var activity = document.getElementById('act');
    var weatherReportElement=document.getElementById('search-activity');
    weatherReportElement.innerHTML = ' ';
    var options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '2935aee464mshdeec03e1b717674p1374e7jsn60313b40f0d1',
			'X-RapidAPI-Host': 'tour-recoomender.p.rapidapi.com'
		}
	};
    fetch('https://tour-recoomender.p.rapidapi.com/search/tour?lat=%3CREQUIRED%3E&lng=%3CREQUIRED%3E&radius=%3CREQUIRED%3E&interest=museum%2Cbar')
    .then(function (response) {
		return response.json();
    })
    .then(function(response){
      if(response && response.error){
        weatherReportElement.innerHTML='<p>An Error Occured' +response.error.message+ '</p>';
      }
      else{
        showWeather(response,city);
      }
    })
    .catch(function(err){
        console.error(err);
        weatherReportElement.innerHTML='<p> An Unknown Error Occured,Please Try Later';
    });
});function showWeather(response,city){
        var weatherReportElement=document.getElementById('weather-report');
        var weatherReport=`
        <h1 align ="center"><b>The following places provide following your requested activity${activity.value}</b></h1>
        <p>Cloudy: ${response.cloud_pct}</p>
        <p>Feels: ${response.feels_like}</p>
        <p>Humidity: ${response.humidity}</p>
        <p>Max Temperature: ${response.max_temp}</p>
        <p>Min Temperature: ${response.min_temp}</p>
        <p>Temperature is around: ${response.temp}</p>
        <p>Wind Degree: ${response.wind_degree}</p>
        <p>Wind Speed: ${response.wind_speed}</p>
        `;
        weatherReportElement.innerHTML=weatherReport;
}
    