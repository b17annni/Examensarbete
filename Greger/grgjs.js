 // getlist = gets locations from input koordinates
 function getlist(){  

      var lat = document.getElementById("originCoordLat").value;
      var long = document.getElementById("originCoordLong").value;

      let requestURL = 'https://api.resrobot.se/v2/location.nearbystops?key=<Key>&originCoordLat=' + lat + '&originCoordLong=' + long + '&format=json';
      let request = new XMLHttpRequest();        
      request.open('GET', requestURL);
      request.responseType = 'json';
      request.send();

      request.onload = function() {
       const locations = request.response;
       showLocations(locations);
      }
};
// showlocations = writes the locations in a list
      function showLocations(jsonObj) {
        var list = document.getElementById("tryme");
        

        const places = jsonObj['StopLocation'];
            
        for (let i = 0; i < places.length; i++) {
          const newart = document.createElement('article');
          const stationName = document.createElement('h2');
          const stationDist = document.createElement('p');

          stationName.textContent = places[i].name;
          stationDist.textContent = 'Distance: ' + places[i].dist;
      
          newart.appendChild(stationName);
          newart.appendChild(stationDist);
 
          list.appendChild(newart);
        
        }
      }

      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(getlistPos);
        } else { 
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
      }
      function getlistPos(position){  

        var lat = position.coords.latitude;
        var long = position.coords.longitude;
  
        let requestURL = 'https://api.resrobot.se/v2/location.nearbystops?key=<key>&originCoordLat=' + lat + '&originCoordLong=' + long + '&format=json';
        let request = new XMLHttpRequest();        
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
  
        request.onload = function() {
         const locations = request.response;
         showLocations(locations);
        }
  };
  
        function showLocationsPos(jsonObj) {
          var list = document.getElementById("tryme");
  
          const places = jsonObj['StopLocation'];
              
          for (let i = 0; i < places.length; i++) {
            const newart = document.createElement('article');
            const stationName = document.createElement('h2');
            const stationDist = document.createElement('p');
  
            stationName.textContent = places[i].name;
            stationDist.textContent = 'Distance: ' + places[i].dist;
        
            newart.appendChild(stationName);
            newart.appendChild(stationDist);
   
            list.appendChild(newart);
          
          }
        }