function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  //console.log('TODO - validate the longitude, latitude values before submitting');
  let latitude = document.querySelector('#latitude');
  let longitude = document.querySelector('#longitude');
  let latitudeValue = latitude.value.trim();
  let longitudeValue = longitude.value.trim();
  if(isNaN(latitudeValue) || latitudeValue < -90 || latitudeValue > 90){
    document.querySelector('#lblLatitude > span').innerHTML ="";
    document.querySelector('#lblLatitude > span').append("* must be a valid Latitude (-90 to 90)");
    event.preventDefault();
  }

   if(isNaN(longitudeValue) || longitudeValue < -180 || longitudeValue > 180){
    document.querySelector('#lblLongitude > span').innerHTML ="";
    document.querySelector('#lblLongitude > span').append("* must be a valid Longitude (-180 to 180)");
    event.preventDefault();
  }

  return true;
  

}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
