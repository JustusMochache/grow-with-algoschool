$(document).ready(function () {
  $(".card-link").click(function () {
    $(this).parents(".card").find(".card-footer").toggleClass("d-none");
  });
});

function toggleList() {
  var list = document.getElementById("list");
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}


const cardHeaders = document.querySelectorAll('.jcard-header');

cardHeaders.forEach(cardHeader => {
  cardHeader.addEventListener('click', () => {
    const cardBody = cardHeader.nextElementSibling;
    cardBody.classList.toggle('hidden');
  });
});

// for snackbar

// function showSnackbar(message) {
// 	var snackbar = document.getElementById("snackbar");
// 	snackbar.innerHTML = message;
// 	snackbar.classList.add("show");

// 	setTimeout(function(){
// 		snackbar.classList.remove("show");
// 	}, 6000);
// }

// Example usage
// showSnackbar("Site rapidly updating in real time!");

// // Update message every 24 hours
// setInterval(function(){
// 	showSnackbar("Site updating rapidly in real time!");
// }, 1000000);