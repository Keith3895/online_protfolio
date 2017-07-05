jQuery(document).ready(function($){
	
	// $('#page_id').html(window.location.href.split('/')[3]);
	

	switch(window.location.href.split('/')[3]){
		case 'Home':
			$('cd-3d-nav').children().removeClass('cd-selected');
			$('ul.cd-3d-nav li:nth-child(1)').addClass('cd-selected');

		break;
		case 'Projects':
			$('cd-3d-nav').children().removeClass('cd-selected');
			$('ul.cd-3d-nav li:nth-child(2)').addClass('cd-selected');
		break;
		case 'Blog':
			$('cd-3d-nav').children().removeClass('cd-selected');
			$('ul.cd-3d-nav li:nth-child(3)').addClass('cd-selected');
		break;
		case 'About':
			$('cd-3d-nav').children().removeClass('cd-selected');
			$('ul.cd-3d-nav li:nth-child(4)').addClass('cd-selected');
		break;
		case 'Contact':
			$('cd-3d-nav').children().removeClass('cd-selected');
			$('ul.cd-3d-nav li:nth-child(5)').addClass('cd-selected');
		break;
	}
	//toggle 3d navigation
	$('.cd-3d-nav-trigger').on('click', function(){
		toggle3dBlock(!$('.cd-header').hasClass('nav-is-visible'));
	});

	//select a new item from the 3d navigation
	$('.cd-3d-nav').on('click', 'a', function(){
		var selected = $(this);
		selected.parent('li').addClass('cd-selected').siblings('li').removeClass('cd-selected');
		updateSelectedNav('close');
		// console.log(selected.html());
		
		var interval = setInterval(function(){
			window.location.href='/'+selected.html();
		}, 1000);
		
	});

	$(window).on('resize', function(){
		window.requestAnimationFrame(updateSelectedNav);
	});

	function toggle3dBlock(addOrRemove) {
		if(typeof(addOrRemove)==='undefined') addOrRemove = true;	
		$('.cd-header').toggleClass('nav-is-visible', addOrRemove);
		$('.cd-3d-nav-container').toggleClass('nav-is-visible', addOrRemove);
		$('main').toggleClass('nav-is-visible', addOrRemove).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			//fix marker position when opening the menu (after a window resize)
			addOrRemove && updateSelectedNav();
		});
	}

	//this function update the .cd-marker position
	function updateSelectedNav(type) {
		var selectedItem = $('.cd-selected'),
			selectedItemPosition = selectedItem.index() + 1, 
			leftPosition = selectedItem.offset().left,
			backgroundColor = selectedItem.data('color'),
			marker = $('.cd-marker');

		marker.removeClassPrefix('color').addClass('color-'+ selectedItemPosition).css({
			'left': leftPosition,
		});
		if( type == 'close') {
			marker.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				toggle3dBlock(false);
			});
		}
	}

	$.fn.removeClassPrefix = function(prefix) {
	    this.each(function(i, el) {
	        var classes = el.className.split(" ").filter(function(c) {
	            return c.lastIndexOf(prefix, 0) !== 0;
	        });
	        el.className = $.trim(classes.join(" "));
	    });
	    return this;
	};
});