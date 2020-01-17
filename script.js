$(`.header-logo p`).hide();
let paddingHeader = 40;
$(window).scroll(function () { 
    if(window.pageYOffset == 0){
        paddingHeader = 40;
        $(`.header-logo p`).hide();

        $(`header`).css({'padding' : '20px 0',
        'box-shadow': 'none'});

        $(`.header-menu ul li a`).css({'font-size' : '20px',
        'padding-bottom' : '15px',
        'border-bottom': '4px solid transparent'});

        $(`.header-logo img`).css({'width' : '106px',
        'height': '41px'});
    }else{
        paddingHeader = 10;
        $(`.header-logo p`).show();

        $(`header`).css({'padding' : '5px 0',
        'box-shadow': '0px 0px 3px 0px rgba(0,0,0,0.75)'});

        $(`.header-menu ul li a`).css({'font-size' : '18px',
        'padding-bottom' : '3px',
        'border-bottom': '3px solid transparent'});

        $(`.header-logo img`).css({'width' : '73px',
        'height': '28px'});
    }
});

let flagMenu = false;
let paddingMenu;
$(`#menu`).hide();
$(`.header-menu_burger`).click(function () { 
    if (flagMenu) {
        $(`#menu`).css({'animation' : 'backgroundHide .6s ease-in-out forwards'});
        $(`#menu`).hide(600);
        $(`body`).removeClass('stopBody');
        $(`#menu .wrapper`).css({'transform' : `translateY(-100%)`});
        $(`header`).css({'box-shadow': '0px 0px 3px 0px rgba(0,0,0,0.75)'});
        flagMenu = false;
    }else{
        $(`#menu`).css({'animation' : 'backgroundShow .6s ease-in-out forwards'});
        $(`#menu`).show();
        $(`body`).addClass('stopBody');
        paddingMenu = Number($(window).height()) - Number($(window).height() - $(`header`).height());
        $(`#menu .wrapper`).css({'transform' : `translateY(${paddingMenu+paddingHeader}px)`});
        $(`header`).css({'box-shadow': 'none'});
        flagMenu = true;
    }
});
$(`#menu`).click(function () { 
    if (flagMenu) {
        $(`#menu`).css({'animation' : 'backgroundHide .6s ease-in-out forwards'});
        $(`#menu`).hide(600);
        $(`body`).removeClass('stopBody');
        $(`#menu .wrapper`).css({'transform' : `translateY(-100%)`});
        $(`header`).css({'box-shadow': '0px 0px 3px 0px rgba(0,0,0,0.75)'});
        flagMenu = false;
    }else{
        $(`#menu`).css({'animation' : 'backgroundShow .6s ease-in-out forwards'});
        $(`#menu`).show();
        $(`body`).addClass('stopBody');
        paddingMenu = Number($(window).height()) - Number($(window).height() - $(`header`).height());
        $(`#menu .wrapper`).css({'transform' : `translateY(${paddingMenu+paddingHeader}px)`});
        $(`header`).css({'box-shadow': 'none'});
        flagMenu = true;
    }
});

$(`#callBack`).hide();
$(`.submit-request__submit`).click(function () { 
    $(`#callBack`).show();
    $(`body`).addClass('stopBody');
});
$(`.callBack_title-close`).click(function () { 
    $(`#callBack`).hide();
    $(`body`).removeClass('stopBody');
});

$(`#cities`).hide();
$(`.city`).click(function () { 
    $(`#cities`).show();
    $(`body`).addClass('stopBody');
});
$(`.citiesBlock-close`).click(function () { 
    $(`#cities`).hide();
    $(`body`).removeClass('stopBody');
});


if ($(window).width() < 807) {
    // на более универсальное решение не хватило времени
    let li_1 = $(`.header-menu ul li:nth-child(1)`).html(); 
    let li_2 = $(`.header-menu ul li:nth-child(2)`).html(); 
    let li_3 = $(`.header-menu ul li:nth-child(3)`).html(); 
    $(`.secondMenu li:nth-child(1)`).html(li_1);
    $(`.secondMenu li:nth-child(2)`).html(li_2);
    $(`.secondMenu li:nth-child(3)`).html(li_3);
    $(`.header-menu ul li:nth-child(1)`).hide();
    $(`.header-menu ul li:nth-child(2)`).hide();
    $(`.header-menu ul li:nth-child(3)`).hide();

    
}

