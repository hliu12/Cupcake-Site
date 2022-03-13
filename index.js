$(document).ready(function () {
  $("#next-arrow").on("click", function () {
    console.log("right");
  });
  $("#prev-arrow").on("click", () => {
    console.log("left");
  });
});
