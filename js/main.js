var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;

		mywindow.scroll(function(){
		  newscroll = mywindow.scrollTop();

		    if (newscroll > 300 && !up) {
		        $( ".phantom" ).fadeIn(300);
		
		        up = !up;
		        
		      } else if(newscroll < 300 && up) {
		        $( ".phantom" ).fadeOut(150);
		        up = !up;
		      }
		      mypos = newscroll;
		      return false;

		  
		});

$('.flexslider').flexslider({
	controlNav: false,
	directionNav: false
});

$('.hero__text').delay(800).fadeIn(800).delay(4000).fadeOut(600);