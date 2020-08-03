
function activeDropdownItem(obj) {
  let dropdownItem = obj + ' .dropdown-item';
  $(dropdownItem).click(function () {
    $(dropdownItem).removeClass("active");
    $(this).addClass("active");

    let txt = $(this).contents().not($(this).children()).text();
    $(this)
      .parents(".dropdown-menu")
      .siblings(".dropdown-toggle")
      .children("span")
      .text(txt);
  });
}

function navbarCollapse() {
//click menuBtn show and hide the navbar
  $(".header__navbar__menuBtn").click(function () {
    $(".header__navbar__navbar-collapse").css("left", "30%");
    $(".header__navbar__navbar-collapse-bg").fadeIn();
  });

  $(".header__navbar__navbar-collapse__signIn__closeBtn, .header__navbar__navbar-collapse-bg").click(function () {
    $(".header__navbar__navbar-collapse").css("left", "100%");
    $(".header__navbar__navbar-collapse-bg").fadeOut();
  });
}