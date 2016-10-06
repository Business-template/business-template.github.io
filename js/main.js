// Mobile version of navigation - hubmurger

function Toggle_humburger(menuClassName, humburgerClassName, plus_height_to_menu, closedMenu_height ){
	var check = 1;
	var menu = $(menuClassName);
	var menuHeight = menu.height();

	menu.css({
		'height' : closedMenu_height + 'px'
	})

	$(humburgerClassName).click(function(){
		if(check == 0){
			menu.css({
				'height' : closedMenu_height + 'px'
			});
			check = 1;
		} else{
			menu.css({
				'height' : menuHeight + plus_height_to_menu + 'px'
			});
			check = 0;
		}
	});
};

Toggle_humburger('.main-menu ul', '.main-menu__humburger', 80, 35);

/////////////////////////////////////////////

// contact-us-modal-window
var modal = $('.contact-us-modal');
var modal_w = $('.contact-us-modal-window');
var modal_opacity_block = $('.contact-us-modal-opacity-block');
var modal_w_height = modal_w.height();

var window_height = $(window).height();
var center_of_window = (window_height * 0.5) - (modal_w_height * 0.5);

var contact_us_btn = $('.main-menu__contact-us');
var contact_us_btn_2 =  $('.modal-2');

modal_w.css({
	'top' : center_of_window + 'px'
});

modal.css({'display':'none'});

contact_us_btn.on("click", function(){
	$('.contact-us-modal').fadeIn(500);
});

contact_us_btn_2.on("click", function(){
	$('.contact-us-modal').fadeIn(500);
});

var close_btn = $('.contact-us__close-window');

var fadeItem = function (theItem){
	theItem.fadeOut(500);
	alert('asd');
}

close_btn.on("click", function(){
	modal.fadeOut(500);
});

modal_opacity_block.on("click", function(){
	modal.fadeOut(500);
});

var Box = {
	setState : function(){
		console.log('State setted');
	},

	getState : function(setState){
		return this.setState;
	}

}