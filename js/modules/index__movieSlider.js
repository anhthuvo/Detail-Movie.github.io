function movieSlider(section) {
  var showingMovieList = [
    movie1,
    movie2,
    movie3,
    movie4,
    movie5,
    movie3,
    movie4,
    movie4,
    movie2,
    movie2,
    movie2,
    movie2,
    movie2,
    movie2,
    movie2,
    movie2,
    movie3,
    movie3,
    movie3,
    movie3,
    movie3,
    movie3,
    movie3,
    movie3,
  ];

  // limit DOM only access element in a section block
  const tabPane = document.getElementsByClassName(section)[0];

  const movieSliderList = tabPane.getElementsByClassName(
    "movie-slider__tab-pane__container__list"
  )[0];
  const movieItem = tabPane.getElementsByClassName(
    "movie-slider__tab-pane__container__list__item"
  );
  const poster = tabPane.getElementsByClassName(
    "movie-slider__tab-pane__container__list__item__poster__img"
  );
  const score = tabPane.getElementsByClassName(
    "movie-slider__tab-pane__container__list__item__poster__rating__score"
  );
  const movieCertificate = tabPane.getElementsByClassName(
    "movie-slider__tab-pane__container__list__item__footer__detail__movieCertificate"
  );
  const movieName = tabPane.getElementsByClassName(
    "movie-slider__tab-pane__container__list__item__footer__detail__movieName"
  );
  const movieLength = tabPane.getElementsByClassName(
    "movie-slider__tab-pane__container__list__item__footer__detail__movieLength"
  );
  const nextControl = tabPane.getElementsByClassName(
    "movie-slider__tab-pane__control-next"
  )[0];
  const prevControl = tabPane.getElementsByClassName(
    "movie-slider__tab-pane__control-prev"
  )[0];
  const trailerBtn = tabPane.getElementsByClassName(
    "movie-slider__tab-pane__container__list__item__poster__overlay__playTrailer"
  );
  const movieTrailer = document.getElementById("modal__trailer__src");
  let numItem; //number of movie in 1 slide
  let direction;

  const renderMovieSlider = function (movieArr) {
    //Fisrt movieItem is a available in html
    //1. use loop to acess each movie obj
    // set properties of current obj to Fisrt movieItem available in html
    // copy html of first movieItem and push to HTML content
    let movieSliderListHTML = '';

    for (let i = 0; i < movieArr.length; i++) {
      let currentMovie = movieArr[i];

      poster[0].src = currentMovie.poster;
      score[0].innerHTML = currentMovie.score;
      movieCertificate[0].innerHTML = currentMovie.certificate;
      movieName[0].innerHTML =
      currentMovie.name + " - " + currentMovie.certificate;
      movieLength[0].innerHTML = currentMovie.length;

      let movieItemHTML = movieItem[0].outerHTML;
      movieSliderListHTML += movieItemHTML;
    }

    movieSliderList.innerHTML = movieSliderListHTML;

    for (let i = 0; i < movieArr.length; i++) {
      let currentMovie = movieArr[i];
      // play trailer
      trailerBtn[i].addEventListener("click", () => {
        movieTrailer.setAttribute("src", currentMovie.trailer);
      });
    }

    spliceSlide("end");
  };

  const spliceSlide = function (slidePosition) {
    /* function: spliceSlide
        1. press next: cut 8 last movieItem and put to the head
        2. press prev: cut 8 first movieItem and put to the end */
    if (!(slidePosition === "start" || slidePosition === "end")) return;

    movieSliderList.style.transition = "none";
    movieSliderList.style.right = "100%";

    if (slidePosition === "start") {
      for (let i = 0; i < numItem; i++) {
        movieSliderList.appendChild(movieSliderList.firstElementChild);
      }
      return;
    }
    for (let i = 0; i < numItem; i++) {
      movieSliderList.insertBefore(
        movieSliderList.lastElementChild,
        movieSliderList.firstElementChild
      );
    }
  };

  const slideMove = function (nextOrprev) {
    /* function slideMove: 
      allowed input only 'next' or 'prev'
        1. press next: movieSliderList move to right
        2. press prev: movieSliderList move to left */

    if (!(nextOrprev === "next" || nextOrprev === "prev")) return;

    movieSliderList.style.transition = "all .5s";

    if (nextOrprev === "next") movieSliderList.style.right = "200%";
    else movieSliderList.style.right = "0%";

    direction = nextOrprev;
  };

  const renderSliderDependsClientWidth = function () {
    let clientWidth = document.documentElement.clientWidth;

    if (clientWidth >= 992) {
      numItem = 8;
      renderMovieSlider(showingMovieList);
    } else if (clientWidth >= 768) {
      numItem = 6;
      renderMovieSlider(showingMovieList);
    } else if (clientWidth < 768) {
      numItem = 4;
      renderMovieSlider(showingMovieList);
    }
  };

  renderSliderDependsClientWidth();
  // click on prev next event
  nextControl.addEventListener("click", () => slideMove("next"));
  prevControl.addEventListener("click", () => slideMove("prev"));

  movieSliderList.addEventListener("transitionend", () => {
    if (
      !event.target.classList[0] === "movie-slider__tab-pane__container__list"
    )
      return;

    if (direction === "next") spliceSlide("start");
    else if (direction === "prev") spliceSlide("end");
    direction = "";
  });
  // end - click on prev next event

  // resize movie slider event
  window.addEventListener("resize", function () {
    renderSliderDependsClientWidth();
  });
  // end - resize movie slider event
}
