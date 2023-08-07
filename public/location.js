console.log("location file execute");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position) {
  console.log(
    `Latitude: ${position.coords.latitude} and Longitude ${position.coords.longitude}`
  );
}

getLocation();
