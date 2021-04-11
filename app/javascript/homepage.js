$(document).on("turbolinks:load", function () {
  let productBarcode = document.querySelector(".product_barcode");
  let searchByScan = document.querySelector(".search_by_scan");

  $(".modal").on("shown.bs.modal", function () {
    $(".product_barcode").trigger("focus");
  });

  if (searchByScan != null) {
    searchByScan.addEventListener("click", (e) => {
      e.preventDefault();
      $(".modal").modal("show");
    });
  }

  $(".search_product").on("click", () => {
    window.location.assign("/products/" + productBarcode.value);
  });

  $(".product_barcode").on("keydown", (e) => {
    if (e.key == "Enter") {
      $(".search_product").trigger("click");
    }
  });

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("error")) {
    $(".modal").modal();
  }
});
