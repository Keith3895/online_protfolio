var msIE = function(){
			var ieVersion = 0;
			if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //test for MSIE x.x;
				ieVersion=new Number(RegExp.$1) // capture x.x portion and store as a number
			}	
			return {
				isIE: function(){
					return ieVersion ? true : false;
				},
				isOldIE: function(){
					return (ieVersion>0 && ieVersion<9);
				},
				getIEVersion: function(){
					return ieVersion;
				}
			}
		}();
		//console fix for IE8
		if (typeof console === "undefined" || typeof console.log === "undefined") {
		     console = {};
		     console.log = function() {};
		};

var currentPageIndex = 0;
		var numberOfPages = 3;
		var pageHeight = 800;
		var currentSubPageIndex = 0;
		var numberOfSubPages = 2;
		var subPageHeight = 400;
		var transitionDuration = 5000;
		var quietPeriodBetweenTwoScrollEvents = 400;
		var lastTransitionTime = 0;
		var lastScrollEventTime = 0;
		function pageScroll(element, position) {
			if(msIE.isOldIE()){
				$(element).animate({scrollTop:(position)}, 800, 'swing', function(){});
				return;
			}
			var translation = "translate3d(0,"+(-(position))+"px,0)";
			if(msIE.isIE()){
				if(msIE.getIEVersion()==9 ){
					translation = "translate(0,"+(-(position))+"px)";
				}
			}
			$(element).css({
				'transform': translation,
				'-webkit-transform': translation,
				'-moz-transform': translation,
				'-o-transform': translation,
				'-ms-transform': translation
			});
		}
		function next(e){
		  if(!(currentPageIndex == (numberOfPages - 1))){
				currentPageIndex++;
				pageScroll("body",currentPageIndex * pageHeight);
			}
		}
		function prev(e){
			if(!(currentPageIndex == 0)){
				currentPageIndex--;
				pageScroll("body",currentPageIndex * pageHeight);
			}
		}
		function nextSubPage(e){
			if(!(currentSubPageIndex == (numberOfSubPages - 1))){
				currentSubPageIndex++;
				pageScroll(".subScrollPage", currentSubPageIndex * subPageHeight);
				e.stopPropagation();
			}else{
				//next(e);
				e.stopPropagation();
			}
		}
		function prevSubPage(e){
			if(!(currentSubPageIndex == 0)){
				currentSubPageIndex--;
				pageScroll(".subScrollPage", currentSubPageIndex * subPageHeight);
				e.stopPropagation();
			}else{
				//prev(e);
				e.stopPropagation();
			}
		}

		
	$( document ).ready(function() {      
    var is_mobile = false;

    if( $('body').css('overflow')=='visible') {
        is_mobile = true;       
    }

    // now i can use is_mobile to run javascript conditionally

    if (is_mobile != true) {
        //Conditional script here
		$( document ).ready(function() {
			$("body").scrollsteps({
				up: prev,
				down: next
			});
			$("#subScrollFrame").scrollsteps({
				up: prevSubPage,
				down: nextSubPage
			});
			pageHeight = window.innerHeight;
			$(".fullScreenPage").css("height",pageHeight);
		});
		$( window ).resize(function() {
			pageHeight = window.innerHeight;
			$(".fullScreenPage").css("height",pageHeight);
			pageScroll();
		});  
		console.log("not for phone");        
    }else{
    	$('.fullScreenPage').removeClass('fullScreenPage');
    }
 });