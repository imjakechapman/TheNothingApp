$(document).ready(function(){

    //nojs
    $("body").removeClass("no-js");

    //------------------------------------------------------------------------//

    //fakelink
    $('a[href="#"]').on('click',function(e){e.preventDefault();});

    //------------------------------------------------------------------------//

    //placeholder
    $('input[placeholder], textarea[placeholder]').placeholder();

    //------------------------------------------------------------------------//

    //tab
    $('.tabs').delegate('li:not(.active)','click',function(){$(this).addClass('active').siblings().removeClass('active').parents('.tab').find('.box').hide().eq($(this).index()).fadeIn(250);});


    // validation and subscribe
    $('#subscribe').ketchup().submit(function() {
    if ($(this).ketchup('isValid')) {
        var action = $(this).attr('action');
        $.ajax({
            url: action,
            type: 'POST',
            data: {
                email: $('#email').val()
            },
            success: function(data){
                $('#result').slideDown().html(data).css('color', 'green');
            },
            error: function() {
                $('#result').slideDown().html('Sorry, an error occurred.').css('color', 'red');
            }
        });
    }
    return false;
    });
});//document ready
