/**
 * Skills animation
 */
let skillsContent = document.querySelector('.skills-content');
if (skillsContent) {
  new Waypoint({
    element: skillsContent,
    offset: '80%',
    handler: function(direction) {
      let progressBars = skillsContent.querySelectorAll('.progress .progress-bar');
      progressBars.forEach((bar) => {
        // For each progress bar (bar) element, update its width based on aria-valuenow attribute
        bar.style.width = bar.getAttribute('aria-valuenow') + '%';
      });
    }
  });
}


// Leaflet Map

var map = L.map('map').setView([7.187167, 79.987473], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Create a marker at your location
var yourLocationMarker = L.marker([7.187167, 79.987473]).addTo(map);

// Attach a click event to the marker
yourLocationMarker.on('click', function() {
  // Redirect to Google Maps with your location's coordinates
  var lat = 7.187167;
  var lng = 79.987473;
  var googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
  window.open(googleMapsUrl, '_blank');
});


var typed = new Typed(
  ".auto-type", {
      strings: ["Web Developer,","Mobile App Developer."],
      typeSpeed: 100,
      backSpeed:100,
      loop: true

  }
)


