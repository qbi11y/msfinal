$(document).ready(function() {
	console.log('connected', screen.width);
	if ( screen.width > 1024 ) {
		$('#access').removeClass('hidden');
		$('#signin-form').addClass('hidden');
	}

	$('.button.signup').click(function() {
		$('body').addClass('no-scroll');
		$('#slogan').animate({opacity: 0}, 250, function() {
			$('#header .signup').animate({opacity: 0}, 100, function() {
				$('#header').animate({ height: screen.height}, 250, function() {
					$('#signin-form').removeClass('hidden');
					$('#signin-form').animate({opacity: 1.0});
				});
				$('.button.signin').animate({opacity: 1.0});
				$('#signin-form input').removeClass('hidden');
				$('#signin-form .signup').removeClass('hidden');
				$('#signin-form .cancel').removeClass('hidden');
				$('#signin-form .signin').addClass('hidden');

			});
		})
	})

	$('.button.signin').click(function() {
		$('body').addClass('no-scroll');
		$(this).animate({opacity: 0}, 250, function() {
			$('#header').animate({ height: screen.height}, 100, function() {
				$('#signin-form').removeClass('hidden');
				$('#signin-form').animate({opacity: 1.0});
			});

			$('.button.signup').animate({opacity: 1.0});
			$('#signin-form input').each(function() {
				console.log($(this).attr('id'));
				if ($(this).attr('id') != 'email' && $(this).attr('id') != 'passphrase') {
					$(this).addClass('hidden');
				}
				$('#signin-form .signup').addClass('hidden');
				$('#signin-form .signin').removeClass('hidden');
				$('#signin-form .cancel').removeClass('hidden');
			})

		})
	});

	$('.button.cancel').click(function() {
		console.log('show signup');
		$('#signin-form').animate({opacity: 0}, 250, function() {
			$('#header').animate({height: '75px'}, 250, function() {
				$('.button.signup').animate({opacity: 1}, 250);
				$('.button.signin').animate({opacity: 1}, 250)	
			})
			$('#slogan').animate({opacity: 1.0}, 250);
		});
		$('body').removeClass('no-scroll');
		
		//, function() {
			//
		//});
	})
})