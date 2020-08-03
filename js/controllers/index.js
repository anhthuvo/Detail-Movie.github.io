// import { activeDropdownItem, navbarCollapse } from '../modules/header.js';
// import { bookingDate } from '../modules/index__booking.js';
// import { movieSlider } from '../modules/index__movieSlider.js';
// import { theaterMatrix } from '../modules/index__theater-matrix.js';
// import { autoSlideShow } from '../modules/index__autoSlider.js';

$(document).ready(function () {
  // header section
  activeDropdownItem(".header");
  navbarCollapse();
  //end header

  // booking section
  activeDropdownItem(".booking");
  bookingDate();
  // end booking section

  //movie-slider section
  movieSlider("movie-slider__tab-pane--1");
  movieSlider("movie-slider__tab-pane--2");
  //end movie-slider

  //theater matrix
  theaterMatrix();
  //end theater matrix

  autoSlideShow();
});
