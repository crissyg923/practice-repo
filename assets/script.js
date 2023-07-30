var userInput = document.querySelector(".userinput");
var button = document.querySelector(".submit");
var list = document.querySelector(".list");

// Emtpy array to capture user input
var names = [];

// Function to render names in a list on webpage
function renderNames() {
  list.innerHTML = "";
for (var i=0; i < names.length; i++ ) {
var namesEl = names[i];
var li = document.createElement("li");
li.texcontent = namesEl;
li.setAttribute("data-index", i);


list.appendChild(li);
console.log(namesEl);
}

}

// Function called upon webpage load
function init() {
  // Get stored todos from localStorage
  var storedNames = JSON.parse(localStorage.getItem("todos"));

  if (storedNames !== null) {
    names = storedNames;
}
renderNames();
}

var storeNames = function () {
  localStorage.setItem("todos", JSON.stringify(names));
}


button.addEventListener("click", function(event) {
    event.preventDefault();
  
    var inputText = userInput.value;
  
    // Return from function early if submitted todoText is blank
    if (inputText === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    names.push(inputText);
    userInput.value = "";
  
    // Store updated todos in localStorage, re-render the list
    storeNames();
    renderNames();
  });
  
 
  init();