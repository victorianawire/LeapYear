function check_leapyear() {
    var year = document.getElementById("year").nodeValue;
    if (year % 4 == 0) {
        document.getElementById("leapYear").innerHTML = year + "is a leap year";
    } else {
        document.getElementById("leapYear").innerHTML = year + "is not a leap year";
    }
}