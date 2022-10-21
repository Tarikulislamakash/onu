/* Show and hide menu */

$(document).ready(function(){

	$(window).scroll(function(){

		if ( $(window).scrollTop() < 100 )
		{
			$('.navbar').css({

				//'margin-top' : '-100px',
				'opacity'    : '1'

			});


			$('.navbar-default').css({

				'background-color' : 'rgba(59, 59, 59, 0)'

			});
		}
		else
		{
			$('.navbar').css({

				//'margin-top' : '0px',
				'opacity'    : '1'
 
			});


			$('.navbar-default').css({

				'background-color' : 'rgba(59, 59, 59, 1)',
				'border-color'     : '#444'

			});
		}

	});

});