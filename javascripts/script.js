var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
window.openModal = function(image){
  var nav = document.getElementById("navbar");	
  var lang = document.getElementById("lang-selector");	
  nav.style.display = "none";
  lang.style.display = "none";
  modal.style.display = "block";
  modalImg.src = image.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function(id) { 
  console.log(id)
  var nav = document.getElementById("navbar");	
  var lang = document.getElementById("lang-selector");	
  modal.style.display = "none";
  lang.style.display = "block";
  nav.style.display = "block";
}