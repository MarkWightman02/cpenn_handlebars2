// Function to load data from HTML file
function loadHTML() {
  // Create an XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // When the response has loaded, check if the server status was okay
  xhr.onreadystatechange = function() {
    if (this.status === 200) {
      // Update web page to contain the new HTML
      document.getElementById("services1").innerHTML = xhr.responseText;
    }
  };

  // Prepare the request and send it
  xhr.open("GET", "data/services1.html", true);
  xhr.send();
}

// Call loadHTML function when the website is loaded
window.addEventListener("load", loadHTML);





// Function to load data from XML file
function loadXML() {
  // Create an XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // When the response has loaded, check if the server status was okay
  xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
      // Get XML data from the response
      var xmlRes = xhr.responseXML;

      var newText = xmlRes.getElementsByTagName("p1")[0].textContent;

      // Update web page to contain the new HTML
      document.getElementById("services2").innerHTML += newText;
    }
  };

  // Prepare the request and send it
  xhr.open("GET", "data/services2.xml", true);
  xhr.send();
}

// Call loadXML function when the website is loaded
window.addEventListener("load", loadXML);






function loadJSON() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (this.status === 200) {
      var jsonRes = JSON.parse(xhr.responseText);

      var newText = jsonRes.services3[0].data;

      document.getElementById("services3").innerHTML += newText;
    }
  };

  xhr.open("GET", "data/services3.json", true);
  xhr.send();
}

window.addEventListener("load", loadJSON);





// Function to load data from HTML file using jQuery
function loadHTMLjQ() {
  // Load the HTML file and insert its content into the #services4 element
  $("#services4").load("data/services4.html");
}

// Call loadHTML function when the website is loaded
$(document).ready(loadHTMLjQ);

