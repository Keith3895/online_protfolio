
	window.onload = function() {
	 	try { 
	 		var options = { 
	 			textColour: 'red', 
	 			textHeight: 25, 
	 			outlineMethod: 'colour', 
	 			outlineColour: '#ffffee', 
	 			outlineOffset: 0, 
	 			depth: 0.97, 
	 			minBrightness: 0.2,
	 			maxSpeed:.05,
	 			shape: 'sphere',
	 			shuffleTags: true,
	 			zoomMin:.7,
	 			txtOpt:true,
	 			txtScale:1,
	 			textFont: 'Oswald',
	 			shadowBlur: 0,
	 			clickToFront:.9,
	 			lock:'xy',
	 			wheelZoom: false,
	 			animTiming: 'Smooth'
	 		};
	 		TagCanvas.Start('myCanvas','',options); 
	 		TagCanvas.SetSpeed('myCanvas', [-0.440, 0.360]);
	 	} catch(e) 
	 	{ // something went wrong, hide the canvas container 
	 		document.getElementById('myCanvasContainer').style.display = 'none'; 
	 	} 
	};



	var context = document.getElementById('skills').getContext('2d');
	    var skillsChart = new Chart(context).Doughnut(DoData,{
	    segmentShowStroke: false,
	    animateRotate: true,
	    animateScale: true,
	    animationSteps : 100,
	    animationEasing : "easeOutBounce",
	    });
	    document.getElementById('js-legend').innerHTML = skillsChart.generateLegend();





	    var context = document.getElementById('skills2').getContext('2d');
	    var skillsChart = new Chart(context).PolarArea(pieData,{
	      segmentShowStroke: false,
	    animateRotate: true,
	    animateScale: true,
	    animationSteps : 100,
	    animationEasing : "easeOutBounce",
	    });
	    document.getElementById('js-legend2').innerHTML = skillsChart.generateLegend();

	$('#radio-front').on('click',function(){
				$('.project-description').text("lorem ipsum 1");
			});
	$('#radio-1').on('click',function(){
				$('.project-description').text("p!");
			});
	$('#radio-2').on('click',function(){
				$('.project-description').text(" bla bla bla");
			});
	$('#radio-3').on('click',function(){
				$('.project-description').text("asdf qwerty");
			});
	$('#radio-4').on('click',function(){
				$('.project-description').text("lorem ipsum for this part");
			});
	$('#radio-5').on('click',function(){
				$('.project-description').text("lorem ipsum for this part 2");
			});
		var interval = setInterval(function(){
			$('#radio-2').click();
			
		}, 4000);
		var interval2 = setInterval(function(){
			$('#radio-2').click();
			
		}, 8000);
		var interval3 = setInterval(function(){
			$('#radio-3').click();
			
		}, 12000);
		var interval4 = setInterval(function(){
			$('#radio-4').click();
			
		}, 16000);
		var interval5 = setInterval(function(){
			$('#radio-5').click();
			
		}, 20000);
