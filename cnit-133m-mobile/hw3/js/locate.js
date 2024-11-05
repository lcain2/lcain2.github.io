


  if('geolocation' in navigator) 
    { function get_location() {
      navigator.geolocation.getCurrentPosition(show_coord); }
    
      function show_coord(position) {
        var latitude = position.coords.latitude; 
        var longitude = position.coords.longitude;
        console.log(latitude);
      } } 
  else { /* geolocation IS NOT available */ }