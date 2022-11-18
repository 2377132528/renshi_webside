(function ($) {
"use strict";


	/* Preloader */
	var win = $(window);
	win.on('load',function() {
		$('.page-loader').delay(350).fadeOut('slow');
	});	
	
	/* menu last class added */
	$('ul.basic-menu>li').slice(-2).addClass('menu-p-right');
	
	/* meanmenu */
	 $('#mobile-nav').meanmenu({
		 meanMenuContainer: '.basic-mobile-menu',
		 meanScreenWidth: "991"
	 });	
	
	
	/* TOP Menu Stick  */
	win.on('scroll',function() {
	if ($(this).scrollTop() > 1){  
		$('#sticky-header').addClass("sticky");
	  }
	  else{
		$('#sticky-header').removeClass("sticky");
	  }
	}); 
	
	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});	
	
	/* magnificPopup img view */
	$('.popup-link').magnificPopup({
		type: 'image',
		gallery: {
		  enabled: true
		}
	});	
	

	/* main-slider */
	$('.slider-active').owlCarousel({
		loop:true,
		navText:['<i class="ion-chevron-left"></i>','<i class="ion-chevron-right"></i>'],
		nav:true,
		animateOut: 'fadeOut',
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})	
	
	/* main-slider */
	$('.testimonial-active').owlCarousel({
		loop:true,
		navText:['<i class="ion-chevron-left"></i>','<i class="ion-chevron-right"></i>'],
		nav:true,
		animateOut: 'fadeOut',
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:2
			}
		}
	})
	/* main-slider */
	$('.dep-slider').owlCarousel({
		loop:true,
		autoplay:true,
		navText:['<i class="ion-chevron-left"></i>','<i class="ion-chevron-right"></i>'],
		nav:true,
		animateOut: 'fadeOut',
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})	
	
	/* portfolio-slider */
	$('.clients-active').owlCarousel({
		loop:true,
		navText:['<i class="ion-chevron-left"></i>','<i class="ion-chevron-right"></i>'],
		nav:true,
		autoplay:true,
		animateOut: 'fadeOut',
		responsive:{
			0:{
				items:2
			},
			450:{
				items:3
			},
			768:{
				items:5
			},
			1000:{
				items:6
			}
		}
	})


	/* imagesLoaded active */
	$('#portfolio-grid').imagesLoaded( function() {
		
		/* Filter menu */
		$('.filter-menu').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});	

		/* filter menu active class  */
		$('.filter-menu button').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

		/* Filter active */
		var $grid = $('#portfolio-grid').isotope({
		  itemSelector: '.portfolio-item',
		  percentPosition: true,
		  masonry: {
			columnWidth: '.portfolio-item',
		  }
		});		
		
	});	
	
	/* scrollUp */
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 1000, // Animation in speed (ms)
		animationOutSpeed: 1000, // Animation out speed (ms)
		scrollText: '<i class="ion-chevron-up"></i>', // Text for element
	});	
	
	/* Price filter active */
	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 500,
		values: [ 75, 300 ],
		slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		" - $" + $( "#slider-range" ).slider( "values", 1 ) );
	



})(jQuery);	