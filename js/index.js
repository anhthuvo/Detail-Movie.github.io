$(document).ready(function(){

    $(".dropdown-item").click(function(){
        $(".dropdown-item").removeClass("active");
        $(this).addClass("active");
        $(".btn.dropdown-toggle").html( $(this).html() );
    });

    $(".navbar__menuBtn").click(function(){
        $(".navbar-list").css("left","30%");
        $("#navbar-list-bg").fadeIn();
    });

    $(".navbar-list__signIn__closeBtn, .navbar-list-bg").click(function(){
        $(".navbar-list").css("left","100%");
        $("#navbar-list-bg").fadeOut();
    });

    $(".carousel__playBtn").click(function(){
        $(this).hide();
        $(".carousel__trailer").css("visibility","visible");
    });

    // shrink card-text
    $(".card-text__moreLess").click(function(){
        if ( $(this).text() == "Thu gọn") {
            $(this).text("...Xem thêm");
            $(this).siblings().css("max-height","85px");
        }
        else {
            $(this).text("Thu gọn");
            $(this).siblings().css("max-height","100%");
        }    
    });

    $(".card-text").each(function(){
        if ( $(this).height() < 85) {
            $(this).siblings().hide();
        }
    });
    // end- shrink card-text

    var order = 0;
    $(".info-review__comment__list__item:gt("+order+")").hide();

    $(".loadMoreReview").click(function(){
        order += 2;
        $(".info-review__comment__list__item:lt("+order+")").show();
    });


});