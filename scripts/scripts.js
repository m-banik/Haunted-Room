const $a = $("#room>a");
const $mask = $("#mask");
$("#light").on("click", e => {
  $(e.target).toggleClass("clicked");
  $a.toggleClass("active");
  $mask.toggleClass("revealed");
});
