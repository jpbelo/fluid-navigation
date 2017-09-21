// ENTER PAGE
		$(document).ready(function() {
// INITIAL STATE
			$( "#contentWrapper" ).css({
				opacity: 0,
				y: -100
			});

// SHOW CONTENT
			$( "#contentWrapper" ).transition({
				opacity: 1,
				y: 0,
				duration: 800,
				easing: 'ease'
			});

		});



// CLICK LINKS
		$("body").on('click', '.pageLink', function() {

			event.preventDefault();
			var urlString = $(this).attr('href');
			var windowWidth = $(window).width();

// HIDE CONTENT --- IF BIGGER THAN 959px (SOME MOBILE HAVE SOME ISSUES WITH THIS)
			if(windowWidth>959){
				$( "#contentWrapper, footer" ).animate({
					opacity: 0,
					y: 100
				}, {
					duration: 200,
					specialEasing: {
						opacity: "linear",
						y: "linear"
					},
					complete: function() {
// GO TO NEXT PAGE
						window.location.href = urlString;
					}
				});
			}else{
// MOBILE
				window.location.href = urlString;
			}

		});



// RELOAD ON BACK
		$(window).bind("pageshow", function(event) {
		  if (event.originalEvent.persisted) {
		    window.location.reload()
		  }
		});




// ON SCROLL
		$(window).scroll( function(){


// HIDE ME
			$('.hideMe').each( function(){

				var hideDelay = $(this).data('hideme-delay');
				if(!hideDelay){
					hideDelay = '0';
				}
				var hideTime = $(this).data('hideme-time');
				if(!hideTime){
					hideTime = '350';
				}
				var hidePosition = $(this).data('hideme-y');
				if(!hidePosition){
					hidePosition = 100;
				}
				var position_of_object = $(this).offset().top + hidePosition;
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				if( bottom_of_window > position_of_object ){
					$(this).transition({
						opacity: 1,
						y: 0,
						duration: hideTime,
						easing: 'ease',
						delay: hideDelay
					});
				}

			});







		});
		setTimeout(function(){ $(window).scroll(); }, 500);
