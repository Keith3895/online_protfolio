
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
	    $('.project-description').html("<h3> GradBunker </h3> <p>GradBunker provides rarefied modules such as the placement module, library module, result module etc. </p>");
	$('#radio-front').on('click',function(){
				$('.project-description').html("<h3> GradBunker </h3> <p>GradBunker provides rarefied modules such as the placement module, library module, result module etc. </p>");
			});
	$('#radio-1').on('click',function(){
				$('.project-description').html("<h3> FestMaMu </h3> <p>FestMaMu: An event service aggirgator website. </p>");
			});
	$('#radio-2').on('click',function(){
				$('.project-description').html("<h3> Sureify </h3> <p>A webapp a audio streaming service with a simple player. </p>");
			});
	$('#radio-3').on('click',function(){
				$('.project-description').html("<h3> Pheno_bot Read Up </h3> <p>A reading repositiory on all that is needed to build a chatbot.</p>");
			});
	$('#radio-4').on('click',function(){
				$('.project-description').html("<h3> Phenobot </h3> <p>A Chatbot for Event Management using Bot Framework and LUIS. </p>");
			});
	$('#radio-5').on('click',function(){
				$('.project-description').html("<h3> Keith Franklin : Resume </h3> <p>A online copy of my resume.</p>");
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
