'use strict';

/*=========================================================================
   Croppie
=========================================================================*/

$(document).ready(function() {
    var basic = $('#main-cropper').croppie({
        viewport: {
            width: 250,
            height: 250
        },
        boundary: {
            width: 300,
            height: 300
        },
        showZoomer: false,
        url: '../img/placeholder.png'
    });

    function readFile(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('#main-cropper').croppie('bind', {
                    url: e.target.result
                });
                $('.actionDone').toggle();
                $('.actionUpload').toggle();
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $('.actionUpload input').on('change', function() {
        readFile(this);
    });
    $('.actionDone').on('click', function() {
        $('.actionDone').toggle();
        $('.actionUpload').toggle();
    })
})


/*=========================================================================
   Range Slider
=========================================================================*/
$("#slider-range").slider({
    range: true,
    min: 480,
    max: 1380,
    step: 15,
    values: [480, 1380],
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
if (document.querySelector('.btn-button-filter')) {
    var myFilter = document.querySelector('.btn-button-filter');
    var filterBtn = document.querySelector('.filter-btn');
    var icon_filter = document.querySelector('.btn-button-filter');
    myFilter.addEventListener("click", toggleFilter, false);

} else {

}


function toggleFilter() {
    if (!filterBtn.classList.contains("active-filter")) {
        filterBtn.classList.add("active-filter");
        icon_filter.classList.add('rotate-icon');
        $('.btn-button-filter').click(function() {
            $('html, body').animate({
                    scrollTop: $(".filter-btn").offset().top
                },
                100);
        })



    } else {
        filterBtn.classList.remove('active-filter');
        icon_filter.classList.remove('rotate-icon');
    }
}





/*=========================================================================
   Collapse Filter
=========================================================================*/

$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.item-collapse');
        links.click(function() {
            $(this).toggleClass('rotate-icon');
        })
        links.on('click', {

            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        let $this = $(this);
        let $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.collapse-content').not($next).slideUp().parent().removeClass('open');
        };
    }
    var accordion = new Accordion($('.collapse'), true);

    $('label').on('change', function() {
        $(this).siblings('input[type="checkbox"]').not(this).prop('checked', false);
    });
});

/*=========================================================================
   Slider Price
=========================================================================*/
$("#slider-range-price").slider({
    range: true,
    min: 0,
    max: 500,
    values: [0, 99999],
    slide: function(event, ui) {
        $("#amount .price-one").val("$" + ui.values[0]);
        $("#amount .second-one").val("$" + ui.values[1]);
    }
});

/*=========================================================================
   Modal
=========================================================================*/

/*=========================================================================
   JS Scroll Btn FIlter
=========================================================================*/



var header = $(".filter-section");
var headerTwo = $('#main-fixed-nav')
let card_content = $('.filter-btn');
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        header.addClass("fixed");
        headerTwo.addClass('styki')

    } else {
        header.removeClass("fixed");
        headerTwo.removeClass('styki')
    }
})

/*=========================================================================
  Checkbox Active
=========================================================================*/


$('.btn-button-filter').click(function() {
    $('input[type=checkbox]').each(function() {
        if ($(this).is(':checked')) {
            $('.btn-button-filter').addClass('activeckeck');
            return false;
        } else {
            $('.btn-button-filter').removeClass('activeckeck');
        }
    });
})

$("label[data-id='ubicacion'] input[type=checkbox]").click(function() {
    checkUbicacion();
});

function checkUbicacion() {
    var anyBoxesChecked = false;
    $('label[data-id="ubicacion"] input[type=checkbox]').each(function() {
        if ($(this).is(":checked")) {
            anyBoxesChecked = true;
            $('.btn-clear').css('display', 'block')
        }
    });

    if (anyBoxesChecked == false) {

        $('.btn-clear').css('display', 'none')
        return false;
    }
}

$("label[data-id='edad'] input[type=checkbox]").click(function() {
    checkedad();
});

function checkedad() {
    var anyBoxesChecked = false;
    $('label[data-id="edad"] input[type=checkbox]').each(function() {
        if ($(this).is(":checked")) {
            anyBoxesChecked = true;
            $('.btn-edad').css('display', 'block')
        }
    });

    if (anyBoxesChecked == false) {

        $('.btn-edad').css('display', 'none')
        return false;
    }
}

$("label[data-id='categoria'] input[type=checkbox]").click(function() {
    checkcategoria();
});

function checkcategoria() {
    var anyBoxesChecked = false;
    $('label[data-id="categoria"] input[type=checkbox]').each(function() {
        if ($(this).is(":checked")) {
            anyBoxesChecked = true;
            $('.btn-categoria').css('display', 'block')
        }
    });

    if (anyBoxesChecked == false) {

        $('.btn-categoria').css('display', 'none')
        return false;
    }
}
$("label[data-id='precios'] input[type=checkbox]").click(function() {
    checkprecios();
});

function checkprecios() {
    var anyBoxesChecked = false;
    $('label[data-id="precios"] input[type=checkbox]').each(function() {
        if ($(this).is(":checked")) {
            anyBoxesChecked = true;
            $('.btn-precios').css('display', 'block')
        }
    });

    if (anyBoxesChecked == false) {

        $('.btn-precios').css('display', 'none')
        return false;
    }
}

$("label[data-id='prover'] input[type=checkbox]").click(function() {
    checkprover();
});

function checkprover() {
    var anyBoxesChecked = false;
    $('label[data-id="prover"] input[type=checkbox]').each(function() {
        if ($(this).is(":checked")) {
            anyBoxesChecked = true;
            $('.btn-prover').css('display', 'block')
        }
    });

    if (anyBoxesChecked == false) {

        $('.btn-prover').css('display', 'none')
        return false;
    }
}

$("label[data-id='another'] input[type=checkbox]").click(function() {
    checkanother();
});

function checkanother() {
    var anyBoxesChecked = false;
    $('label[data-id="another"] input[type=checkbox]').each(function() {
        if ($(this).is(":checked")) {
            anyBoxesChecked = true;
            $('.btn-another').css('display', 'block')
        }
    });

    if (anyBoxesChecked == false) {

        $('.btn-another').css('display', 'none')
        return false;
    }
}



if ($(window).width() < 768) {
    $('input[type=checkbox]').click(function() {
        btnFilter()
    })

    function btnFilter() {
        var isFalse = false
        $('input[type=checkbox]').each(function() {
            if ($(this).is(':checked')) {
                isFalse = true
                $('.btn-simple').css('display', 'block')
                $('.btn-simple').addClass('btn-floating')
            } else {

            }
        });
        if (isFalse == false) {

            $('.btn-simple').css('display', 'none')
            $('.btn-simple').removeClass('btn-floating')
        }
    }
}


/*=========================================================================
   Preview Items
=========================================================================*/

if ($('.content-view').length) {
    let product = $('.product-view');
    let item = $('.span-thumbail');

    item.click(function(ev) {
        let bg = $(this).css('background-image');
        bg = bg.replace('url(', '').replace(')', '');


        product.attr('src', bg.replace(/['"]+/g, ''));


    })
} else {

}


/*=========================================================================
   Nav Drop
=========================================================================*/

if ($('.name')) {

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }


    $('.name').click(function() {
        myFunction();
    })
}

/*=========================================================================
   User Avatar
=========================================================================*/

function chooseFile() {
    document.getElementById("file").click();
}


if ($('#file').length) {
    document.querySelector('#file')
        .addEventListener("change", function(ev) {
            let files = ev.target.files;
            console.log(files);
            let image = files[0];
            let imageURL = URL.createObjectURL(image);
            document.querySelector('.null-img')
                .style.backgroundImage = "url('" + imageURL + "')";
            document.getElementById('img-des').innerHTML = document.getElementById('file').files[0].name;
        });
}


/*=========================================================================
   Fixed nav
=========================================================================*/




/*=========================================================================
   Btn filter active
=========================================================================*/

$('.btn-simple').click(function() {
    if ($('.filter-btn').hasClass('active-filter')) {
        $('.btn-button-filter').click()
    } else {
        alert('msg');
    }
})

/*=========================================================================
   Input counter
=========================================================================*/
$(document).ready(function() {
    $('.minus').click(function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function() {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});



/*=========================================================================
   Collapse cambiar contraseña
=========================================================================*/

$('.toggleCollapse').click(function() {
    $('.contrasena-toggle').toggleClass('hide');
})


/*=========================================================================
   
=========================================================================*/

function addFields() {
    // Number of inputs to create
    var number = document.getElementById("member").value;
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("preciii");
    // Clear previous contents of the container
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i = 0; i < number; i++) {
        // Append a node with a random text
        container.appendChild(document.createTextNode("Member " + (i + 1)));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.type = "text";
        input.name = "member" + i;
        container.appendChild(input);
        // Append a line break 
        container.appendChild(document.createElement("br"));
    }
}