let modal = document.getElementById('myModal');
let button = document.getElementById("modalbutton");
let span = document.getElementsByClassName("close")[0];


button.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let elements = document.querySelectorAll('textarea');

for (i=0; i<elements.length; i++) {
 (function(element) {
   var id = element.getAttribute('id');
   element.value = localStorage.getItem(id); 
   element.oninput = function() {
     localStorage.setItem(id, element.value);
     checkValidity();
   };
 })(elements[i]);
}


// elements.oninput = function() { };
