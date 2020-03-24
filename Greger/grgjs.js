    function getlist(){   
        $.ajax({
            url: 'https://api.resrobot.se/v2/location.nearbystops?key=808aabc0-1955-4159-b21c-46b52d70dce1&originCoordLat=59.329630&originCoordLong=18.059338&format=xml',
            success: writelist,
          });
};

    function writelist(){
        
    }     