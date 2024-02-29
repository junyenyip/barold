// Get the modal
var modal = document.getElementById("game-modal");

// Get all the images and loop through them
var images = document.getElementsByClassName("game-img");
for (var i = 0; i < images.length; i++) {
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = images[i];
  var modalImg = document.getElementById("img01");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}