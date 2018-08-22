'use strict';

/*=========================================================================
   Range Slider
=========================================================================*/
$("#slider-range").slider({
    range: true,
    min: 360,
    max: 1200,
    step: 15,
    values: [360, 1200],
    slide: function(e, ui) {
        var hours1 = Math.floor(ui.values[0] / 60);
        var minutes1 = ui.values[0] - (hours1 * 60);

        if (hours1.length == 1) hours1 = '0' + hours1;
        if (minutes1.length == 1) minutes1 = '0' + minutes1;
        if (minutes1 == 0) minutes1 = '00';
        if (hours1 >= 12) {
            if (hours1 == 12) {
                hours1 = hours1;
                minutes1 = minutes1 + " PM";
            } else {
                hours1 = hours1 - 12;
                minutes1 = minutes1 + " PM";
            }
        } else {
            hours1 = hours1;
            minutes1 = minutes1 + " AM";
        }
        if (hours1 == 0) {
            hours1 = 12;
            minutes1 = minutes1;
        }



        $('.slider-time').html(hours1 + ':' + minutes1);

        var hours2 = Math.floor(ui.values[1] / 60);
        var minutes2 = ui.values[1] - (hours2 * 60);

        if (hours2.length == 1) hours2 = '0' + hours2;
        if (minutes2.length == 1) minutes2 = '0' + minutes2;
        if (minutes2 == 0) minutes2 = '00';
        if (hours2 >= 12) {
            if (hours2 == 12) {
                hours2 = hours2;
                minutes2 = minutes2 + " PM";
            } else if (hours2 == 24) {
                hours2 = 11;
                minutes2 = "59 PM";
            } else {
                hours2 = hours2 - 12;
                minutes2 = minutes2 + " PM";
            }
        } else {
            hours2 = hours2;
            minutes2 = minutes2 + " AM";
        }

        $('.slider-time2').html(hours2 + ':' + minutes2);
    }
});

/*=========================================================================
   Mobile Menu
=========================================================================*/
function toggleClassMenu() {
    myMenu.classList.add("menu--animatable");
    if (!myMenu.classList.contains("menu--visible")) {
        myMenu.classList.add("menu--visible");
        document.querySelector(".ham").classList.remove('active')

    } else {
        myMenu.classList.remove('menu--visible');
    }
}

function OnTransitionEnd() {
    myMenu.classList.remove("menu--animatable");
}

var myMenu = document.querySelector(".menu");
var clsMenu = document.querySelector(".header-mobile");
var oppMenu = document.querySelector(".ham");

oppMenu.addEventListener("click", toggleClassMenu, false);
clsMenu.addEventListener("click", toggleClassMenu, false);


/*=========================================================================
   Btn Filter
=========================================================================*/
function toggleFilter() {
    if (!filterBtn.classList.contains("active-filter")) {
        filterBtn.classList.add("active-filter");


    } else {
        filterBtn.classList.remove('active-filter');
    }
}
var myFilter = document.querySelector('.btn-button-filter');
var filterBtn = document.querySelector('.filter-btn');

myFilter.addEventListener("click", toggleFilter, false);