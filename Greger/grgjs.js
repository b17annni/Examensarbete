
    
    function getlist(){  
      const section = document.querySelector('section');

      let requestURL = 'https://api.resrobot.se/v2/location.nearbystops?key='+api_key+'&originCoordLat=57.711111&originCoordLong=11.964167&format=json';
      let request = new XMLHttpRequest();        
      request.open('GET', requestURL);
      request.responseType = 'json';
      request.send();

      request.onload = function() {
        const locations = request.response;
        showLocations(locations);
      }
};

      function showLocations(jsonObj) {
        const places = jsonObj['StopLocation'];
            
        for (let i = 0; i < places.length; i++) {
          const newart = document.createElement('article');
          const stationName = document.createElement('h2');
          const stationDist = document.createElement('p');

          stationName.textContent = places[i].name;
          stationDist.textContent = 'Distance: ' + places[i].dist;

          newart.appendChild(stationName);
          newart.appendChild(stationDist);
 
          section.appendChild(newart);
        }
      }