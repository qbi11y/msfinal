$(function() {
	if ( screen.width > 1024 ) {
		$('#access').removeClass('hidden');
		$('#signin-form').addClass('hidden');
	}

	$(document).on('click', '.button.signup', function() {
		$('body').addClass('no-scroll');
		$('#slogan').animate({opacity: 0}, 250, function() {
			$('#header .signup').animate({opacity: 0}, 100, function() {
				$('#header').animate({ height: screen.height}, 250, function() {
					$('#signin-form').removeClass('hidden').animate({opacity: 1.0});
				});
				$('.button.signin').animate({opacity: 1.0});
				$('#signin-form input, #signin-form .signup, #signin-form .cancel').removeClass('hidden');
				$('#signin-form .signin').addClass('hidden');
			});
		})
	})

	$(document).on('click', '.button.signin', function() {
		$('body').addClass('no-scroll');
		$(this).animate({opacity: 0}, 250, function() {
			$('#header').animate({ height: screen.height}, 100, function() {
				$('#signin-form').removeClass('hidden');
				$('#signin-form').animate({opacity: 1.0});
			});
			$('.button.signup').animate({opacity: 1.0});
			$('#signin-form input').each(function() {
				if ($(this).attr('id') != 'email' && $(this).attr('id') != 'passphrase') {
					$(this).addClass('hidden');
				}
				$('#signin-form .signup').addClass('hidden');
				$('#signin-form .signin, #signin-form .cancel').removeClass('hidden');
			});
		})
	});

	$(document).on('click', '.button.cancel', function() {
		$('#signin-form').animate({opacity: 0}, 250, function() {
			$('#header').animate({height: '75px'}, 250, function() {
				$('.button.signup, .button.signin').animate({opacity: 1}, 250);	
			})
			$('#slogan').animate({opacity: 1.0}, 250);
		});
		$('body').removeClass('no-scroll');
	})
})