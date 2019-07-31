'use strict';
let howManyDoggos =3;

function getDogImages() {
  fetch('https://dog.ceo/api/breeds/image/random/'+ howManyDoggos)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  for (i=0;i<howManyDoggos;i++){
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message[i]}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
  }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    howManyDoggos = document.getElementById('requestedNumber').value;
    console.log('this many doggos - ' + howManyDoggos);
    if (howManyDoggos === "")  {
      console.log('its nothing again!');
      howManyDoggos = 3;
    };
    console.log('this many - ' + howManyDoggos);
    getDogImages();
  });
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});