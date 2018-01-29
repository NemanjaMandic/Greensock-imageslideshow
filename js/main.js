(function($) {

	// Our code will go here

    var $activeSlide = $('.active'),
        $homeSlide = $('.homeSlide'),
        $slideNavPrev = $('.slideNavPrev'),
        $slideNavNext = $('.slideNavNext'),
        $slideNavPrevA = $('.slideNavPrev a'),
        $slideNavNextA = $('.slideNavNext a'),
        $hero = $('.hero');
        
        
    function init(){
        TweenLite.set($homeSlide.not($activeSlide), { autoAlpha: 0 } );
        
        TweenLite.set($slideNavPrev, { autoAlpha: 0.2 });
    }
    
    init();
    
    //go to next slide
    function goToNextSlide(slideOut, slideIn){
        var tl = new TimelineLite();
        
        var slideOutH1 = slideOut.find('h1'),
            slideOutP = slideOut.find('p'),
            slideInH1 = slideOut.find('h1'),
            slideInP = slideOut.find('p'),
            index = slideIn.index(),
            size = $('.top .homeSlide').length;
            
            //go to next slide timeline
            if (slideIn.length !== 0) {
                tl.set(slideIn, { y: '100%', autoAlpha: 1, className: '+=active'})
                  .set(slideOut, { className: '-=active'})
                  .to([slideOutH1, slideOutP], 0.3, { y: '-=15px', autoAlpha: 0, ease:Power3.easeInOut}, 0)
                  .to(slideOut, 0.5, { y: '-100%', ease:Power3.easeInOut}, 0)
                  .to(slideIn, 0.5, { y: '-=100%', ease:Power3.easeInOut}, 0)
                  .fromTo([slideInH1, slideInP], 0.3, { y: '+=20px', autoAlpha: 0 }, { autoAlpha: 1, y: 0, ease:Power1.easeInOut }, 0.3);
            }
        
        TweenLite.set($slideNavPrev, { autoAlpha: 1 });
        
        console.log(index);
        
        if(index === size){
            TweenLite.to($slideNavNext, 0.3, { autoAlpha: 0.2 });
        }
    }
    
    $slideNavNext.click(function(e){
       e.preventDefault();
       
       var slideOut = $('.homeSlide.active'),
           slideIn = $('.homeSlide.active').next('.homeSlide');
       
       goToNextSlide(slideOut, slideIn);
       
    });
    
     //go to previous slide
    function goToPreviousSlide(slideOut, slideIn){
        var tl = new TimelineLite();
        
        var slideOutH1 = slideOut.find('h1'),
            slideOutP = slideOut.find('p'),
            slideInH1 = slideOut.find('h1'),
            slideInP = slideOut.find('p'),
            index = slideIn.index(),
            size = $('.top .homeSlide').length;
            
            //go to next slide timeline
            if (slideIn.length !== 0) {
                tl.set(slideIn, { y: '-100%', autoAlpha: 1, className: '+=active'})
                  .set(slideOut, { className: '-=active'})
                  .to([slideOutH1, slideOutP], 0.3, { y: '+=15px', autoAlpha: 0, ease:Power3.easeInOut}, 0)
                  .to(slideOut, 0.5, { y: '100%', ease:Power3.easeInOut}, 0)
                  .to(slideIn, 0.5, { y: '+=100%', ease:Power3.easeInOut}, 0)
                  .fromTo([slideInH1, slideInP], 0.3, { y: '-=20px', autoAlpha: 0 }, { autoAlpha: 1, y: 0, ease:Power1.easeInOut }, 0.3);
            }
        
        TweenLite.set($slideNavNext, { autoAlpha: 1 });
        
        console.log(index);
        
        if(index === 1){
            TweenLite.to($slideNavPrev, 0.3, { autoAlpha: 0.2 });
        }
    }
    
    //Navigation Click - go the previous slide
    $slideNavPrev.click(function(e){
       e.preventDefault();
       
       var slideOut = $('.homeSlide.active'),
           slideIn = $('.homeSlide.active').prev('.homeSlide');
       
       goToPreviousSlide(slideOut, slideIn);
       
    });
    
    $(document).mousemove(function(event){
        
        var xPos = (event.clientX / $(window).width()) - 0.5;
        var yPos = (event.clientY / $(window).height()) - 0.5;
        
        console.log(xPos + ', ' + yPos);
        
        
        //Tilt the hero container
        TweenLite.to($hero, 0.6, { 
            rotationY: 5 * xPos, rotationX: 5 * yPos, 
            ease:Power1.easeOut, 
            transformPerspective: 900, 
            transformOrigin: 'center' 
            
        });
        
        $('.bottom strong').text(event.pageX + ', ' + event.pageY);
    });
    
})(jQuery);