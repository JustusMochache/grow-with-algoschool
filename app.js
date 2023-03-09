$(document).ready(function() {
    $(".card-link").click(function() {
      $(this).parents(".card").find(".card-footer").toggleClass("d-none");
    });
  });