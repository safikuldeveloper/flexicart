$(function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  /////  Open Menubar
  $(document).on("click", ".humber", function (e) {
    e.preventDefault();
    $(".menu-list").show();
    $(".menu-list").removeClass("d-none d-sm-none d-md-none");
  });

  /////  Close Menubar

  $(document).on("click", ".closeMenu", function (e) {
    e.preventDefault();
    $(".menu-list").show();
    $(".menu-list").addClass("d-none d-sm-none d-md-none");
  });

  ////// Banner Silder

  $(".banner-slider").owlCarousel({
    responsiveClass: true,
    lazyLoad: true,
    loop: true,
    margin: 0,
    autoplay: true,
    dots: false,
    itemsScaleUp: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: true,
      },
    },
  });

  $(".brand-carousel-slider").owlCarousel({
    responsiveClass: true,
    lazyLoad: true,
    loop: true,
    margin: 10,
    autoplay: true,
    dots: false,
    nav: false,
    itemsScaleUp: false,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });

  //////  Counter Increament

  $(".count-increament").click(function (e) {
    var count = $(this).parent().prev().find("input").val();
    count++;
    $(this).parent().prev().find("input").val(count);
  });

  //////  Counter Decreament

  $(".count-decreament").click(function (e) {
    var count = $(this).parent().next().find("input").val();
    count--;
    if (count > 0) {
      $(this).parent().next().find("input").val(count);
    }
  });

  var $bigPicImg = $(".product-main-img img");
  var $thumbs = $(".product-thumbnail-list");

  $thumbs.on("mouseenter", "li img", function () {
    var currentBigImage = $bigPicImg.attr("src");
    var newBigImage = $(this).attr("src");
    switchImage(newBigImage, currentBigImage);
  });

  function switchImage(imageHref, currentBigImage) {
    if (imageHref != currentBigImage) {
      $bigPicImg.fadeOut(250, function () {
        $bigPicImg.attr("src", imageHref).fadeIn(250);
        var newImageDesc = $(this).attr("alt");
      });
    }
  }

  // Get all color items
  const colorItems = document.querySelectorAll(".color-item");

  // Loop through each color item
  colorItems.forEach(function (item) {
    // Get the data-color attribute value
    const color = item.getAttribute("data-color");
    // Set CSS variable dynamically
    item.style.setProperty("--color", color);
  });

  ////// Tab

  $(".tabs-container").tabs({
    defaultTab: 0, // Set the default tab index
    animation: false, // Enable animation
  });

  /////// Nice Select ///

  $(".filter-option").niceSelect();
});
