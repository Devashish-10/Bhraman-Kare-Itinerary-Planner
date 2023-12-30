document.addEventListener('DOMContentLoaded', function () {
    fetchData();
});

function fetchData() {
    fetch('uttarakhand_travel_places.csv')
        .then(response => response.text())
        .then(data => {
            const places = data.split('\n').slice(1); 

            const dataContainer = document.getElementById('data-container');

            places.forEach(placeData => {
                const [name, areaType, weather, altitude, region, costEstimates, imageLink] = placeData.split(',');

                const placeContainer = document.createElement('div');
                placeContainer.classList.add('place-container');

                // Create and configure the image element
                const placeImage = document.createElement('img');
                placeImage.src = imageLink;
                placeImage.alt = name;
                placeImage.classList.add('place-image');

                // Create and configure the description element
                const placeDescription = document.createElement('div');
                placeDescription.classList.add('place-description');
                placeDescription.innerHTML = `
                    <p><strong>Place Name:</strong> ${name}</p>
                    <p><strong>Area Type:</strong> ${areaType}</p>
                    <p><strong>Weather:</strong> ${weather}</p>
                    <p><strong>Altitude:</strong> ${altitude} m</p>
                    <p><strong>Region:</strong> ${region}</p>
                    <p><strong>Cost Estimates:</strong> ${costEstimates}</p>
                `;

                // Append the image to the top of the placeContainer
                placeContainer.appendChild(placeImage);

                // Append a line break for separation between the image and description
                placeContainer.appendChild(document.createElement('hr'));

                // Append the description to the placeContainer below the image
                placeContainer.appendChild(placeDescription);

                // Append the placeContainer to the dataContainer
                dataContainer.appendChild(placeContainer);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}