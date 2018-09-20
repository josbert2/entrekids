'use strict';

/*=========================================================================
   Croppie
=========================================================================*/

/*$(document).ready(function(){
  var basic = $('#main-cropper').croppie({
    viewport: { width: 250, height: 250 },
    boundary: { width: 300, height: 300 },
    showZoomer: false,
    url: '../img/placeholder.png'
});

function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#main-cropper').croppie('bind', {
        url: e.target.result
      });
      $('.actionDone').toggle();
      $('.actionUpload').toggle();
    }

    reader.readAsDataURL(input.files[0]);
  }
}

$('.actionUpload input').on('change', function () { readFile(this); });
$('.actionDone').on('click', function(){
  $('.actionDone').toggle();
  $('.actionUpload').toggle();
})
})
*/

/*=========================================================================
   Range Slider
=========================================================================*/
if ($("#slider-range").length) {
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
}


/*=========================================================================
   Mobile Menu
=========================================================================*/
if (document.querySelector(".menu")) {
    var myMenu = document.querySelector(".menu");
    var clsMenu = document.querySelector(".header-mobile");
    var oppMenu = document.querySelector(".ham");

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


    oppMenu.addEventListener("click", toggleClassMenu, false);
    clsMenu.addEventListener("click", toggleClassMenu, false);
} else {

}


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
                    scrollTop: $(".filter-btn").offset().top + -200
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
if ($("#slider-range-price").length) {
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
}

/*=========================================================================
   Modal
=========================================================================*/

/*=========================================================================
   JS Scroll Btn FIlter
=========================================================================*/



var header = $(".filter-section");
var headerTwo = $('#main-fixed-nav-nav');
var drop = $('#myDropdown');
let card_content = $('.filter-btn');
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        header.addClass("fixed");
        drop.addClass("fixed-drop");
        headerTwo.addClass('is-hidden-nav')

    } else {
        header.removeClass("fixed");
        drop.removeClass("fixed-drop");
        headerTwo.removeClass('is-hidden-nav')
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


if ($('.cart-btn')) {

    function myFunction() {
        $('#myCart').toggleClass('show');

    }


    $('.cart-dropdowm').click(function() {
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
var i = 2;
$("#more-price").click(function(e) {
    //Append a new row of code to the "#items" div
    $("#preciii").append('<div class="d-flex align-items-center m-b-10 m-r-10"><input class="" name="precio[]" type="text" style="position:relative; width:300px!important" placeholder="Precio ' + i + '"/><button style="    background: none;" class="delete absolute-ps"><img src="img/close-svg.svg" alt=""></button></div>');
    i++;
});
$("body").on("click", ".delete", function(e) {
    $(this).parent("div").remove();
    i--;
});

$(document).ready(function() {
    if ($("#omisiones-date").length) {
        $("#omisiones-date").datepicker({
            onSelect: function(date) {
                $("#omisiones-input").find("span").text(date);
            }
        });
    }




    $('.more-input-date').click(function() {

        $("#omisiones").append(`<div class="d-flex align-items-center m-r-10">
    <input 
    class="modal-input modal-input m-b-5 m-r-5 datepicker-dinamyc" 
    type="text" name="omisiones[]"
    
    placeholder="20/09/18" >
    <button class="dele-omisiones"><img src="img/close-svg.svg" alt="" class="m-b-5"></button>
     </div>`)
    })
    $('body').on('focus', ".datepicker-dinamyc", function() {
        $(this).datepicker({
            dateFormat: 'yy-mm-dd',
            showButtonPanel: true,
            changeMonth: true,
            changeYear: true,
            defaultDate: +0,


        });

    });

})


$("body").on("click", ".dele-omisiones", function(e) {
    $(this).parent("div").remove();
    i--;
});



var calendario_count = 1;
$('#more-calendar').click(function() {
    let html = `
<div style="position:relative;margin-bottom: 10px;">
  <div class="row no-margin padding-section-modal" id="letmet">
                  <div class="modal-popup d-flex justify-content-center w100">Horario y Precios de la Actividad (${calendario_count})</div>
                  <div class="row no-margin w100 m-b-25" id="calendar">
                    <div class="col-md-7 d-flex">
                       <div class="d-flex flex-column align-items-center m-b-10 m-r-10 m-l-40">
    <p class="m-b-15">Hora inicio</p>
    <input class="modal-time modal-input timepick ui-timepicker-input" type="text" placeholder="ej. 10:00 am" autocomplete="off">
  </div>
  <div class="d-flex flex-column align-items-center m-b-10 m-r-10">
    <p class="m-b-15">Hora término</p>
    <input class="modal-time modal-input timepick ui-timepicker-input" type="text" placeholder="ej. 11:00 pm" autocomplete="off">
  </div>
                      <div class="d-flex align-items-end m-b-10" style="    margin-left: 35px;"><div class="control-group m-r-5" style="    margin-top: 33px;">
<label class="control control-checkbox"> Sin restricción horario
<input type="checkbox">
<div class="control_indicator" style="margin-top: 3px;"></div>
</label>
</div>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <p class="m-b-15">Días</p>
                      <div class="d-flex justify-content-center"><div class="control-group m-r-5">
<label class="control control-checkbox"> L 
<input type="checkbox">
<div class="control_indicator"></div>
</label>
</div>
<div class="control-group m-r-5">
<label class="control control-checkbox"> M 
<input type="checkbox">
<div class="control_indicator"></div>
</label>
</div>
<div class="control-group m-r-5">
<label class="control control-checkbox"> M
<input type="checkbox">
<div class="control_indicator"></div>
</label>
</div>
<div class="control-group m-r-5">
<label class="control control-checkbox"> J 
<input type="checkbox">
<div class="control_indicator"></div>
</label>
</div>
<div class="control-group m-r-5">
<label class="control control-checkbox"> V 
<input type="checkbox">
<div class="control_indicator"></div>
</label>
</div>
<div class="control-group m-r-5">
<label class="control control-checkbox"> S 
<input type="checkbox">
<div class="control_indicator"></div>
</label>
</div>
<div class="control-group m-r-5">
<label class="control control-checkbox"> D
<input type="checkbox">
<div class="control_indicator"></div>
</label>
</div>
                      </div>
                    </div>
                  </div>
                  <div class="row no-margin w100 m-b-25">
                    <div class="col-md-3">
                      <div class="d-flex align-items-center m-b-10 justify-content-center flex-column">
                        <p class="m-b-15">Entrada</p>
                        <p class="m-t-10">Precio 1</p>
                      </div>
                    </div>
                    <div class="col-md-6 d-flex">
                      <div class="dfaj flex-column align-items-center m-b-10 m-r-35">
                        <p class="m-b-15">Cupos</p><span class="ui-spinner ui-corner-all ui-widget ui-widget-content"><input name="value" class="spinner-ui ui-spinner-input" placeholder="100" autocomplete="off" role="spinbutton"><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-n"></span><span class="ui-button-icon-space"> </span></a><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-icon-space"> </span></a></span>
                      </div>
                      <div class="dfaj flex-column align-items-center m-b-10 m-r-35">
                        <p class="m-b-15">Precio normal</p><span class="ui-spinner ui-corner-all ui-widget ui-widget-content"><input name="value" class="spinner-ui ui-spinner-input" placeholder="100" autocomplete="off" role="spinbutton"><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-n"></span><span class="ui-button-icon-space"> </span></a><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-icon-space"> </span></a></span>
                      </div>
                      <div class="dfaj flex-column align-items-center m-b-10 m-r-35">
                        <p class="m-b-15">Descuento</p><span class="ui-spinner ui-corner-all ui-widget ui-widget-content"><input name="value" class="spinner-ui ui-spinner-input" placeholder="10,00" autocomplete="off" role="spinbutton"><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-n"></span><span class="ui-button-icon-space"> </span></a><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-icon-space"> </span></a></span>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="dfaj flex-column align-items-center m-b-10 m-r-35">
                        <p class="m-b-10">Precio Publicación</p>
                        <p class="m-t-10">$99999</p>
                      </div>
                    </div>
                  </div>
                  <div class="row no-margin w100 m-b-25">
                    <div class="col-md-3">
                      <div class="d-flex align-items-center m-b-10 justify-content-center flex-column">
                        <p class="m-b-15">Entrada</p>
                        <p class="m-t-10">Precio 1</p>
                      </div>
                    </div>
                    <div class="col-md-6 d-flex">
                      <div class="dfaj flex-column align-items-center m-b-10 m-r-35">
                        <p class="m-b-15">Cupos</p><span class="ui-spinner ui-corner-all ui-widget ui-widget-content"><input name="value" class="spinner-ui ui-spinner-input" placeholder="100" autocomplete="off" role="spinbutton"><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-n"></span><span class="ui-button-icon-space"> </span></a><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-icon-space"> </span></a></span>
                      </div>
                      <div class="dfaj flex-column align-items-center m-b-10 m-r-35">
                        <p class="m-b-15">Precio normal</p><span class="ui-spinner ui-corner-all ui-widget ui-widget-content"><input name="value" class="spinner-ui ui-spinner-input" placeholder="100" autocomplete="off" role="spinbutton"><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-n"></span><span class="ui-button-icon-space"> </span></a><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-icon-space"> </span></a></span>
                      </div>
                      <div class="dfaj flex-column align-items-center m-b-10 m-r-35">
                        <p class="m-b-15">Descuento</p><span class="ui-spinner ui-corner-all ui-widget ui-widget-content"><input name="value" class="spinner-ui ui-spinner-input" placeholder="10,00" autocomplete="off" role="spinbutton"><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-n"></span><span class="ui-button-icon-space"> </span></a><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-icon-space"> </span></a></span>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="dfaj flex-column align-items-center m-b-10 m-r-35">
                        <p class="m-b-10">Precio Publicación</p>
                        <p class="m-t-10">$99999</p>
                      </div>
                    </div>
                  </div>
                  <div class="row no-margin w100 m-b-25">
                    <div class="col-md-3">
                      <div class="d-flex align-items-center m-b-10 justify-content-center flex-column">
                        <p class="m-b-15">Entrada</p>
                        <p class="m-t-10">Precio 1</p>
                      </div>
                    </div>
                    <div class="col-md-6 d-flex">
                      <div class="dfaj flex-column align-items-center m-b-10 m-r-35">
                        <p class="m-b-15">Cupos</p><span class="ui-spinner ui-corner-all ui-widget ui-widget-content"><input name="value" class="spinner-ui ui-spinner-input" placeholder="100" autocomplete="off" role="spinbutton"><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-n"></span><span class="ui-button-icon-space"> </span></a><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-icon-space"> </span></a></span>
                      </div>
                      <div class="dfaj flex-column align-items-center m-b-10 m-r-35">
                        <p class="m-b-15">Precio normal</p><span class="ui-spinner ui-corner-all ui-widget ui-widget-content"><input name="value" class="spinner-ui ui-spinner-input" placeholder="100" autocomplete="off" role="spinbutton"><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-n"></span><span class="ui-button-icon-space"> </span></a><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-icon-space"> </span></a></span>
                      </div>
                      <div class="dfaj flex-column align-items-center m-b-10 m-r-35">
                        <p class="m-b-15">Descuento</p><span class="ui-spinner ui-corner-all ui-widget ui-widget-content"><input name="value" class="spinner-ui ui-spinner-input" placeholder="10,00" autocomplete="off" role="spinbutton"><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-n"></span><span class="ui-button-icon-space"> </span></a><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-icon-space"> </span></a></span>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="dfaj flex-column align-items-center m-b-10 m-r-35">
                        <p class="m-b-10">Precio Publicación</p>
                        <p class="m-t-10">$99999</p>
                      </div>
                    </div>
                  </div>
  
                </div><button class="delete-calendar" style="    position: absolute;
    right: -5px;
    top: 33px;
    background: no-repeat;"> <img src="img/close-svg.svg" alt=""> </button>
                  </div>
                  </div>`;

    $('#calendar').append(html);
    calendario_count++;

})


$("body").on("click", ".delete-calendar", function(e) {
    $(this).parent("div").remove();

});
$('body').on('focus', ".timepick", function() {
    $(this).timepicker();
})
/*=========================================================================
  Visible evento   
=========================================================================*/
$('.link-toggle').click(function(e) {
    e.preventDefault();
    $('.visible').toggle("slow", function() {
        // Animation complete.
    });
})

$('.staff-cpmt').click(function(e) {
    e.preventDefault();
    $(this).parent().next().toggle("slow", function() {
        // Animation complete.
    });
})

$('.visible-event').click(function() {
    var active_text = false;
    var text = 'La actividad será visible cuando hagas click en "crear"';
    var t = "La actividad será visible desde la fecha determinada"
    $('#input-visible').toggle("slow", function() {





    });
    if ($('.visible-event').is(":checked")) {
        $('#change-text').html(t);
    } else {
        $('#change-text').html(text);
    }


})

$('.reservation-visible').click(function() {
    $('#hide-reservation').toggle("slow", function() {
        // Animation complete.
    });
})


/*=========================================================================
   Input file js
=========================================================================*/
var inputs = document.querySelectorAll('.inputfile');
Array.prototype.forEach.call(inputs, function(input) {
    var label = input.nextElementSibling,
        labelVal = label.innerHTML;

    input.addEventListener('change', function(e) {
        var fileName = '';
        if (this.files && this.files.length > 1)
            fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
        else
            fileName = e.target.value.split('\\').pop();

        if (fileName)
            label.querySelector('span').innerHTML = fileName;
        else
            label.innerHTML = labelVal;
    });
});

/*=========================================================================
   Smooth Scroll A menu dash
=========================================================================*/

$(document).ready(function() {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('.item-li a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.item-li a').each(function() {
            $(this).removeClass('expand-active');
        })
        $(this).addClass('expand-active');

        var target = this.hash,
            menu = target;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 30
        }, 500, 'swing', function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.expand-dash .item-li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.expand-dash li a').removeClass("expand-active");
            currLink.addClass("expand-active");
        } else {
            currLink.removeClass("expand-active");
        }
    });
}


/*=========================================================================
   Form contrasena
=========================================================================*/

$('#change-contrasena').click(function() {

    $('#hide-contrasena').toggle("slow", function() {
        // Animation complete.
    });
})

/*=========================================================================
   Validación
=========================================================================*/

$(".omisiones-control input:radio").click(function() {

    if ($(this).val() == "simple") {
        $("#avanzado").prop('disabled', true);
        $("#omilabel").prop('disabled', false);
        $('.more-input-date').prop('disabled', true);
        $('#avanzado').val('')
        $('.omisiontext').css('display', 'none')
        $('.text-omision').html('')
    }
    if ($(this).val() == "avanzado") {
        $("#avanzado").prop('disabled', false);
        $("#omilabel").prop('disabled', true);
        $('.more-input-date').prop('disabled', false);
        $('#omisiones-text').text('sin omisiones');
        $('.omisiontext').css('display', 'flex')

    }


})
$('#avanzado').change(function() {
    var inputDate = $(this).val()
    $('.text-omision').html(inputDate)
})


$(document).ready(function() {
    (function() {
        var showChar = 10;
        var ellipsestext = "<div title>...</div>";

        $(".truncate2").each(function() {
            var caracter = $(this).attr('data-caracter')

            var content = $(this).html();
            if (content.length > caracter) {
                var c = content.substr(0, caracter);
                var h = content;
                console.log(content)
                var html =
                    '<span class="truncate-text">' +
                    c + '<span class="toolpitruncate" title="' + content + '" style="cursor: pointer;position:relative">...</span></span>';

                $(this).html(html);
            }
        });

        $(".moreless").click(function() {
            var thisEl = $(this);
            var cT = thisEl.closest(".truncate-text");
            var tX = ".truncate-text";

            if (thisEl.hasClass("less")) {
                cT.prev(tX).toggle();
                cT.slideToggle();
            } else {
                cT.toggle();
                cT.next(tX).fadeToggle();
            }
            return false;
        });
        /* end iffe */
    })();

    /* end ready */
});

//setTimeout(function(){  tippy('.toolpitruncate-click',  { trigger: 'click' }) }, 1000);

/*=========================================================================
   Truncate text
=========================================================================*/
$(document).ready(function() {
    (function() {
        var showChar = 10;
        var ellipsestext = "<div title>...</div>";

        $(".truncate").each(function() {
            var content = $(this).html();
            if (content.length > showChar) {
                var c = content.substr(0, showChar);
                var h = content;
                console.log(content)
                var html =
                    '<div class="truncate-text" style=" display:flex;">' +
                    c +
                    '<span class="moreellipses">' +
                    '<div class="toolpitruncate" title="' + content + '" style="cursor: pointer">...</div>' +
                    '</span></div>';

                $(this).html(html);
            }
        });

        $(".moreless").click(function() {
            var thisEl = $(this);
            var cT = thisEl.closest(".truncate-text");
            var tX = ".truncate-text";

            if (thisEl.hasClass("less")) {
                cT.prev(tX).toggle();
                cT.slideToggle();
            } else {
                cT.toggle();
                cT.next(tX).fadeToggle();
            }
            return false;
        });
        /* end iffe */
    })();

    /* end ready */
});

//setTimeout(function(){  tippy('.toolpitruncate-click',  { trigger: 'click' }) }, 1000);

/*=========================================================================
   Read more
=========================================================================*/




/*=========================================================================
   Custom Select
=========================================================================*/



/*=========================================================================
   New relation
=========================================================================*/
//alert($('#id-img').height())



/*=========================================================================
   Script upload Croppie  1
=========================================================================*/
let WCrop = '300px';
let HCrop = '200px'



if ($('.item-dash').length) {

    $(document).ready(function() {
        $(".gambar").attr("src", "http://www.centroluziluminacion.com/media/catalog/product/cache/1/image/850x/040ec09b1e35df139433887a97daa66f/placeholder/default/placeholder.jpg");
        var $uploadCrop,
            tempFilename,
            rawImg,
            imageId;

        function readFile(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('.upload-demo').addClass('ready');
                    $('#cropImagePop').modal('show');
                    rawImg = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            } else {
                swal("Sorry - you're browser doesn't support the FileReader API");
            }
        }

        $uploadCrop = $('#upload-demo').croppie({
            viewport: {
                width: 300,
                height: 200,
            },
            enforceBoundary: true,
            enableExif: true
        });
        $('#cropImagePop').on('shown.bs.modal', function() {
            // alert('Shown pop');
            $uploadCrop.croppie('bind', {
                url: rawImg
            }).then(function() {

                $uploadCrop.croppie('setZoom', 0)
                console.log('jQuery bind complete');
            });
        });

        $('.item-img').on('change', function() {
            imageId = $(this).data('id');
            tempFilename = $(this).val();
            $('#cancelCropBtn').data('id', imageId);
            readFile(this);
        });
        $('#cropImageBtn').on('click', function(ev) {
            $uploadCrop.croppie('result', {
                type: 'base64',
                format: 'jpeg',
                size: {
                    width: 750,
                    height: 500
                }
            }).then(function(resp) {
                $('#item-img-output').attr('src', resp);
                //$('#item-img-output').css("background-image", "url(" + resp + ")" ); 
                $('#cropImagePop').modal('hide');
                $('.div-content1').css('display', 'none');
                $('.img-val').val(resp)
                $('.carabin1').append('<button class="del1" onclick="delete_photo1()" style="display: block; position: absolute; right: -5px; top: -1px; background: no-repeat;"> <img src="img/close-svg.svg" alt=""> </button>')
            });
        });

    })


    /*=========================================================================
       Script upload Croppie  2
    =========================================================================*/


    $(document).ready(function() {

        var $uploadCrop,
            tempFilename,
            rawImg,
            imageId;

        function readFile(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('.upload-demo2').addClass('ready');
                    $('#cropImagePop2').modal('show');
                    rawImg = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            } else {
                swal("Sorry - you're browser doesn't support the FileReader API");
            }
        }

        $uploadCrop = $('#upload-demo2').croppie({
            viewport: {
                width: 150,
                height: 100
            },
            enforceBoundary: false,
            enableExif: true
        });
        $('#cropImagePop2').on('shown.bs.modal', function() {
            // alert('Shown pop');
            $uploadCrop.croppie('bind', {
                url: rawImg
            }).then(function() {
                console.log('jQuery bind complete');
            });
        });

        $('.item-img2').on('change', function() {
            imageId = $(this).data('id');
            tempFilename = $(this).val();
            $('#cancelCropBtn2').data('id', imageId);
            readFile(this);
        });
        $('#cropImageBtn2').on('click', function(ev) {
            $uploadCrop.croppie('result', {
                type: 'base64',
                format: 'jpeg',
                size: {
                    width: 150,
                    height: 100,
                }
            }).then(function(resp) {
                $('#item-img-output2').attr('src', resp);
                //$('#item-img-output').css("background-image", "url(" + resp + ")" ); 
                $('#cropImagePop2').modal('hide');
                $('.div-content2').css('display', 'none');
                $('.img-val2').val(resp)
                $('.carabin2').append('<button class="del2" onclick="delete_photo2()" style="display: block; position: absolute; right: -5px; top: -1px; background: no-repeat;"> <img src="img/close-svg.svg" alt=""> </button>')
            });
        });


    })


    /*=========================================================================
       Script upload Croppie  3
    =========================================================================*/


    $(document).ready(function() {

        var $uploadCrop,
            tempFilename,
            rawImg,
            imageId;

        function readFile(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('.upload-demo3').addClass('ready');
                    $('#cropImagePop3').modal('show');
                    rawImg = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            } else {
                swal("Sorry - you're browser doesn't support the FileReader API");
            }
        }

        $uploadCrop = $('#upload-demo3').croppie({
            viewport: {
                width: 150,
                height: 100
            },
            enforceBoundary: false,
            enableExif: true
        });
        $('#cropImagePop3').on('shown.bs.modal', function() {
            // alert('Shown pop');
            $uploadCrop.croppie('bind', {
                url: rawImg
            }).then(function() {
                console.log('jQuery bind complete');
            });
        });

        $('.item-img3').on('change', function() {
            imageId = $(this).data('id');
            tempFilename = $(this).val();
            $('#cancelCropBtn3').data('id', imageId);
            readFile(this);
        });
        $('#cropImageBtn3').on('click', function(ev) {
            $uploadCrop.croppie('result', {
                type: 'base64',
                format: 'jpeg',
                size: {
                    width: 150,
                    height: 100
                }
            }).then(function(resp) {
                $('#item-img-output3').attr('src', resp);
                //$('#item-img-output').css("background-image", "url(" + resp + ")" );  
                $('#cropImagePop3').modal('hide');
                $('.div-content3').css('display', 'none');
                $('.img-val3').val(resp)
                $('.carabin3').append('<button class="del3" onclick="delete_photo3()" style="display: block; position: absolute; right: -5px; top: -1px; background: no-repeat;"> <img src="img/close-svg.svg" alt=""> </button>')
            });
        });


    })

    /*=========================================================================
       Script upload Croppie 4
    =========================================================================*/


    $(document).ready(function() {

        var $uploadCrop,
            tempFilename,
            rawImg,
            imageId;

        function readFile(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('.upload-demo4').addClass('ready');
                    $('#cropImagePop4').modal('show');
                    rawImg = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            } else {
                swal("Sorry - you're browser doesn't support the FileReader API");
            }
        }

        $uploadCrop = $('#upload-demo4').croppie({
            viewport: {
                width: 150,
                height: 100
            },
            enforceBoundary: false,
            enableExif: true
        });
        $('#cropImagePop4').on('shown.bs.modal', function() {
            // alert('Shown pop');
            $uploadCrop.croppie('bind', {
                url: rawImg
            }).then(function() {
                console.log('jQuery bind complete');
            });
        });

        $('.item-img4').on('change', function() {
            imageId = $(this).data('id');
            tempFilename = $(this).val();
            $('#cancelCropBtn4').data('id', imageId);
            readFile(this);
        });
        $('#cropImageBtn4').on('click', function(ev) {
            $uploadCrop.croppie('result', {
                type: 'base64',
                format: 'jpeg',
                size: {
                    width: 150,
                    height: 100
                }
            }).then(function(resp) {
                $('#item-img-output4').attr('src', resp);
                //$('#item-img-output').css("background-image", "url(" + resp + ")" ); 
                $('#cropImagePop4').modal('hide');
                $('.div-content4').css('display', 'none');
                $('.img-val4').val(resp)
                $('.carabin4').append('<button class="del4" onclick="delete_photo1()" style="display: block; position: absolute; right: -5px; top: -1px; background: no-repeat;"> <img src="img/close-svg.svg" alt=""> </button>')
            });
        });


    })


    /*=========================================================================
       Script upload Croppie 5
    =========================================================================*/


    $(document).ready(function() {

        var $uploadCrop,
            tempFilename,
            rawImg,
            imageId;

        function readFile(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('.upload-demo5').addClass('ready');
                    $('#cropImagePop5').modal('show');
                    rawImg = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            } else {
                swal("Sorry - you're browser doesn't support the FileReader API");
            }
        }

        $uploadCrop = $('#upload-demo5').croppie({
            viewport: {
                width: 150,
                height: 100
            },
            enforceBoundary: false,
            enableExif: true
        });
        $('#cropImagePop5').on('shown.bs.modal', function() {
            // alert('Shown pop');
            $uploadCrop.croppie('bind', {
                url: rawImg
            }).then(function() {
                console.log('jQuery bind complete');
            });
        });

        $('.item-img5').on('change', function() {
            imageId = $(this).data('id');
            tempFilename = $(this).val();
            $('#cancelCropBtn5').data('id', imageId);
            readFile(this);
        });
        $('#cropImageBtn5').on('click', function(ev) {
            $uploadCrop.croppie('result', {
                type: 'base64',
                format: 'jpeg',
                size: {
                    width: 150,
                    height: 100
                }
            }).then(function(resp) {
                $('#item-img-output5').attr('src', resp);
                //$('#item-img-output').css("background-image", "url(" + resp + ")" );  
                $('#cropImagePop5').modal('hide');
                $('.div-content5').css('display', 'none');
                $('.img-val5').val(resp)
                $('.carabin5').append('<button class="del5" onclick="delete_photo5()" style="display: block; position: absolute; right: -5px; top: -1px; background: no-repeat;"> <img src="img/close-svg.svg" alt=""> </button>')
            });
        });


    })


    /*=========================================================================
       Script upload Croppie 6
    =========================================================================*/


    $(document).ready(function() {

        var $uploadCrop,
            tempFilename,
            rawImg,
            imageId;

        function readFile(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('.upload-demo6').addClass('ready');
                    $('#cropImagePop6').modal('show');
                    rawImg = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            } else {
                swal("Sorry - you're browser doesn't support the FileReader API");
            }
        }

        $uploadCrop = $('#upload-demo6').croppie({
            viewport: {
                width: 150,
                height: 100
            },
            enforceBoundary: false,
            enableExif: true
        });
        $('#cropImagePop6').on('shown.bs.modal', function() {
            // alert('Shown pop');
            $uploadCrop.croppie('bind', {
                url: rawImg
            }).then(function() {
                console.log('jQuery bind complete');
            });
        });

        $('.item-img6').on('change', function() {
            imageId = $(this).data('id');
            tempFilename = $(this).val();
            $('#cancelCropBtn6').data('id', imageId);
            readFile(this);
        });
        $('#cropImageBtn6').on('click', function(ev) {
            $uploadCrop.croppie('result', {
                type: 'base64',
                format: 'jpeg',
                size: {
                    width: 150,
                    height: 100
                }
            }).then(function(resp) {
                $('#item-img-output6').attr('src', resp);
                //$('#item-img-output').css("background-image", "url(" + resp + ")" );  
                $('#cropImagePop6').modal('hide');
                $('.div-content6').css('display', 'none');
                $('.img-val6').val(resp)
                $('.carabin6').append('<button class="del6" onclick="delete_photo6()" style="display: block; position: absolute; right: -5px; top: -1px; background: no-repeat;"> <img src="img/close-svg.svg" alt=""> </button>')
            });
        });


    })




    /*=========================================================================
       Delete photo
    =========================================================================*/





} //End if

function delete_photo1() {
    $('.div-content1').css('display', 'block');
    $('.div-content1').css({
        'top': '31px',
        'left': '41px'
    })
    $('.carabin1').find(".gambar").attr("src", "http://www.centroluziluminacion.com/media/catalog/product/cache/1/image/850x/040ec09b1e35df139433887a97daa66f/placeholder/default/placeholder.jpg");
    setTimeout(function() {
        $('.del1').remove()
    }, 300)
    $('img-val').val('')

}

function delete_photo2() {
    $('.div-content2').css('display', 'block');
    $('.div-content2').css({
        'top': '31px',
        'left': '41px'
    })
    $('.carabin2').find(".gambar").attr("src", "http://www.centroluziluminacion.com/media/catalog/product/cache/1/image/850x/040ec09b1e35df139433887a97daa66f/placeholder/default/placeholder.jpg");
    setTimeout(function() {
        $('.del2').remove()
    }, 300)
    $('img-val2').val('')
}

function delete_photo3() {
    $('.div-content3').css('display', 'block');
    $('.div-content3').css({
        'top': '31px',
        'left': '41px'
    })
    $('.carabin3').find(".gambar").attr("src", "http://www.centroluziluminacion.com/media/catalog/product/cache/1/image/850x/040ec09b1e35df139433887a97daa66f/placeholder/default/placeholder.jpg");
    setTimeout(function() {
        $('.del3').remove()
    }, 300)
    $('img-val3').val('')
}

function delete_photo4() {
    $('.div-content4').css('display', 'block');
    $('.div-content4').css({
        'top': '31px',
        'left': '41px'
    })
    $('.carabin4').find(".gambar").attr("src", "http://www.centroluziluminacion.com/media/catalog/product/cache/1/image/850x/040ec09b1e35df139433887a97daa66f/placeholder/default/placeholder.jpg");
    setTimeout(function() {
        $('.del4').remove()
    }, 300)
    $('img-val4').val('')
}

function delete_photo5() {
    $('.div-content5').css('display', 'block');
    $('.div-content5').css({
        'top': '31px',
        'left': '41px'
    })
    $('.carabin5').find(".gambar").attr("src", "http://www.centroluziluminacion.com/media/catalog/product/cache/1/image/850x/040ec09b1e35df139433887a97daa66f/placeholder/default/placeholder.jpg");
    setTimeout(function() {
        $('.del5').remove()
    }, 300)
    $('img-val5').val('')
}

function delete_photo6() {
    $('.div-content6').css('display', 'block');
    $('.div-content6').css({
        'top': '31px',
        'left': '41px'
    })
    $('.carabin6').find(".gambar").attr("src", "http://www.centroluziluminacion.com/media/catalog/product/cache/1/image/850x/040ec09b1e35df139433887a97daa66f/placeholder/default/placeholder.jpg");
    setTimeout(function() {
        $('.del6').remove()
    }, 300)
    $('img-val6').val('')
}





/*=========================================================================
   Tabs
=========================================================================*/

if ($('.tabgroup').length) {
    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.change-tabs li a').click(function(e) {
        e.preventDefault();
        $('.change-tabs li').removeClass('active-li');
        var $this = $(this),
            tabgroup = '#' + $this.parents('.change-tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');

        //others.removeClass('active-li');

        $this.parent().addClass('active-li');

        $(tabgroup).children('div').hide();
        $(target).show();


    })

}



/*=========================================================================
   
   Promociones toggle content
=========================================================================*/

$('.checkbox-promociones').click(function() {
    let parent = $(this).parent().next().toggle("slow", function() {

    });
})
var c = 0;
$('.categories-tags input[type=checkbox]').change(function() {

    $(this).each(function(i) {
        if ($(this).is(":checked")) {
            c++;
            if (c == 1) {
                $(this).next().css('background-color', '#F56A80')
                $(this).next().css('border-color', '#F56A80')
            }
        } else {
            c--;
            if (c == 0) {
                $(this).next().css('background-color', '')
                $(this).next().css('border-color', '')
            }
        }

    })
})
/*=========================================================================
   Var
=========================================================================*/
//alert($(window).width())



$(document).ready(function() {
    if ($(window).width() < 1200 && $(window).width() > 990) {
        $('.items-content').css('maxWidth', '73%')

    } else if ($(window).width() < 990 && $(window).width() > 768) {
        $('.items-content').css('maxWidth', '67%')
    } else if ($(window).width() == 768) {
        $('.items-content').css('maxWidth', '66%')
    } else {
        $('.items-content').css('maxWidth', '')
    }

    let w = $('.img-div').width();
    let h = $('.img-div').height();
    let d = w / 1.5;
    d = parseInt(d)
    $('.img-div').css('height', d + 'px ')
    $('.img-div img').css('height', d + 'px ')
    $('.aspect-ratio').css('height', d + 'px ')
})

window.addEventListener("resize", function() {
    let w = $('.img-div').width();
    let h = $('.img-div').height();
    let d = w / 1.5;
    d = parseInt(d)
    $('.img-div').css('height', d + 'px ')
    $('.img-div img').css('height', d + 'px ')
    $('.aspect-ratio').css('height', d + 'px ')
    if ($(window).width() < 1200 && $(window).width() > 990) {
        $('.items-content').css('maxWidth', '73%')

    } else if ($(window).width() < 990 && $(window).width() > 768) {
        $('.items-content').css('maxWidth', '67%')
    } else if ($(window).width() == 768) {
        $('.items-content').css('maxWidth', '66%')
    } else {
        $('.items-content').css('maxWidth', '')
    }

}, false);
window.addEventListener("orientationchange", function() {
    setTimeout(function() {
        let w3 = $('.img-div').width();
        let h3 = $('.img-div').height();

        let d3 = w3 / 1.5;
        d3 = parseInt(d3)
        $('.img-div').css('height', d3 + 'px ')
        $('.img-div img').css('height', d3 + 'px ')
        $('.aspect-ratio').css('height', d3 + 'px ')
    }, 400)
}, false);



$('.promociones-collapse').click(function(e) {
    e.preventDefault()
    $(this).parent().parent().next().toggle("slow", function() {

    });
})



/*=========================================================================
   Chart
=========================================================================*/
$(document).ready(function() {
    if (document.getElementById("myChart")) {
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["20/20", "59/3", "5/5", "3/56", "58/58", "20/20", "20/20", "20/20", "20/20", ],
                datasets: [{
                    label: 'Vendidas',
                    backgroundColor: "#19C6B7",
                    data: [20, 17, 5, 3, 18, 20, 4, 2, 4, ],
                }, {
                    label: 'Publicado',
                    backgroundColor: "#4A4A4A",
                    data: [20, 3, 5, 12, 13, 20, 4, 2, 4, ],
                }],
            },
            options: {
                tooltips: {
                    mode: 'index',
                    position: 'nearest',

                },

                title: {
                    display: true,

                    position: 'top'
                },
                scales: {
                    xAxes: [{
                        barPercentage: 0.5, // Tamaño de las barras
                        stacked: true,
                        gridLines: {
                            display: false,
                        },

                    }],
                    yAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero: true,
                        },
                        ticks: {

                            min: 0,
                            max: 100,
                            callback: function(value) {
                                if (value == 0 || value == 20 || value == 40 || value == 20 || value == 60 || value == 80 || value == 100)
                                    return value + "%"
                            }
                        },
                        type: 'linear',
                    }]
                },
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 10,
                        padding: 20
                    }
                },

            }
        });
        var canvas = document.getElementById("barChart");
        var ctx = canvas.getContext('2d');

        var data = {
            labels: ["Actividad 1 / 75%", "Actividad 2 / 5%", "Actividad 3 / 20%"],
            datasets: [{
                fill: true,
                backgroundColor: [
                    '#F56A80',
                    '#B1B0B2',
                    '#50E3C2'
                ],
                data: [75, 5, 20],
            }]
        };

        // Notice the rotation from the documentation.

        var options = {
            title: {
                display: true,

                position: 'top'
            },
            rotation: -0.7 * Math.PI,
            legend: {
                position: 'bottom'
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                            return previousValue + currentValue;
                        });
                        var currentValue = dataset.data[tooltipItem.index];
                        var percentage = Math.floor(((currentValue / total) * 100) + 0.5);
                        return percentage + "%";
                    }
                },
            },
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 10,
                    padding: 20
                }
            },
        };


        // Chart declaration:
        var myBarChart = new Chart(ctx, {
            type: 'pie',
            data: data,
            options: options
        });

        // Fun Fact: I've lost exactly 3 of my favorite T-shirts and 2 hoodies this way :|
    }

})

/*=========================================================================
   Checkboxes
=========================================================================*/
var expanded = false;

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

var expanded2 = false;

function showCheckboxes2() {
    var checkboxes = document.getElementById("checkboxes2");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

$(function() {
    var Accordion2 = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.item-collapse-pre');
        links.click(function() {
            $(this).toggleClass('rotate-icon-collapse');
            $(this).toggleClass('older');
        })
        links.on('click', {

            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    }

    Accordion2.prototype.dropdown = function(e) {
        var $el = e.data.el;
        let $this = $(this);
        let $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.collapse-content-pre').not($next).slideUp().parent().removeClass('open');
        };
    }
    var accordion2 = new Accordion2($('.collapse-wrap'), true);

});


/*=========================================================================
   Change Contraseña
=========================================================================*/

$('.btn-collapse').click(function() {
    $(this).parent().next().toggle("slow", function() {

    });
})


$('#input-focuss').click(function() {
    $(this).next().toggleClass('open-input')
})

$('.acti-fa').click(function() {
    $(this).parent().toggleClass('active-fabs')
})
var text = false;
$('.favorite').click(function() {

    if (text) {
        $(this).find('i').html('favorite_border');
        text = false;
    } else {
        $(this).find('i').html('favorite');
        text = true;
    }

})