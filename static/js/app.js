// from data.js
var tableData = data;

// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#filter-btn");
var $resetBtn = document.querySelector("#reset-btn");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
$resetBtn.addEventListener("click", handleResetButtonClick);


// Set filteredData to tableData initially
var filteredData = tableData;

// renderTable renders the filteredData to the tbody
function renderTable() {
    $tbody.innerHTML = "";
    console.log("render is commencing");
    console.log("filtered data", filteredData);
  
    for (var i = 0; i < filteredData.length; i++) {
      
      // Retrieve the current sighting object and its fields
      var sighting = filteredData[i];
      var fields = Object.keys(sighting);
      
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the sighting object, create a new cell and set its inner text to be the current value at the current sighting's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = sighting[field];
      }
    }
}

function handleResetButtonClick() {
 location.reload();
}

function handleSearchButtonClick(event) {
  
  // Format the user's search by removing leading and trailing whitespace and converting the string to lowercase
 var filterDate = $dateInput.value.trim();
 var filterCity = $cityInput.value.trim().toLowerCase(); 
 var filterState = $stateInput.value.trim().toLowerCase();
 var filterCountry = $countryInput.value.trim().toLowerCase();
 var filterShape = $shapeInput.value.trim().toLowerCase(); 

  if (filterDate != "") {
    filteredData = filteredData.filter(function (sighting) {
      var sightingDate = sighting.datetime;
      return sightingDate === filterDate;
      });
  }
  else {filteredData};

  if (filterCity != "") {
    filteredData = filteredData.filter(function(sighting) {
      var sightingCity = sighting.city.toLowerCase();
      return sightingCity === filterCity;
    });
  }
  else{filteredData};

  if (filterState != "") {
    filteredData = filteredData.filter(function(sighting) {
      var sightingState = sighting.state.toLowerCase();
      return sightingState === filterState;
    });
  }
  else{filteredData};

  if (filterCountry != "") {
    filteredData = filteredData.filter(function(sighting) {
      var sightingCountry = sighting.country.toLowerCase();
      return sightingCountry === filterCountry;
    });
  }
  else{filteredData};

  if (filterShape != "") {
    filteredData = filteredData.filter(function(sighting) {
      var sightingShape = sighting.shape.toLowerCase();
      return sightingShape === filterShape;
    });
  }
  else{filteredData};
    renderTable();
}

// Render the table for the first time on page load
renderTable();
