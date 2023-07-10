/* Hamburger Menu */
function openNavMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function openCloseButton(x) {
  x.classList.toggle("fa-xmark");
}

/* Footer */

// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -43.533875, lng: 172.624395 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 17,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();

/* Search New Terms Page */

function searchFunction() {
    var input, filter, container, section, p, i, txtValue;
    input = document.getElementById("userInput");
    filter = capitaliseInput(input.value);
    container = document.getElementById("medicalTermsContainer");
    section = container.getElementsByTagName("div");
		if (input.value == "") {
			displayAllTerms(section);
		} else {
			for (i = 0; i < section.length; i++) {
					p = section[i].getElementsByTagName("p")[0];
					txtValue = p.textContent || p.innerText;
					if (txtValue.indexOf(filter) > -1) {
							section[i].style.display = "";
					} else {
							section[i].style.display = "none";
					}
			}
		}
}

function capitaliseInput(input) {
	if (input != "") {
		const words = input.toLowerCase().split(" ");
		for (let i = 0; i < words.length; i++) {
			words[i] = words[i][0].toUpperCase() + words[i].substr(1);
		}
		return words.join(" ");
	}
}

function displayAllTerms(indivSection) {
	for (i = 0; i < indivSection.length; i++) {
		indivSection[i].style.display = "";
	}
}

/* Our Team Page */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("activeAccordian");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/* Notices Page */
/* Slide Show, Carousel */

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activeDot";
}

/* Modal */

// Get the modal
var modalOne = document.getElementById('modalNoticeOne');
var modalTwo = document.getElementById('modalNoticeTwo');
var modalThree = document.getElementById('modalNoticeThree');
var modalFour = document.getElementById('modalNoticeFour');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgOne = document.getElementById('noticeOne');
var imgTwo = document.getElementById('noticeTwo');
var imgThree = document.getElementById('noticeThree');
var imgFour = document.getElementById('noticeFour');

var modalImgOne = document.getElementById("imgOne");
var modalImgTwo = document.getElementById("imgTwo");
var modalImgThree = document.getElementById("imgThree");
var modalImgFour = document.getElementById("imgFour");

imgOne.onclick = function(){
  modalOne.style.display = "block";
  modalImgOne.src = this.src;
}

imgTwo.onclick = function(){
  modalTwo.style.display = "block";
  modalImgTwo.src = this.src;
}

imgThree.onclick = function(){
  modalThree.style.display = "block";
  modalImgThree.src = this.src;
}

imgFour.onclick = function(){
  modalFour.style.display = "block";
  modalImgFour.src = this.src;
}


// Get the <span> element that closes the modal
var spanOne = document.getElementsByClassName("close")[0];
var spanTwo = document.getElementsByClassName("close")[1];
var spanThree = document.getElementsByClassName("close")[2];
var spanFour = document.getElementsByClassName("close")[3];

// When the user clicks on <span> (x), close the modal
spanOne.onclick = function() { 
  modalOne.style.display = "none";
}

spanTwo.onclick = function() { 
  modalTwo.style.display = "none";
}

spanThree.onclick = function() { 
  modalThree.style.display = "none";
}

spanFour.onclick = function() { 
  modalFour.style.display = "none";
}