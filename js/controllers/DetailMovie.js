import { activeDropdownItem, navbarCollapse } from './modules/header.js';

$(document).ready(function () {

  // header section
  activeDropdownItem(".header");
  navbarCollapse();
  //end eader

  // playBtn trailer
  $(".carousel__playBtn").click(function () {
    $(this).hide();
    $(".carousel__trailer").css("visibility", "visible");
  });

  class userComment {
    constructor(name, time, score, content, like) {
      this.name = name;
      this.time = time;
      this.score = score;
      this.content = content;
      this.like = like;
    }
  }
  var user0 = new userComment(
    "Anh Thu",
    "7 tháng trước",
    "6",
    "Mình thấy phim cũng khá đấy chứ! Chị Hương Giang công nhận đẹp và sức hút thật. Cốt truyện đời thường, đơn giản, được cái thích mấy miếng hài trong phim. Xem giải trí cũng ổn. 😄😄😄",
    "5"
  );

  var user1 = new userComment(
    "A Lâm",
    "6 tháng trước",
    "6",
    "Phim xem được nha mọi người. Nói về cuộc đời thế giới thứ ba",
    "15"
  );

  var user2 = new userComment(
    "Sumika Ichigo",
    "4 tháng trước",
    "7",
    "Phim coi tạm dc",
    "1"
  );

  var user3 = new userComment(
    "Loan Hồng",
    "3 tháng trước",
    "7",
    "Phim ở mức tạm, không cao trào, ko gây cấn, không có điểm nhấn, diễn xuất của từng nhân vật chưa toát lên được đúng bản chất ngoại trừ vai “Hân”.",
    "6"
  );

  var users = [user0, user1, user2, user3];

  for (i = 0; i < users.length; i++) {
    $(".info-review__comment__list__item:first-child")
      .clone()
      .appendTo(".info-review__comment__list");

    $(".info-review__comment__list__item:last-child .userName").text(
      users[i].name
    );
    $(".info-review__comment__list__item:last-child .commentTime").text(
      users[i].time
    );
    $(".info-review__comment__list__item:last-child .scoreNum").text(
      users[i].score
    );
    $(".info-review__comment__list__item:last-child .card-text").text(
      users[i].content
    );
    $(".info-review__comment__list__item:last-child .likeNum").text(
      users[i].like
    );
  }

  //show "Xem thêm" only for comment longer than 85px
  $(".card-text").each(function () {
    if ($(this).height() < 85) {
      $(this).siblings(".card-text__moreLess").hide();
    }
  });

  // shrink card-text
  $(".card-text__moreLess").click(function () {
    if ($(this).text() == "Thu gọn") {
      $(this).text("...Xem thêm");
      $(this).siblings().css("max-height", "85px");
    } else {
      $(this).text("Thu gọn");
      $(this).siblings().css("max-height", "100%");
    }
  });
  // end- shrink card-text

  // show 2 comment at first, click "Xem Thêm" show 2 more comment
    var order = 2;
    $(".info-review__comment__list__item").hide();
    $(".info-review__comment__list__item:lt(" + order + ")").show();

    $(".loadMoreReview").click(function () {
      order += 2;
        console.log(order);
      $(".info-review__comment__list__item:lt(" + order + ")").show();
    });
});
