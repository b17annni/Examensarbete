 
    function getlist(x,y){   
        var lat = x;
        var long = y;

    $.ajax({
    type: "POST", 
    url: 'https://api.resrobot.se/v2/location.nearbystops?key=808aabc0-1955-4159-b21c-46b52d70dce1&originCoordLat='+lat+'&originCoordLong='+long+'&format=xml', 
    success:  writelist,
    })
};

    function writelist(){
  
    }        
 