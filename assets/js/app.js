"use strict"
var showsAry = ["FAMILY GUY", "THE SIMPSONS", "SOUTHPARK", "RICK AND MORTY", "ROBOT CHICKEN"];
var showOffset = [0, 0, 0, 0, 0];

function initPage() {
  var i;
}
function reSize() {
  if ($(window).width() <= 480) {
  } else if ($(window).width() <= 768) {
  } else if ($(window).width() <= 980) {
  } else {
  }
}


function displayShow(title) {

  var formattedTitle = title.replace(" ", "+").toLowerCase();
  // build the query
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + formattedTitle + "&limit=10&offset=" + showOffset[showsAry.indexOf(title)];
  console.log("queryURL = " + queryURL);
  // fetch
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    var i;
    console.log(response);
    
    }
  }).fail(function(err) {
    throw err;
  });
}



$(document).ready(function() {

  initPage();

  $("body").on("click touch", "img", function() {
  });

  $("body").on("click touch", "#shows", function() {
  });

  $("#clear-btn").on("click touch", function() {
  });

  $("body").on("click touch", ".list-item", function() {
  });

  $(window).resize(function() {
    reSize();
  });

  reSize();
});

