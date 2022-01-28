// HEADER STICKY START  
window.addEventListener("scroll", function () {
    var header = document.querySelector(".nav_bar");
    header.classList.toggle("sticky-bar", window.scrollY > 50);
  });
// HEADER STICKY START  END

// MOBILE SEARCH START
$(".search_icon_new").click(function () {
    $(".sub_search").css("opacity", "1");
    $(".search_icon_new").hide();
  });
  $("body").on("click", function (e) {
    if (
      $(e.target).closest(".search_icon_new").length === 0 &&
      $(e.target).closest(".sub_search").length === 0
    ) {
      $(".search_icon_new").show();
      $(".sub_search").css("opacity", "0");
    }
  });
  // MOBILE SEARCH END


  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });