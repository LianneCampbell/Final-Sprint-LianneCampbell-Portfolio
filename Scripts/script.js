// Script that enables Click function on button to load information from contactinfo.js

// Get the loadButton element
let loadBtn = document.querySelector("#loadButton");

// Click event handler for the loadButton
loadBtn.onclick = function (e) {
    // Create a new unordered list element
    let ul = document.createElement("ul");

    // Go through each comment in the contactinfo array
    contactinfo.forEach((cmts)=> {
        // Create a new list item element
        let li = document.createElement("li");
        
        // Set the text of the list item to the current comment
        li.innerText = cmts;
        
        // Append the list item to the unordered list
        ul.appendChild(li);
    });

    // Append the unordered list to the element with id "more"
    document.querySelector("#more").appendChild(ul);
};