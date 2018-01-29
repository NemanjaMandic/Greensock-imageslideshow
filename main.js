//var logo = document.getElementsByClassName("logo");



(function($){
  
 
var master = new TimelineMax();

master.add(tagLine());

master.play();
     
  GSDevTools.create();    
      

 

function tagLine(){
    var text = new SplitText(".tagline", { type: "chars"});
    var tl = new TimeLineLite();
    tl.staggerFrom(text.chars, 0.5, {opacity: 0, y: 80, ease:Back.easeOut}, 0.03)
      .staggerTo(text.chars, 0.5, {opacity: 0, scale: 0, x: 100, ease:Back.easeIn}, 0.03, "+=0.5");
      
    return tl;  
}    

 


 
})(jQuery);