export function bookingDate() {
    // schedule selection on dropdown bar
    let today = new Date();
    let followingDay = new Date();

    $(".schedule .dropdown-item").each(function (index) {
    followingDay.setDate(today.getDate() + index);
    let weekday = followingDay.getDay();
    let date = followingDay.getDate();
    let month = followingDay.getMonth() + 1;
    let year = followingDay.getFullYear();

    if (index == 0) {
        $(this).children(".weekdays").html("Hôm nay");
    } else if (index == 1) {
        $(this).children(".weekdays").html("Ngày mai");
    } else {
        $(this).children(".weekdays").html(convertWeekdaysToTxt(weekday));
    }
    $(this)
        .append(year + "-" + month + "-" + date);
    });

    function convertWeekdaysToTxt(day) {
    switch (day) {
        case 0:
        day = "Chủ nhật";
        break;
        case 1:
        day = "Thứ hai";
        break;
        case 2:
        day = "Thứ ba";
        break;
        case 3:
        day = "Thứ tư";
        break;
        case 4:
        day = "Thứ năm";
        break;
        case 5:
        day = "Thứ sáu";
        break;
        case 6:
        day = "Thứ bảy";
        break;
        default:
        return;
    }
    return day;
    }
}
