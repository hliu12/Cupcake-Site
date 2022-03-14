$(document).ready(function () {
  $("#next-arrow").on("click", function () {
    var currentImg = $(".active");
    var nextImg = currentImg.next();
    if (nextImg.length) {
      currentImg.fadeOut(400, () => {
        currentImg.removeClass("active").css("z-index", -10);
        nextImg.fadeIn(400);
        nextImg.addClass("active").css("z-index", 10);
      });
    }
  });
  $("#prev-arrow").on("click", () => {
    var currentImg = $(".active");
    var prevImg = currentImg.prev();
    if (prevImg.length) {
      currentImg.fadeOut(400, () => {
        currentImg.removeClass("active").css("z-index", -10);
        prevImg.addClass("active").css("z-index", 10);
        prevImg.fadeIn(400);
      });
    }
  });

  $("#burger").on("click", () => {
    if ($("#header-items").css("display") == "none") {
      $("#header-items").css("display", "flex");
    } else {
      $("#header-items").css("display", "none");
    }
  });
});
