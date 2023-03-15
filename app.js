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


