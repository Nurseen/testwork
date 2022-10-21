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

(function(elements) {
console.log(elements[0])
let id = elements[0].getAttribute('id');
console.log(id)
})

localStorage.setItem(id, elements.value);



// elements.oninput = function() { };