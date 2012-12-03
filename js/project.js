$(document).ready(function(){
    Pages.animations.stopedFade = {
        animating: null,
        animate: function(prev, next, done) {
            done();
            var self = this;

            if (self.animating) { self.animating.stop().hide(); }

            self.animating = prev.fadeOut(300, function() {
                self.animating = next.fadeIn(300, function () {
                    self.animating = null;
                });
            });
        }
    };
    Pages.animation = 'stopedFade';

    Pages.setURL = function (url) { location.hash = url };
    Pages.getURL = function () { return location.hash };
    Pages.watchURL = function (callback) { 
        alert(1)
        $(window).on( 'hashchange', callback) };
    Pages.unwatchURL = function () { $(window).off('hashchange') };
    Pages.pagesSelector = '.page';


    if(window.location.hash){
        $('.page').hide()
        Pages.open(window.location.hash, { pageAnimation: 'immediately' });
        Pages.animating
    }

    Pages.init()
    var current = Pages.current;
    console.log(current);
    var $pages = $('.page');
    var counter = $pages.index(current);
    var pagesNumber = $pages.length - 1;

    function nextPage(index){
        document.location = $pages.eq(index).data('url')
        Pages.open(window.location.hash, { pageAnimation: 'immediately' });
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    };

    $('.page-control.page-right').on('click', function(){
        if(counter + 1 > pagesNumber) counter = 0;
        else counter++;
        nextPage(counter);
      console.log(counter)
    });

    $('.page-control.page-left').on('click', function(){
        if(counter - 1 < 0) counter = pagesNumber;
        else counter--;
        nextPage(counter);
      console.log(counter)
    });
})
