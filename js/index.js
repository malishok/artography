$(document).ready(function(){

    slider = $('#carousel').carousel().
        bind('slid', function() { 
            var index = $(this).find(".active").index(); 
            $(this).find(".pagination a").removeClass('pager-active').eq(index).addClass('pager-active'); 
        });
        
    if ($('.page-content .page-project').length > 0) { $('#carousel').carousel('pause') }
    if ($('.aside .page-blog').length > 0) { $('#carousel').carousel('pause') }

    $("#carousel .pagination a").click(function(e){ 
        var index = $(this).index(); 
        slider.carousel(index); 
        e.preventDefault(); 
    });
    
    // $('#carousel2').carousel('cycle');
    
    $('#lightboxCarousel').carousel({interval:100000});
    
    
    
    // Меняет цвет фона input
    $('.search input').focusin(function(){$('.search').addClass('on-focus')})
    $('.search input').focusout(function(){$('.search').removeClass('on-focus')})
    
    
    
    // Прячет placeholder на focus
    $(function(){

    $('#place-free').data('holder',$('#place-free').attr('placeholder'));

    $('#place-free').focusin(function(){
        $(this).attr('placeholder','');
    });
    $('#place-free').focusout(function(){
        $(this).attr('placeholder',$(this).data('holder'));
    });


    });
    
    
    // Меняет картинку при наведении на ссылку - Студия
    $('.face-kontakt').hover(
        function(){
            li = $($(this).closest('li'))
            div = li.find('.face-image')
            div.addClass('on-hover')
        },
        function(){
            li = $($(this).closest('li'))
            div = li.find('.face-image')
            div.removeClass('on-hover')
        }
    );
    
    
    rebindEventQuicksand = function(){
        $('.category-quicksand').click(function(e){
            destination = $(this).data('id')
            $('.page-nav .selected').removeClass('selected')
            $('.page-nav .segment-' + destination).addClass('selected')
            $('#source').quicksand( $('#segment-' + destination + ' li'), rebindEventQuicksand )
            e.preventDefault();
        })
    }
    
    $('.page-nav a').click(function(e) {
        destination = $(this).closest('li')
        $('.page-nav .selected').removeClass('selected')
        destination.addClass('selected')
        $('#source').quicksand( $('#segment-' + destination.data('id') + ' li'), rebindEventQuicksand )
        e.preventDefault();
    })
    
    rebindEventQuicksand()
    
    $(window).scroll(function(){
        if($(window).scrollTop() <= 1000) {
            $('.up-arrow').hide()
        } else {
            $('.up-arrow').show()
        }
    })
    
    carouselClick = $('.carousel-control').click
    
    $('.carousel-control').click(function(){
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        carouselClick()
    })
    $('.up-arrow').click(function(){
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        $(this).hide()
        return false
    })
    
    
    $('dt').on('click', function(){
        $(this)
            .siblings('dt').andSelf().hide()
            .end().end().next('dd').addClass('opened');
        
        $('.prices-caption').hide()
    });

    $('.close-popup').on('click', function(){
        $(this).closest('dd').removeClass('opened').siblings('dt').show();
        $('.prices-caption').show()
    })
    
    $(".red-button-back").mousedown(function(){
         $(this).removeClass('red-button-back').addClass('button-active');
       }).mouseup(function(){
         $(this).removeClass('button-active').addClass('.red-button-back');
    })
    
    $('input, textarea').placeholder();
    
});



